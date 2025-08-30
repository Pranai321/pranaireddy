import About from "./About";
import Header from "./Header";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Body() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="grid gap-8 px-4 lg:px-6 mx-auto max-w-none lg:grid-cols-[50vw_minmax(0,1fr)]">
        {/* Left: sticky and full viewport height */}
        <aside className="sticky top-0 h-screen">
          <About />
        </aside>

        {/* Right */}
        <main className="justify-self-end w-full max-w-[44rem]">
          <Header />
          <Experience />
          <Projects/>
        </main>
      </div>
    </div>
  );
}
