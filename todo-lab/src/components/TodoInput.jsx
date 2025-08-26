import { useEffect, useRef, useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  // componentDidMount: focus input
  useEffect(() => {
    inputRef.current?.focus();

    // Example of componentWillUnmount cleanup (interval demo)
    const id = setInterval(() => {
      // tick for demo—could update a clock, etc.
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form className="row" onSubmit={submit} role="search">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task…"
        aria-label="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
