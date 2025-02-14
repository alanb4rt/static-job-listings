interface JobSkillProps {
  children: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export default function JobSkill({ children, className, onClick }: JobSkillProps) {
  return (
    <div
      className={`bg-[var(--color-bg)] text-[var(--color-primary)] font-bold p-2 pb-1 leading-none rounded ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
