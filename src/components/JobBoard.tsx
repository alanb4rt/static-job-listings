import { useEffect, useState } from "react";
import JobsData from "../data/data.json";
import FilterBar from "./FilterBar";
import JobList from "./JobList";
import { Job } from "../types/job";

export default function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([...JobsData]);
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (skill: string) => {
    if (!filters.includes(skill)) {
      setFilters((prev) => [...prev, skill]);
    }
  };

  useEffect(() => {
    if (filters.length === 0) {
      setJobs([...JobsData])
      return
    }

    const filteredJobs = JobsData.filter((job) =>
      filters.every((skill) => 
        [job.role, job.level, ...job.languages, ...job.tools].some((item) =>
          item.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );

    setJobs(filteredJobs);
  }, [filters]);

  return (
    <>
      <section
        className={`relative z-10 px-6 -mt-8 ${
          filters.length === 0 ? "invisible" : ""
        }`}
      >
        <FilterBar filters={filters} setFilters={setFilters} />
      </section>
      <JobList data={jobs} addFilter={addFilter} />
    </>
  );
}
