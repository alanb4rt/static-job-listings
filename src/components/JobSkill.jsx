export default function JobSkill({ children, className, onClick }) {
  return (
    <li
      className={`bg-[var(--color-bg)] text-[var(--color-primary)] font-bold p-2 leading-none rounded ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
