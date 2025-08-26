// RFC/Dumb/Presentational/Stateless Component
export default function Stats({ total, done, pending, onClearDone }) {
  return (
    <div className="card row" style={{ alignItems: "center", justifyContent: "space-between" }}>
      <div className="row" style={{ gap: 12 }}>
        <span className="badge">Total: {total}</span>
        <span className="badge">Done: {done}</span>
        <span className="badge">Pending: {pending}</span>
      </div>
      <button className="ghost" onClick={onClearDone}>Clear completed</button>
    </div>
  );
}
