import JobCard from "./JobCard";

export default function JobList({ data, addFilter }) {
  return (
    <section className="flex flex-col gap-6 px-6">
      {data.map((job) => (
        <JobCard key={job.id} job={job} addFilter={addFilter} />
      ))}
    </section>
  );
}
