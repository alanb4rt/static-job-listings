import FilterBar from "./FilterBar";
import JobList from "./JobList";

export default function JobBoard() {
  return (
    <>
      <div className="relative z-10 -mt-8">
        <FilterBar />
      </div>
      <JobList />
    </>
  );
}
