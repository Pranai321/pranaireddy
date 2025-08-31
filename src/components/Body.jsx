import About from "./About";
import Header from "./Header";
import Experience from "./Experience";
import Projects from "./Projects";
import useScrollSpy from "../utils/useScrollSpy";
import { useMemo } from "react";

export default function Body() {
  const sections = useMemo(() => ["about", "experience", "projects"], []);
  const active = useScrollSpy(sections, "0px 0px -45% 0px");

  const handleNav = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="grid gap-8 px-4 lg:px-6 mx-auto max-w-none lg:grid-cols-[50vw_minmax(0,1fr)]">
        {/* Left: sticky half, About + nav */}
        <aside className="sticky top-0 h-screen">
          <About active={active} onNav={handleNav} />
        </aside>

        {/* Right: readable measure; sections with ids */}
        <main className="justify-self-end w-full max-w-[44rem]">
          <section id="about" className="scroll-mt-24">
            <Header />
          </section>
          <section id="experience" className="scroll-mt-24 mt-24">
            <Experience />
          </section>
          <section id="projects" className="scroll-mt-24 mt-24">
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
