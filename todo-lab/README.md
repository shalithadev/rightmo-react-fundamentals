# React + Vite

## 1. File Layout

```markdown
src/
  main.jsx
  App.jsx
  App.css
  components/
    TodoInput.jsx
    TodoItem.jsx
    TodoList.jsx
    Stats.jsx
  hooks/
    useLocalStorage.js
    useTodos.js
  styles.css
```

Add import "./styles.css" at the top of App.jsx.

## 2. Core ideas you’ll cover while coding

- Components & Props: TodoItem, TodoList, TodoInput, Stats

- State: useState in App and TodoInput

- Lifecycle (via hooks):

- mount/update/cleanup with useEffect

- syncing to localStorage

- an example interval with cleanup

- Refs: useRef to focus the input

- Derived/computed data: useMemo for visible/derived stats

- Stable handlers: useCallback to reduce re-renders

- Performance: React.memo on TodoItem

- Reducer: useReducer inside useTodos custom hook

- Custom Hook: useLocalStorage (generic), useTodos (domain)