import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import JobList from "./components/JobList";

export default function App() {
  return (
    <>
      <Header />
      <div className="relative z-10 -mt-12">
        <FilterBar />
      </div>
      <main className="max-w-screen-lg mx-auto py-4">
        <JobList />
      </main>
    </>
  );
}
