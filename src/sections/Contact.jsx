import { toast } from "react-toastify";
import RevealOnScroll from "../components/RevealOnScroll";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("This is a Test Form");
    e.target.reset();
  };
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll addClass={"w-full"}>
        <div className="mx-auto w-full px-4 lg:w-150">
          <h2 className="mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                rows={5}
                id="message"
                name="message"
                className="w-full resize-none rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button className="relative w-full cursor-pointer overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
