import feed from "../utils/feed.png"
const Projects=()=> {
  const items = [
    {
      title: "DevTinder",
      shortDesc: "Developer matchmaking for help and collaborations",
      href: "https://example.com/spotify-profile",
      img: feed,
      descPoints:
        [
  "Connects builders by intent—post a need, match with complementary skills, and start shipping.",
  "Streamlines early collaboration with clear requests, lightweight approvals, and instant hand‑offs to cut time‑to‑match.",
  "Profiles and skill tags make discovery transparent; verification and rate limits keep interactions safe and purposeful."
],
      tags: ["React", "Express", "REST API", "MongoDB", "JWT"],
    },
    {
      title: "Halcyon Theme",
      href: "https://example.com/halcyon",
      img: "/images/halcyon.jpg",
      descPoints: [
  "Connects builders by intent—post a need, match with complementary skills, and start shipping.",
  "Streamlines early collaboration with clear requests, lightweight approvals, and instant hand‑offs to cut time‑to‑match.",
  "Profiles and skill tags make discovery transparent; verification and rate limits keep interactions safe and purposeful."
],
      meta: { installs: "100k+" },
      tags: ["VSCode", "Theme", "Design"],
    },
  ];

  return (
    <section className="space-y-10">
  {items.map((p) => (
    <a
      key={p.title}
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl ring-1 ring-inset ring-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200"
    >
      <div className="flex gap-6 p-5 md:p-6">
        {/* Left image */}
        {/* Left image */}
<div className="w-40 sm:w-48 md:w-56 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10 min-h-[9rem] sm:min-h-[10rem] md:min-h-[11rem]">
  <img
    src={p.img}
    alt={p.title}
    className="h-full w-full object-cover object-center"
  />
</div>


        {/* Right content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-3 min-w-0">
              <span className="truncate">{p.title}</span>
              {p.shortDesc && (
                <span className="text-sm font-normal text-slate-400 truncate max-w-[16rem]">
                  {p.shortDesc}
                </span>
              )}
              <span className="ml-2 align-middle text-cyan-300/80 opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </h3>
            {/* Optional meta right-aligned */}
          </div>

          <ul className="mt-2 list-disc list-inside space-y-1 text-slate-300/90 marker:text-cyan-400">
            {p.descPoints?.map((line) => (
              <li key={line}>{line}</li>
            ))}
         </ul>

          {/* Meta row (stars / installs) */}
          {p.meta?.stars && (
            <div className="mt-3 text-slate-400">★ {p.meta.stars}</div>
          )}
          {p.meta?.installs && (
            <div className="mt-3 text-slate-400">⬇ {p.meta.installs} Installs</div>
          )}

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* subtle focus ring on the whole card */}
      <span className="pointer-events-none block rounded-2xl ring-1 ring-inset ring-white/10 transition-opacity duration-200 group-hover:ring-white/20"></span>
    </a>
  ))}
</section>

  );
}

export default Projects