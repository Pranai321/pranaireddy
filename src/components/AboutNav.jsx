export default function AboutNav({ active, onNav }) {
  const linkBase = "uppercase tracking-wider transition-colors";
  const lineBase = "h-px w-16 transition-colors";

  const Item = ({ id, label }) => {
    const isActive = active === id;
    return (
      <li className="flex items-center gap-4">
        <span className={`${lineBase} ${isActive ? "bg-slate-200" : "bg-slate-400/30"}`} />
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
