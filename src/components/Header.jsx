import React from 'react'

const Header = () => {
  return (
    <section class="min-h-screen bg-slate-900 text-slate-200">
    <div class="mx-auto max-w-7xl px-6 py-30">
    <div class="flex flex-col lg:flex-row items-start  gap-12">
      {/* <!-- Left column --> */}
      

      {/* <!-- Right column --> */}
      <div class="flex flex-col max-w-2xl space-y-5">
        <p class="text-slate-300 leading-7">
          I'm a developer passionate about building scalable, high-performance software that blends thoughtful design with robust engineering. My favorite work lies at the intersection of backend systems and modern front-end frameworks, creating applications that are not only reliable and efficient but also intuitive and engaging for users.
        </p>
        <p class="text-slate-300 leading-7">I recently completed my Master of Science in Computer Science at The University of Texas at Arlington, building on my industry experience as a Software Engineer at Tata Elxsi, where I developed mission-critical systems for the transportation industry. My work included designing APIs for automated train control, architecting high-availability data exchange platforms, and modernizing optimization software to improve safety, efficiency, and usability at scale.
        </p>
        <p class="text-slate-300 leading-7">
          Beyond my professional experience, I've built full-stack projects such as DevTinder, a real-time developer networking platform, and NetflixGPT, an AI-powered movie discovery application. These projects reflect my passion for combining cutting-edge technology with practical usability, leveraging tools like React, Node.js, and cloud platforms such as AWS and Azure.
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