import React from 'react'

const About = () => {
  return (
    <div class="h-screen grid place-items-center bg-slate-900 text-slate-200" >
        <div className="w-full max-w-xl text-left">
        <h1 class="text-5xl md:text-4xl font-bold tracking-tight text-slate-100">
          Pranai Sai Reddy Kalva
        </h1>
        <p class="mt-3 text-xl font-medium text-slate-300">Front End Engineer</p>
        <p class="mt-4 max-w-xl text-slate-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        {/* <!-- optional section nav --> */}
        <nav class="mt-10 space-y-4">
          <ul class="space-y-6">
          <li class="flex items-center gap-4">
            <span class="h-px w-16 bg-slate-400/60"></span>
            <span class="uppercase tracking-wider text-slate-200 font-semibold">About</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="h-px w-16 bg-slate-400/30"></span>
            <span class="uppercase tracking-wider text-slate-400">Experience</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="h-px w-16 bg-slate-400/30"></span>
            <span class="uppercase tracking-wider text-slate-400">Projects</span>
          </li>
          </ul>
        </nav>
      </div>
      </div>
  )
}

export default About