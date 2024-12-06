export default function Badge({ children, color }) {
  return (
    <div
      className="text-sm font-bold uppercase rounded-full text-white px-2 pt-1"
      style={{ background: color }}
    >
      {children}
    </div>
  );
}
