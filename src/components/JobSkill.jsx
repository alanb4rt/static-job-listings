export default function JobSkill({ children }) {
  return (
    <li className="cursor-pointer text-[var(--color-primary)] hover:text-white font-bold bg-[var(--color-bg)] hover:bg-[var(--color-primary)] p-2 leading-none rounded">
      {children}
    </li>
  );
}
