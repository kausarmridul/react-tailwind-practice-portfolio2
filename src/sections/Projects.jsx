import RevealOnScroll from "../components/RevealOnScroll";

const project = [
  {
    title: "Cloud Platform",
    discription:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    language: ["React", "Nodejs", "AWS", "Docker"],
  },
  {
    title: "AI Analytics Dashboard",
    discription:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    language: ["Python", "TensorFlow", "D3.js", "Flask"],
  },
  {
    title: "E-Commerce Web App",
    discription:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    language: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Real-Time Chat App",
    discription:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    language: ["Socket.IO", "Express", "React", "Redis"],
  },
];
function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.discription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.language.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
