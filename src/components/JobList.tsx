import JobCard from "./JobCard/JobCard";
import { Job } from "../types/job";

interface JobListProps {
  data: Job[],
  addFilter: (filter: string) => void;
}

export default function JobList({ data, addFilter }: JobListProps) {
  return (
    <section className="flex flex-col gap-14 md:gap-6 px-6">
      {data.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        data.map((job) => (
          <JobCard key={job.id} job={job} addFilter={addFilter} />
        ))
      )}
    </section>
  );
}
