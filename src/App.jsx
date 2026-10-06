import "./App.css";
import profilePhoto from "./images/profile.jpeg";
import logoMark from "./images/Dare Senku Logo.jpeg";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

const skills = [
  {
    number: "01",
    title: "AI & Data",
    description:
      "AI data annotation, language data, data entry, data quality, structured information, and evaluation-oriented workflows.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "HTML, CSS, JavaScript, React, responsive interfaces, component-based development, and modern web development workflows.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Cybersecurity fundamentals, networking concepts, security awareness, ethical hacking foundations, and continuous technical learning.",
  },
  {
    number: "04",
    title: "Data & Operations",
    description:
      "Data handling, documentation, organization, accuracy, administrative workflows, customer information, and process improvement.",
  },
  {
    number: "05",
    title: "Customer Experience",
    description:
      "Customer service, communication, service operations, problem solving, product awareness, and working effectively under pressure.",
  },
  {
    number: "06",
    title: "Product Thinking",
    description:
      "Identifying problems, developing digital solutions, thinking about users, and connecting technology with practical business needs.",
  },
];

const experiences = [
  {
    label: "PROFESSIONAL EXPERIENCE",
    title: "Customer Service & Operations",
    text:
      "Worked across barista, service ambassador, store keeping, and general operational responsibilities in a customer-facing environment.",
    bullets: [
      "Handled customer-facing service responsibilities.",
      "Worked across multiple operational functions and changing responsibilities.",
      "Contributed ideas aimed at improving customer experience and business operations.",
      "Developed practical experience in communication, organization, teamwork, and problem-solving.",
    ],
  },
  {
    label: "TECHNICAL DEVELOPMENT",
    title: "Cybersecurity & Networking",
    text:
      "Building a technical foundation through structured learning and hands-on practice in networking and cybersecurity.",
    bullets: [
      "Cybersecurity fundamentals",
      "Networking concepts",
      "Ethical hacking foundations",
      "Technical troubleshooting",
      "Continuous self-directed learning",
    ],
  },
  {
    label: "CURRENT DEVELOPMENT",
    title: "Frontend & Digital Technology",
    text:
      "Developing practical web development skills using modern frontend technologies and building projects to strengthen technical confidence, problem-solving, and digital product thinking.",
    bullets: [
      "Modern frontend development practice",
      "User-focused digital product thinking",
      "Personal project creation and iteration",
      "Practical application of learning in real-world contexts",
    ],
  },
];

const projects = [
  {
    title: "Portfolio Experience",
    type: "Frontend",
    description:
      "A focused portfolio website designed to present skillsets, experience, and professional direction with a clean, user-friendly interface.",
  },
  {
    title: "AI Workflow Concepts",
    type: "Data & AI",
    description:
      "Exploration of AI-assisted workflows, structured data handling, and the practical side of building useful digital tools.",
  },
  {
    title: "Digital Product Thinking",
    type: "Product",
    description:
      "Ideas and experimentation focused on solving small operational and customer-facing problems with user-first design thinking.",
  },
];

function App() {
  return (
    <div className="portfolio">
      <div className="brand-flow" aria-hidden="true">
        <img src={logoMark} alt="" className="brand-mark brand-mark-1" />
        <img src={logoMark} alt="" className="brand-mark brand-mark-2" />
        <img src={logoMark} alt="" className="brand-mark brand-mark-3" />
        <img src={logoMark} alt="" className="brand-mark brand-mark-4" />
        <img src={logoMark} alt="" className="brand-mark brand-mark-5" />
      </div>

      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <div className="nav-logo">DARE SENKU</div>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">TECHNOLOGY • DATA • DIGITAL PRODUCTS</p>

            <h1>
              Building useful technology
              <span> with purpose.</span>
            </h1>

            <p className="hero-description">
              I&apos;m a multidisciplinary technology professional developing
              practical skills across AI data work, frontend development,
              cybersecurity, data operations, and digital products.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a
                href="https://github.com/Dare-senku"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-logo-wrap">
              <img
                src={logoMark}
                alt="Dare Senku logo"
                className="floating-logo"
              />
            </div>

            <div className="hero-card">
              <div className="card-top">
                <span>PROFILE</span>
                <span>01</span>
              </div>

              <img
                src={profilePhoto}
                alt="Dare Senku"
                className="profile-photo"
              />

              <h3>Technology &amp; Digital Operations</h3>

              <p>AI • Frontend • Cybersecurity • Data • Customer Experience</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 — ABOUT</div>

          <div className="about-grid">
            <div>
              <h2>
                Curious by nature.
                <br />
                Practical by approach.
              </h2>
            </div>

            <div className="about-text">
              <p>
                I am a technology-focused professional with experience working
                across customer-facing operations, digital workflows, technical
                learning, and software development.
              </p>

              <p>
                My background has taught me how to work with people, understand
                operational problems, communicate clearly, learn quickly, and
                turn ideas into practical solutions.
              </p>

              <p>
                I am currently expanding my capabilities across artificial
                intelligence, data annotation and evaluation, frontend
                engineering, cybersecurity, networking, and digital product
                development.
              </p>

              <p>
                I enjoy environments where technology, problem-solving, and
                real-world impact meet.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-label">02 — SKILLS</div>

          <h2>What I work with</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <span>{skill.number}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">03 — EXPERIENCE</div>

          <h2>Experience &amp; professional development</h2>

          <div className="timeline">
            {experiences.map((experience) => (
              <div className="timeline-item" key={experience.title}>
                <div className="timeline-dot" aria-hidden="true"></div>

                <div>
                  <p className="timeline-date">{experience.label}</p>
                  <h3>{experience.title}</h3>
                  <p>{experience.text}</p>

                  <ul>
                    {experience.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section dark-section">
          <div className="section-label">04 — PROJECTS</div>

          <h2>Selected work and ideas</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-label">05 — CONTACT</div>

          <h2>Let&apos;s build something useful.</h2>

          <div className="contact-links">
            <a href="mailto:hello@dare-senku.dev">hello@dare-senku.dev</a>
            <a href="https://github.com/Dare-senku" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#about">Back to top</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
