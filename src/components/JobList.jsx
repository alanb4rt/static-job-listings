import JobsData from "../data/data.json";
import JobCard from "./JobCard";

export default function JobList() {
  return (
    <section className="flex flex-col gap-6">
      {JobsData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}
