import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { nanoid } from "nanoid"; // optional; or make simple ids

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      // ensure each todo has `id` (map _id -> id when coming from Mongo)
      return (action.payload || []).map(t => ({
        id: t.id ?? t._id ?? nanoid(),
        text: t.text,
        done: !!t.done,
        createdAt: t.createdAt ?? Date.now(),
      }));
    case "add":
      // payload is the full todo object
      return [...state, action.payload];
    case "toggle":
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case "remove":
      return state.filter(t => t.id !== action.id);
    case "clearDone":
      return state.filter(t => !t.done);
    default:
      return state;
  }
}

export function useTodos({ baseUrl = 'http://localhost:3008/api/todos' } = {}) {
  // store baseUrl in ref so callbacks can refer to stable value
  const baseRef = useRef(baseUrl);

  // internal API client
  const fetchTodos = useCallback(async () => {
    const res = await fetch(baseRef.current);
    if (!res.ok) throw new Error('Failed to fetch todos');
    return res.json();
  }, []);

  const apiCreate = useCallback(async (todo) => {
    const res = await fetch(baseRef.current, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!res.ok) throw new Error('Failed to create todo');
    return res.json();
  }, []);

  const apiUpdate = useCallback(async (id, data) => {
    const res = await fetch(`${baseRef.current}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update todo');
    return res.json();
  }, []);

  const apiDelete = useCallback(async (id) => {
    const res = await fetch(`${baseRef.current}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete todo');
    return true;
  }, []);

  // useReducer for state management (optimistic updates)
  const [todos, dispatch] = useReducer(reducer, []);

  // hydrate from DB on mount
  useEffect(() => {
    let mounted = true;
    fetchTodos()
      .then(data => {
        if (!mounted) return;
        dispatch({ type: 'hydrate', payload: data });
      })
      .catch(err => console.error('Failed to fetch todos from API', err));

    return () => { mounted = false };
  }, [fetchTodos]);

  // actions
  const add = useCallback(async (text) => {
    const id = nanoid();
    const newTodo = { id, text, done: false, createdAt: Date.now() };
    // optimistic
    dispatch({ type: 'add', payload: newTodo });
    try {
      await apiCreate(newTodo);
    } catch (err) {
      console.error('Failed to create todo:', err);
      dispatch({ type: 'remove', id });
    }
  }, [apiCreate]);

  const toggle = useCallback((id) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    dispatch({ type: 'toggle', id });
    apiUpdate(id, { ...todo, done: !todo.done }).catch(err => {
      console.error('Failed to toggle todo:', err);
      dispatch({ type: 'toggle', id }); // rollback
    });
  }, [apiUpdate, todos]);

  const remove = useCallback((id) => {
    const existing = todos.find(t => t.id === id);
    dispatch({ type: 'remove', id });
    apiDelete(id).catch(err => {
      console.error('Failed to delete todo:', err);
      if (existing) dispatch({ type: 'add', payload: existing });
    });
  }, [apiDelete, todos]);

  const clearDone = useCallback(() => {
    const doneIds = todos.filter(t => t.done).map(t => t.id);
    dispatch({ type: 'clearDone' });
    Promise.all(doneIds.map(id => apiDelete(id))).catch(err => {
      console.error('Failed to clear done todos:', err);
      // fallback: re-fetch authoritative state
      fetchTodos().then(data => dispatch({ type: 'hydrate', payload: data }));
    });
  }, [apiDelete, fetchTodos, todos]);

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    return { total, done, pending: total - done };
  }, [todos]);

  return { todos, add, toggle, remove, clearDone, stats };
}
