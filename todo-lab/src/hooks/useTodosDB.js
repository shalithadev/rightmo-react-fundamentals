import { useCallback } from 'react';

// Small wrapper hook around the REST API for todos.
// Returns stable callbacks to interact with the backend.
export function useTodosDB(baseUrl = 'http://localhost:3008/api/todos') {
  const fetchTodos = useCallback(async () => {
    const res = await fetch(baseUrl);
    if (!res.ok) throw new Error('Failed to fetch todos');
    return await res.json();
  }, [baseUrl]);

  const createTodo = useCallback(async (todo) => {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!res.ok) throw new Error('Failed to create todo');
    return await res.json();
  }, [baseUrl]);

  const updateTodo = useCallback(async (id, data) => {
    const res = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update todo');
    return await res.json();
  }, [baseUrl]);

  const deleteTodo = useCallback(async (id) => {
    const res = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete todo');
    return true;
  }, [baseUrl]);

  return { fetchTodos, createTodo, updateTodo, deleteTodo };
}
