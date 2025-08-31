export default function AboutNav({ active, onNav }) {
  const linkBase = "uppercase tracking-wider transition-colors";
  const lineBase = "h-px transition-all duration-200"; // added transition-all for smooth width change

  const Item = ({ id, label }) => {
    const isActive = active === id;
    return (
      <li className="group flex items-center gap-4">
        {/* Line: half-length by default (w-8), full (w-16) on hover or when active */}
        <span
          className={`${lineBase} ${isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-400/30 group-hover:w-16"}`}
        />
        <a
          href={`#${id}`}
          onClick={onNav(id)}
          className={`${linkBase} ${isActive ? "text-slate-200 font-semibold" : "text-slate-400 hover:text-slate-300"}`}
        >
          {label}
        </a>
      </li>
    );
  };

  return (
    <nav className="py-24">
      <ul className="space-y-6">
        <Item id="about" label="About" />
        <Item id="experience" label="Experience" />
        <Item id="projects" label="Projects" />
      </ul>
    </nav>
  );
}
