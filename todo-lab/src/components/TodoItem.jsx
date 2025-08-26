import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo ${todo.done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        aria-label={`Toggle ${todo.text}`}
      />
      <span style={{ flex: 1 }}>{todo.text}</span>
      <button className="ghost" onClick={() => onRemove(todo.id)} aria-label="Delete">✕</button>
    </li>
  );
}

// Performance talking point: avoid re-render if props are shallow-equal
export default React.memo(TodoItem);
