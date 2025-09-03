import feed from "../utils/feed.png";
import swiggyfeed from "../utils/swiggyfeed.png";
import netflixgpt from "../utils/netflixGPT.png";

const Projects = () => {
  const items = [
    {
      title: "DevTinder",
      shortDesc: "Developer matchmaking for help and collaborations",
      href: "https://github.com/Pranai321/DevTinder-Frontend",
      img: feed,
      descPoints: [
        "Connects builders by intent—post a need, match with complementary skills, and start shipping.",
        "Streamlines early collaboration with clear requests, lightweight approvals, and instant hand‑offs to cut time‑to‑match.",
        "Profiles and skill tags make discovery transparent; verification and rate limits keep interactions safe and purposeful.",
      ],
      tags: ["React", "Express", "REST API", "MongoDB", "JWT"],
      layout: "horizontal", // Set layout type
    },
    {
      title: "NetflixGPT",
      href: "https://example.com/halcyon",
      img: netflixgpt,
      shortDesc: "A GPT-powered movie platform for seamless searching with natural language queries.",
      descPoints: [
        "NetflixGPT is a movie streaming platform inspired by Netflix, featuring an innovative GPT search functionality to help users find their favorite movies effortlessly.",
        "Leveraging Redux for efficient state management, NetflixGPT ensures a seamless user interface and improved performance.",
        "Implements secure email/password and Google Authentication, providing users with flexible and secure access to the platform.",
        "Empowering users with natural language queries, NetflixGPT achieves an impressive 95% accuracy rate, enhancing search relevance and user satisfaction.",
      ],
      tags: ["React", "Firebase", "Redux"],
      layout: "vertical", // Set layout type
    },
  ];

  return (
    <div className="space-y-24">
      {items.map((p, index) => {
        if (p.layout === "horizontal") {
          // Horizontal Layout (Side-by-Side)
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Image */}
              <div className="group">
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={p.img}
                    alt={`${p.title} project screenshot`}
                    className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
              {/* Right Content */}
              <div>
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-lg text-gray-400">{p.shortDesc}</p>
                <ul className="mt-4 space-y-2">
                  {p.descPoints.map((line, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-400 mr-2">›</span>
                      <span className="text-gray-300">{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        } else {
          // Vertical Layout (Image on top)
          return (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image */}
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="mb-6">
                <img
                  src={p.img}
                  alt={`${p.title} project screenshot`}
                  className="rounded-lg shadow-lg max-w-full md:max-w-2xl transition-transform duration-300 hover:scale-105"
                />
              </a>
              {/* Content Below */}
              <h3 className="text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-lg text-gray-400 max-w-xl">{p.shortDesc}</p>
              <ul className="mt-4 space-y-2 text-left max-w-xl">
                {p.descPoints.map((line, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-2">›</span>
                    <span className="text-gray-300">{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {p.tags.map((t, i) => (
                  <span key={i} className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Projects;
