const Projects=()=> {
  const items = [
    {
      title: "Spotify Profile",
      href: "https://example.com/spotify-profile",
      img: "/images/spotify-profile.jpg",
      desc:
        "Web app for visualizing personalized Spotify data: top artists, tracks, recently played, and audio features. Create and save new playlists from recommended tracks.",
      meta: { stars: "693" },
      tags: ["React", "Express", "Spotify API", "Heroku"],
    },
    {
      title: "Halcyon Theme",
      href: "https://example.com/halcyon",
      img: "/images/halcyon.jpg",
      desc:
        "Minimal dark theme for VS Code, Sublime Text, Atom, iTerm, and more.",
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
          className="group block rounded-2xl ring-1 ring-inset ring-white/5 bg-white/[0.02] hover:bg-white/[0.05]
                     transition-colors duration-200"
        >
          <div className="flex gap-6 p-5 md:p-6">
            {/* Left image */}
            <div className="w-40 sm:w-48 md:w-56 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
              <img
                src={p.img}
                alt={p.title}
                className="h-28 sm:h-32 md:h-36 w-full object-cover object-center transition
                           group-hover:scale-[1.02]"
              />
            </div>

            {/* Right content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-200">
                  {p.title}
                  <span className="ml-2 align-middle text-cyan-300/80 opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </h3>
                {/* Optional meta right-aligned */}
              </div>

              <p className="mt-2 text-slate-300/90 leading-7">
                {p.desc}
              </p>

              {/* Meta row (stars / installs) */}
              {p.meta?.stars && (
                <div className="mt-3 text-slate-400">
                  ★ {p.meta.stars}
                </div>
              )}
              {p.meta?.installs && (
                <div className="mt-3 text-slate-400">
                  ⬇ {p.meta.installs} Installs
                </div>
              )}

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300
                               ring-1 ring-inset ring-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* subtle focus ring on the whole card */}
          <span className="pointer-events-none block rounded-2xl ring-1 ring-inset ring-white/10
                           transition-opacity duration-200 group-hover:ring-white/20"></span>
        </a>
      ))}
    </section>
  );
}

export default Projects