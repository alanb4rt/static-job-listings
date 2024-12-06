import Badge from "./Badge";
import JobSkill from "./JobSkill";

export default function JobCard({ job, addFilter }) {
  const {
    id,
    company,
    logo,
    isNew,
    isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const jobSkills = [role, level, ...languages, ...tools];

  return (
    <div
      className={`relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-8 bg-white shadow-lg rounded ${
        isFeatured && "job-featured"
      }`}
    >
      <img
        className="size-16 md:size-24 -mt-16 md:m-0"
        src={`./src/assets/${logo}`}
        alt={`Logo ${company}`}
      />
      <div className="flex flex-1 flex-col gap-2 justify-between">
        <div className="flex items-center gap-2">
          <p className="text-[var(--color-primary)] font-bold mr-2">
            {company}
          </p>
          {isNew && <Badge color="var(--color-primary)">New!</Badge>}
          {isFeatured && (
            <Badge color="var(--very-dark-grayish-cyan)">Featured</Badge>
          )}
        </div>
        <h2 className="text-xl font-bold">{position}</h2>
        <div className="flex items-center gap-4 text-[var(--dark-grayish-cyan)]">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
      <hr className="md:hidden border-[var(--dark-grayish-cyan)]" />
      <ul className="flex items-center flex-wrap gap-4">
        {jobSkills.map((skill) => (
          <JobSkill
            key={skill}
            className="btn-jobskill"
            onClick={() => addFilter(skill)}
          >
            {skill}
          </JobSkill>
        ))}
      </ul>
    </div>
  );
}
