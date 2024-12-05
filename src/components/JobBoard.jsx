import { useEffect, useState } from "react";
import JobsData from "../data/data.json";
import FilterBar from "./FilterBar";
import JobList from "./JobList";

export default function JobBoard() {
  const [data, setData] = useState([...JobsData]);
  const [filters, setFilters] = useState([]);

  const addFilter = (skill) => {
    if (!filters.includes(skill)) {
      setFilters((prev) => [...prev, skill]);
    }
  };

  useEffect(() => {
    if (filters.length === 0) return setData([...JobsData]);

    const filteredJobs = JobsData.filter((job) =>
      filters.every(
        (skill) =>
          job.role.includes(skill) ||
          job.level.includes(skill) ||
          job.languages.some((lang) => lang.includes(skill)) ||
          job.tools.some((tool) => tool.includes(skill))
      )
    );

    setData(filteredJobs);
  }, [filters]);

  return (
    <>
      <section
        className={`relative z-10 -mt-8 ${
          filters.length === 0 ? "invisible" : ""
        }`}
      >
        <FilterBar filters={filters} setFilters={setFilters} />
      </section>
      <JobList data={data} addFilter={addFilter} />
    </>
  );
}
