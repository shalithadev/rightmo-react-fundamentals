import { useEffect, useState } from "react";
import "./styles.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";
import { useTodos } from "./hooks/useTodos";
import Header from "./components/Header";

export default function App() {
  const { todos, add, toggle, remove, clearDone, stats } = useTodos();
  const [title, setTitle] = useState("React Todo Lab");

  // componentDidMount + componentDidUpdate demo
  useEffect(() => {
    document.title = `${title} (${stats.pending} pending)`;
  }, [title, stats.pending]);

  return (
    <div className="container">
      <Header title={title} subtitle={"Components · Props · State · Effects · Refs · Memo · Callback · Reducer"} />

      <Stats total={stats.total} done={stats.done} pending={stats.pending} onClearDone={clearDone} />

      <div className="card" style={{ marginTop: 12, marginBottom: 12 }}>
        <TodoInput onAdd={add} />
      </div>

      <TodoList items={todos} onToggle={toggle} onRemove={remove} />

      <div className="card" style={{ marginTop: 12 }}>
        <label htmlFor="title">Rename app title:</label>
        <div className="row">
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className="ghost" onClick={() => setTitle("React Todo Lab")}>Reset</button>
        </div>
      </div>
    </div>
  );
}
