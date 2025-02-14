import JobSkill from "./JobSkill";
import iconRemove from "../assets/images/icon-remove.svg";

interface FilterBarProps {
  filters: string[],
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const removeFilter = (item: string) => {
    const newFilters = filters.filter((filter) => filter !== item);
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="min-h-16 flex items-center justify-between gap-8 mb-12 bg-white px-8 py-4 rounded shadow-lg">
      <ul className="flex items-center gap-4 md:gap-8 flex-wrap">
        {filters.map((filter) => (
          <li
            key={filter}
            className="flex items-center rounded overflow-hidden"
          >
            <JobSkill>{filter}</JobSkill>
            <button
              className="p-2 bg-[var(--color-primary)] hover:bg-[var(--very-dark-grayish-cyan)]"
              onClick={() => removeFilter(filter)}
            >
              <img src={iconRemove} alt="Remove" />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="text-[var(--dark-grayish-cyan)] hover:text-[var(--color-primary)] font-bold hover:underline"
        onClick={clearFilters}
      >
        Clear
      </button>
    </div>
  );
}
