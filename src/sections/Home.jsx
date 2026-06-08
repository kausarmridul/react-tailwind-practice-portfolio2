import RevealOnScroll from "../components/RevealOnScroll";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 text-center">
          <h1 className="mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm Pedro Tech
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="relative overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
