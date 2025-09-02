import AboutNav from "./AboutNav";

export default function About({ active, onNav }) {
  return (
    <div className="h-screen grid place-items-center bg-slate-900 text-slate-200">
      <div className="w-full max-w-xl text-left py-24">
        <h1 className="text-5xl md:text-4xl font-bold tracking-tight text-slate-100">
          Pranai Sai Reddy Kalva
        </h1>
        <p className="mt-3 text-xl font-medium text-slate-300">Front End Engineer</p>
        <p className="mt-4 text-slate-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <AboutNav active={active} onNav={onNav} />

        {/* Social links */}
        <div className="mt-16 flex items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Pranai321"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full
                       ring-1 ring-inset ring-white/10 bg-white/[0.02]
                       text-slate-300 hover:text-white hover:bg-white/[0.06] hover:ring-white/20
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                       transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58l-.01-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pranaireddykalva/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full
                       ring-1 ring-inset ring-white/10 bg-white/[0.02]
                       text-slate-300 hover:text-white hover:bg-white/[0.06] hover:ring-white/20
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                       transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h4v12H3v-12Zm7 0h3.83v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.07v6.24h-4v-5.54c0-1.32-.03-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92v5.64h-4v-12Z" />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/pranaisaireddy/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full
                       ring-1 ring-inset ring-white/10 bg-white/[0.02]
                       text-slate-300 hover:text-white hover:bg-white/[0.06] hover:ring-white/20
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                       transition"
          >
            {/* LeetCode glyph (brand-like) */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
              <path d="M17.54 3.34a1.25 1.25 0 1 1 1.77 1.77L10.4 14.02l3.7 3.7a1.25 1.25 0 0 1-1.77 1.77l-4.58-4.58a1.25 1.25 0 0 1 0-1.77l9.77-9.8Zm-2.02 9.17 2.01-2.01a4.75 4.75 0 1 1 0 6.71l-2.01-2.01a2.25 2.25 0 1 0 0-2.69Z" />
            </svg>
          </a>
          {/* Email */}
            <a
            href="mailto:pranaisaireddy@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full
                        ring-1 ring-inset ring-white/10 bg-white/[0.02]
                        text-slate-300 hover:text-white hover:bg-white/[0.06] hover:ring-white/20
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                        transition"
            >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                <path d="M3.5 6.75A2.75 2.75 0 0 1 6.25 4h11.5A2.75 2.75 0 0 1 20.5 6.75v10.5A2.75 2.75 0 0 1 17.75 20H6.25A2.75 2.75 0 0 1 3.5 17.25V6.75Zm2.9.75 5.1 3.41c.3.2.7.2 1 0L17.6 7.5H6.4Zm14.1 1.55-5.94 3.98a2.75 2.75 0 0 1-3.12 0L5.5 9.05v8.2c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-8.2Z"/>
            </svg>
            </a>

        </div>
      </div>
    </div>
  );
}
