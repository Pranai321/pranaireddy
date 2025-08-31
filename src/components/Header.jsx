import React from 'react'

const Header = () => {
  return (
    <section class="min-h-screen bg-slate-900 text-slate-200">
    <div class="mx-auto max-w-7xl px-6 py-30">
    <div class="flex flex-col lg:flex-row items-start  gap-12">
      {/* <!-- Left column --> */}
      

      {/* <!-- Right column --> */}
      <div class="flex flex-col max-w-2xl space-y-5">
        <p className="text-slate-300 leading-7">
    Passionate about building scalable, high‑performance software that blends thoughtful design with robust engineering, focusing on the seam between backend systems and modern front‑end frameworks to deliver reliable, efficient, and intuitive experiences.
  </p>
        <p className="text-slate-300 leading-7">
    Earned an MS in Computer Science at UTA and shipped mission‑critical systems at Tata Elxsi, including APIs for automated train control, high‑availability data exchange platforms, and optimized planning software for safety and usability at scale.
  </p>
        <p className="text-slate-300 leading-7">
    Built full‑stack projects like DevTinder and NetflixGPT using
    <span className="text-cyan-300 font-medium"> React</span>, 
    <span className="text-cyan-300 font-medium"> Node.js</span>, 
    <span className="text-cyan-300 font-medium"> TypeScript</span>, 
    <span className="text-cyan-300 font-medium"> Express</span>, and cloud on
    <span className="text-cyan-300 font-medium"> AWS</span> and
    <span className="text-cyan-300 font-medium"> Azure</span>.
  </p>
        <p class="text-slate-300 leading-7">
          In my spare time, I enjoy playing cricket, exploring new technologies, and experimenting with side projects that challenge me to grow as both an engineer and a problem solver.
        </p>
      </div>

    </div>
  </div>
</section>
  )
}

export default Header