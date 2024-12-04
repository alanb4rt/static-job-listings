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
      className={`relative overflow-hidden flex items-center gap-8 p-8 bg-white shadow-lg rounded ${
        isFeatured && "job-featured"
      }`}
    >
      <img src={`./src/assets/${logo}`} alt={`Logo ${company}`} />
      <div className="flex flex-1 flex-col justify-between">
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
      <ul className="flex items-center gap-4">
        {jobSkills.map((skill) => (
          <JobSkill key={skill} onClick={() => addFilter(skill)}>
            {skill}
          </JobSkill>
        ))}
      </ul>
    </div>
  );
}
