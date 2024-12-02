import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";

export default function App() {
  return (
    <>
      <FilterBar />
      <main className="max-w-screen-lg mx-auto py-4">
        <JobList />
      </main>
    </>
  );
}
