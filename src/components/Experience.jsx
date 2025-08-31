import React from 'react'

const Experience = () => {
  return (
    <div className ="min-h-screen">
        <section class="min-h-screen bg-slate-900 text-slate-200">
            {/* <!-- Right column --> */}
    <div class="h-screen overflow-y-auto pr-2">
     <ol class="space-y-8">
    {/* <!-- Item --> */}
     <li>
      <a href="https://www.linkedin.com/company/medwellsolutions/posts/?feedView=all" target="_blank" rel="noreferrer"
         class="group block rounded-2xl p-6
         bg-transparent ring-1 ring-inset ring-white/5 shadow-none
          transition-shadow duration-200
         hover:bg-white/[0.04] hover:ring-white/15 hover:shadow-xl hover:shadow-cyan-500/10
         focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60">
        <div class="flex items-start justify-between text-xs text-slate-400">
          <span>2025 — present</span>
          <span class="inline-flex items-center gap-1 text-cyan-300/80 opacity-0 transition-opacity group-hover:opacity-100">
            Open
            <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5 15 15 5M9 5h6v6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>

        <h3 class="mt-2 text-lg font-semibold text-slate-200">
          Software Engineer  · <span class="text-cyan-300">Medwell Solutions</span>
        </h3>
        <p class="mt-1 text-sm text-slate-400">Junior Engineer</p>

        <p class="mt-4 text-slate-300 leading-7">
        <span class="text-slate-100 font-semibold">PACE Score Engine</span>: Architected a campaign-wide scoring platform that operationalizes Medwell’s engagement model by transforming diverse, self‑reported activities into auditable, weighted points that drive real‑time leaderboards, funding allocation, and recognition.
        Delivered a fault‑tolerant <span class="text-cyan-300 font-medium">REST</span> layer in
        <span class="text-cyan-300 font-medium"> Node.js</span>/<span class="text-cyan-300 font-medium">Express</span> backed by
        <span class="text-cyan-300 font-medium"> MongoDB</span> with normalized activity schemas and
        <span class="text-cyan-300 font-medium"> precomputed aggregates</span>, reducing median scoring latency by
        <span class="text-emerald-300 font-semibold"> 35%</span> while supporting bursty campaign traffic.
        </p>

        {/* <!-- Tech chips --> */}
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">JavaScript</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">MongoDB</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">React</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">Express.js</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">REST API's</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://upstatement.com" target="_blank" rel="noreferrer"
         class="group block rounded-2xl p-6
         bg-transparent ring-1 ring-inset ring-white/5 shadow-none
          transition-shadow duration-200
         hover:bg-white/[0.04] hover:ring-white/15 hover:shadow-xl hover:shadow-cyan-500/10
         focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60">
        <div class="flex items-start justify-between text-xs text-slate-400">
          <span>2018 — 2024</span>
          <span class="inline-flex items-center gap-1 text-cyan-300/80 opacity-0 transition-opacity group-hover:opacity-100">
            Open
            <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5 15 15 5M9 5h6v6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>

        <h3 class="mt-2 text-lg font-semibold text-slate-200">
          Lead Engineer · <span class="text-cyan-300">Upstatement</span>
        </h3>
        <p class="mt-1 text-sm text-slate-400">Senior Engineer</p>

        <p class="mt-4 text-slate-300 leading-7">
          Build, style, and ship high‑quality websites, design systems, mobile apps, and digital
          experiences for a diverse array of projects, providing leadership and facilitating collaboration.
        </p>

        {/* <!-- Tech chips --> */}
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">JavaScript</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">TypeScript</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">React</span>
          <span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-inset ring-cyan-500/20">Storybook</span>
        </div>
      </a>
    </li>

    <a
        href="/resume/Pranai_Sai_Reddy_Kalva_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 text-slate-200 font-medium
             hover:text-cyan-300 focus:outline-none focus-visible:ring-2
             focus-visible:ring-cyan-400/60 rounded-md"
             >
        View Full Résumé
        <svg
        className="h-4 w-4 translate-y-[1px] opacity-70 transition-transform group-hover:translate-x-0.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
    <path d="M5 15 15 5M9 5h6v6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>


    {/* <!-- Duplicate <li> blocks for more roles; change dates/title/link/content --> */}
  </ol>
</div>

        </section>
        
    </div>
  )
}

export default Experience