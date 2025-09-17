import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ items, onToggle, onRemove }) {
  const [filter, setFilter] = useState("all"); // all | active | done

  const filtered = useMemo(() => {
    switch (filter) {
      case "active": return items.filter(t => !t.done);
      case "done": return items.filter(t => t.done);
      default: return items;
    }
  }, [items, filter]);

  const fruits = ["banana", "apple", "orange"];

  const todoStyles = { heading: { border: 1, fontSize: 24 } };

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <strong>Tasks</strong>
        <div className="row">
          <button className="ghost" onClick={() => setFilter("all")}>All</button>
          <button className="ghost" onClick={() => setFilter("active")}>Active</button>
          <button className="ghost" onClick={() => setFilter("done")}>Done</button>
          {fruits.map((fruit, index) => (<div key={fruit + index} >{fruit}</div>))}

          <h2 style={todoStyles.heading}>Heading 01</h2>
          <h2 style={todoStyles.heading}>Heading 02</h2>
          <h2 style={todoStyles.heading}>Heading 03</h2>
        </div>
      </div>
      <hr />
      {filtered.length === 0 ? <small>No items.</small> : (
        <ul>
          {filtered.map(t => (
            <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />
          ))}
        </ul>
      )}
    </div>
  );
}
