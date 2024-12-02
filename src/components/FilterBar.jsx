import JobSkill from "./JobSkill";

export default function FilterBar() {
  return (
    <section className="max-w-screen-lg mx-auto my-4">
      <div className="flex items-center justify-between gap-8 bg-white px-8 py-4 rounded shadow-lg">
        <ul className="flex items-center gap-8">
          <JobSkill>test</JobSkill>
          <JobSkill>test</JobSkill>
          <JobSkill>test</JobSkill>
        </ul>
        <button className="text-[var(--dark-grayish-cyan)] hover:text-[var(--color-primary)] font-bold hover:underline">
          Clear
        </button>
      </div>
    </section>
  );
}
