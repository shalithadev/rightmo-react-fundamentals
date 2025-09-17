// RFC/Dumb/Presentational/Stateless Component
export default function Header({ title, subtitle }) {
  return (
    <div className="card header" style={{ marginBottom: 12 }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      <small>{subtitle}</small>
    </div>
  );
}
