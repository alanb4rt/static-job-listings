import JobSkill from "./JobSkill";
import iconRemove from "../assets/images/icon-remove.svg";

export default function FilterBar({ filters, setFilters }) {
  const removeFilter = (item) => {
    const newFilters = filters.filter((filter) => filter !== item);
    setFilters(newFilters);
  };

  return (
    <div className="flex items-center justify-between gap-8 mb-12 bg-white px-8 py-4 rounded shadow-lg">
      <ul className="flex items-center gap-8">
        {filters.map((filter) => (
          <div
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
          </div>
        ))}
      </ul>
      <button
        className="text-[var(--dark-grayish-cyan)] hover:text-[var(--color-primary)] font-bold hover:underline"
        onClick={() => setFilters([])}
      >
        Clear
      </button>
    </div>
  );
}
