import Header from "./components/Header";
import JobBoard from "./components/JobBoard";

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <JobBoard />
      </main>
    </>
  );
}
