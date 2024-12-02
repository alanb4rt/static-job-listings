import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import JobList from "./components/JobList";

export default function App() {
  return (
    <>
      <Header />
      <FilterBar />
      <main className="max-w-screen-lg mx-auto py-4">
        <JobList />
      </main>
    </>
  );
}
