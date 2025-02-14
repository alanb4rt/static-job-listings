interface BadgeProps {
  children: React.ReactNode,
  variant: "isNew" | "isFeatured"
}

const BADGE_STYLES = {
  isNew: "bg-[var(--color-primary)]",
  isFeatured: "bg-[var(--very-dark-grayish-cyan)]",
};

export default function Badge({ children, variant }: BadgeProps) {
  const badgeStyle = BADGE_STYLES[variant];

  return (
    <div
      className={`text-sm font-bold uppercase rounded-full text-white px-2 pt-1 ${badgeStyle}`}>
      {children}
    </div>
  );
}
