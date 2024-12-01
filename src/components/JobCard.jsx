import JobSkill from "./JobSkill";

export default function JobCard({ job }) {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  return (
    <div className="flex items-center gap-8 p-8 bg-white shadow-lg rounded">
      <img src={`./src/assets/${logo}`} alt={`Logo ${company}`} />
      <div className="flex flex-1 flex-col justify-between">
        <p className="text-[var(--color-primary)] font-bold">{company}</p>
        <h2 className="text-xl font-bold">{position}</h2>
        <div className="flex items-center gap-4 text-[var(--dark-grayish-cyan)]">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="flex items-center gap-4">
        <JobSkill>{role}</JobSkill>
        <JobSkill>{level}</JobSkill>
        {languages.map((lang) => (
          <JobSkill key={lang}>{lang}</JobSkill>
        ))}
        {tools.map((tool) => (
          <JobSkill key={tool}>{tool}</JobSkill>
        ))}
      </ul>
    </div>
  );
}
