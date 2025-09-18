# 📘 Day 05: React Core Concepts (Part 3) — Props, Reusable Components & Lifting State Up (with Next.js)

---

## 1. Quick Recap (Day 04)
- `useState` manages state inside components.
- Events (`onClick`, `onChange`, `onSubmit`) make components interactive.
- Conditional rendering decides what UI to show.
- Built the first version of a **Todo App**.

---

## 2. Props: Passing Data Between Components

Props = inputs to a component (like function arguments).

### Example
```jsx
function TodoItem({ todo }) {
  return <li>{todo.text}</li>;
}

export default function TodoList() {
  const todos = [{ id: 1, text: "Learn React" }];
  return (
    <ul>
      {todos.map(t => <TodoItem key={t.id} todo={t} />)}
    </ul>
  );
}
```

📌 **Key Rules**
- Props are **read-only**.  
- Use props to make components **reusable**.  
- Use `key` when rendering lists.

---

## 3. Reusable Components

Break large UI into small, focused components.

### Example: Button Component
```jsx
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Page() {
  return (
    <div>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
      <Button onClick={() => alert("Delete!")}>Delete</Button>
    </div>
  );
}
```

📌 **Benefits**
- Cleaner code  
- Easier to maintain  
- Reusable across app

---

## 4. Lifting State Up

When multiple components need the **same state**, move the state **up** to their common parent.

### Example: Todo App Refactor

#### `components/TodoItem.js`
```jsx
export default function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.done ? <s>{todo.text}</s> : todo.text}
      </label>
    </li>
  );
}
```

#### `components/TodoList.js`
```jsx
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}
```

#### `app/todo/page.js`
```jsx
"use client";
import { useState } from "react";
import TodoList from "../../components/TodoList";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  return (
    <main>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </main>
  );
}
```

📌 **Concept**
- State (`todos`) is stored in the parent (`TodoPage`).  
- Child (`TodoItem`) communicates changes via props (`onToggle`).  
- This is called **lifting state up**.

---

## 5. Hands-on Exercise
1. Add a **delete button** to each Todo.  
2. Add a **counter** to show how many todos remain.  
3. Extract the **form** into its own component (`TodoForm`).  

---

## 6. Wrap-up & Key Takeaways
- Props let us **pass data** into components.  
- Components should be **small and reusable**.  
- State is often **lifted up** so siblings can share it.  
- Our **Todo App** now has:
  - Input form  
  - List with reusable components  
  - Shared state managed in the parent  

---

👉 **Next session (Day 06):** We’ll dive into **useEffect (lifecycle methods)** to fetch data, perform side-effects, and clean up resources.
