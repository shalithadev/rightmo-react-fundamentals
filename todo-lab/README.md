# React + Vite

## 1. File Layout

```
src/
├── main.jsx
├── App.jsx
├── App.css
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   ├── TodoList.jsx
│   └── Stats.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useTodos.js
└── styles.css
```

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

## 4. Talking points (map to class time)

### A. Components & Props (15 min)

- Show TodoItem, TodoList, TodoInput, Stats.

- Prop flow: parent (App) owns state → children raise events via props.

### B. State & Derived State (15 min)

- useState in App/TodoInput.

- useMemo in TodoList and stats in useTodos.

### C. Lifecycle via useEffect (20 min)

- Mount: focus input (TodoInput), set up interval.

- Update: change document.title on pending/title change.

- Cleanup: clear interval on unmount.

### D. Refs (5 min)

- useRef to focus textbox after adding a task.

### E. Performance & Re-renders (15 min)

- React.memo(TodoItem) to avoid re-render when other items change.

- useCallback (already used within useTodos) to keep handler identity stable.

### F. Reducer & Custom Hooks (20 min)

- useReducer in useTodos for predictable updates.

- useLocalStorage showing effect synchronization.

### G. Exercises (time-permitting)

- Add “Edit task” inline.

- Add “due date” and “sort by due date”.

- Add a simple “undo last action” using a reducer history.
