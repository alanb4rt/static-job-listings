import { Job } from "../../types/job";
import Badge from "../Badge";
import JobDetails from "./JobDetails";
import JobImage from "./JobImage";
import JobSkill from "../JobSkill";

interface JobCardProps {
  job: Job,
  addFilter: (filter: string) => void;
}

export default function JobCard({ job, addFilter }: JobCardProps) {
  const {
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
        isFeatured ? "job-featured" : ""
      }`}
    >
      <JobImage logo={logo} company={company} />
      <div className="flex flex-1 flex-col gap-2 justify-between">
        <div className="flex items-center gap-2">
          <p className="text-[var(--color-primary)] font-bold mr-2">
            {company}
          </p>
          {isNew && <Badge variant={"isNew"}>New!</Badge>}
          {isFeatured && (
            <Badge variant={"isFeatured"}>Featured</Badge>
          )}
        </div>
        <h2 className="cursor-pointer text-xl font-bold hover:text-[var(--color-primary)]">
          {position}
        </h2>
        <JobDetails postedAt={postedAt} contract={contract} location={location} />
      </div>
      <hr className="md:hidden border-[var(--dark-grayish-cyan)]" />
      <ul className="flex items-center flex-wrap gap-4">
        {jobSkills.map((skill) => (
          <li key={skill}>
            <JobSkill
              className="btn-jobskill"
              onClick={() => addFilter(skill)}
            >
              {skill}
            </JobSkill>
          </li>
        ))}
      </ul>
    </div>
  );
}
