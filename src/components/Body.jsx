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
      {/* 
        Responsive Grid with specific column setup for large screens.
        - `lg:grid-cols-2` creates two equal columns.
        - Responsive padding (`px-`) keeps content from touching edges.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-12 md:px-20 lg:px-24">
        
        {/* 
          Left Column (Aside):
          - Vertically centers its content within the screen height on large screens.
        */}
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center py-12 lg:py-0">
          <About active={active} onNav={handleNav} />
        </aside>

        {/* 
          Right Column (Main):
          - `lg:pl-16` adds padding on the left for large screens to push the content
            away from the center, achieving the desired off-center alignment.
        */}
        <main className="w-full py-12 lg:py-24 lg:pl-16">
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
