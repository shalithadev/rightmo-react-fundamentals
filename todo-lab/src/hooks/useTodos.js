import { useCallback, useMemo, useReducer } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { nanoid } from "nanoid"; // optional; or make simple ids

function reducer(state, action) {
  switch (action.type) {
    // used to initialize state from localStorage
    case "hydrate":
      return action.payload;
    case "add":
      return [...state, { id: action.id, text: action.text, done: false, createdAt: Date.now() }];
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

export function useTodos() {
  // use localStorage to persist todos between sessions
  // (teach: custom hooks, lazy initial state)
  const [persisted, setPersisted] = useLocalStorage("todos", []);
  // useReducer for state management
  // (teach: reducers, actions, immutability)
  // useReducer is a React Hook that lets you add a reducer to your component.
  const [todos, dispatch] = useReducer(reducer, persisted || []);

  // keep reducer state and localStorage in sync
  // (teach: reducers own the truth, persist as a side-effect at call sites)
  const add = useCallback((text) => {
    const id = nanoid();
    dispatch({ type: "add", id, text });
    setPersisted(prev => [...prev, { id, text, done: false, createdAt: Date.now() }]);
  }, [setPersisted]);

  const toggle = useCallback((id) => {
    dispatch({ type: "toggle", id });
    setPersisted(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }, [setPersisted]);

  const remove = useCallback((id) => {
    dispatch({ type: "remove", id });
    setPersisted(prev => prev.filter(t => t.id !== id));
  }, [setPersisted]);

  const clearDone = useCallback(() => {
    dispatch({ type: "clearDone" });
    setPersisted(prev => prev.filter(t => !t.done));
  }, [setPersisted]);

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    return { total, done, pending: total - done };
  }, [todos]);

  return { todos, add, toggle, remove, clearDone, stats };
}
