

import Header from "./Header";

const projects = [
  {
    title: "Minimal Blog Platform",
    description: "A clean, markdown-based blog with Next.js and Tailwind.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with scroll-snap and smooth animations.",
    link: "#",
  },
  {
    title: "Open Source UI Kit",
    description: "Reusable React components for modern web apps.",
    link: "#",
  },
];


export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div>
        {/* Hero Section */}
        <section id="home" className="section flex-col text-center" style={{background: "var(--background)"}}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[var(--foreground)]">John Michael Guerra</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-2 text-[var(--accent)]">Software Engineer</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">Building clean, modern web experiences.</p>
        </section>

  {/* About Section */}
  <section id="about" className="section flex-col text-center" style={{background: "var(--background)"}}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--accent)]">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-8">
            Hello! I'm a recent Computer Science graduate with a passion for building cross-platform applications. My journey in software development started during my university coursework and has expanded through personal projects and internships.<br /><br />
            I enjoy solving complex problems and creating efficient, user-friendly applications. My diverse skill set allows me to work on various platforms – from mobile apps to desktop software and backend systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-4">
            <div className="bg-[var(--gray)] border border-gray-700 rounded-xl p-6 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--accent)] text-2xl">&#60;/&#62;</span>
                <span className="font-bold text-lg text-[var(--foreground)]">Programming</span>
              </div>
              <span className="text-gray-300">Python, C#, Java, JavaScript, React, HTML/CSS, Dart, SQL</span>
            </div>
            <div className="bg-[var(--gray)] border border-gray-700 rounded-xl p-6 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--accent)] text-2xl">&#128230;</span>
                <span className="font-bold text-lg text-[var(--foreground)]">Databases</span>
              </div>
              <span className="text-gray-300">Firebase, MySQL, SQL/NoSQL</span>
            </div>
            <div className="bg-[var(--gray)] border border-gray-700 rounded-xl p-6 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--accent)] text-2xl">&#128187;</span>
                <span className="font-bold text-lg text-[var(--foreground)]">Frameworks</span>
              </div>
              <span className="text-gray-300">React.js, Flutter, Unity, Electron, PyQT</span>
            </div>
            <div className="bg-[var(--gray)] border border-gray-700 rounded-xl p-6 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--accent)] text-2xl">&#128295;</span>
                <span className="font-bold text-lg text-[var(--foreground)]">Dev Tools</span>
              </div>
              <span className="text-gray-300">Git, GitHub, GitLab, VSC, Vercel, Figma, Google AI Studio</span>
            </div>
            <div className="bg-[var(--gray)] border border-gray-700 rounded-xl p-6 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--accent)] text-2xl">&#128187;</span>
                <span className="font-bold text-lg text-[var(--foreground)]">Specialties</span>
              </div>
              <span className="text-gray-300">Software Development, Web Development, Mobile Apps, AI Integration</span>
            </div>
          </div>
        </section>

  {/* Projects Section */}
  <section id="projects" className="section flex-col text-center" style={{background: "var(--background)"}}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--accent)]">Projects</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group bg-[var(--gray)] border border-gray-700 rounded-xl p-6 w-72 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-lg hover:border-[var(--accent)]"
                style={{textDecoration: "none"}}
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors text-[var(--foreground)]">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <span className="text-[var(--accent)] font-medium group-hover:underline">View Project →</span>
              </a>
            ))}
          </div>
        </section>

  {/* Contact Section */}
  <section id="contact" className="section flex-col text-center" style={{background: "var(--background)"}}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--accent)]">Contact</h2>
          <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
            <input type="text" name="name" placeholder="Your Name" className="border border-gray-700 bg-[var(--background)] text-[var(--foreground)] rounded px-4 py-2 focus:outline-none focus:border-[var(--accent)]" required />
            <input type="email" name="email" placeholder="Your Email" className="border border-gray-700 bg-[var(--background)] text-[var(--foreground)] rounded px-4 py-2 focus:outline-none focus:border-[var(--accent)]" required />
            <textarea name="message" placeholder="Your Message" rows={4} className="border border-gray-700 bg-[var(--background)] text-[var(--foreground)] rounded px-4 py-2 focus:outline-none focus:border-[var(--accent)]" required />
            <button type="submit" className="bg-[var(--accent)] text-white rounded px-4 py-2 font-semibold hover:bg-blue-400 transition">Send Message</button>
          </form>
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/janmic" target="_blank" rel="noopener" className="text-gray-400 hover:text-[var(--accent)] text-xl transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg></a>
            <a href="mailto:janmic@email.com" className="text-gray-400 hover:text-[var(--accent)] text-xl transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg></a>
          </div>
        </section>
      </div>
    </main>
  );
}
