import {
  ExternalLink,
  GitBranch,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";

const projects = [
  {
    title: "ChitChat Application",
    subtitle: "Real-Time Chat Platform",
    type: "Full Stack Web Application",
    role: "Python Full Stack Developer",
    description:
      "Developed a real-time chat platform with room-based communication, private messaging, user authentication, and persistent message storage using PostgreSQL and SQLAlchemy.",
    stack: [
      "Python",
      "Flask",
      "Flask-SocketIO",
      "PostgreSQL",
      "SQLAlchemy",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    features: [
      "Implemented real-time messaging and room-based chat using Flask-SocketIO",
      "Built secure user authentication with password hashing and session management",
      "Stored users and chat history in PostgreSQL using SQLAlchemy ORM",
    ],
    live: "https://chat-xuaz.onrender.com",
    github: "https://github.com/arungokul/Chat",
  },
  {
    title: "MovieManiac",
    subtitle: "React Movie Search App",
    type: "Frontend application",
    role: "React UI, API integration, responsive layout",
    description:
      "A movie discovery application where users can search and explore movies using TMDB API data.",
    stack: ["React", "TMDB API", "CSS", "Vercel"],
    features: [
      "Movie search with API-driven results",
      "Responsive movie cards for desktop and mobile",
      "Clean browsing flow for quick movie discovery",
    ],
    live: "https://movie-maniac-dun.vercel.app/",
    github: "https://github.com/arungokul10092001/moviemaniac",
  },
  {
    title: "E-Commerce Application",
    subtitle: "MERN Stack Shopping App",
    type: "Full stack application",
    role: "Product UI, cart workflow, authentication screens",
    description:
      "A shopping application with product listing, authentication flow, and cart functionality.",
    stack: ["MongoDB", "Express", "React", "Node", "Netlify"],
    features: [
      "User authentication flow",
      "Product listing and detail views",
      "Cart functionality for shopping actions",
    ],
    live: "https://mernstck-project.netlify.app/",
    github: "https://github.com/arungokul/ecommerce-app",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Practical applications built with modern web tools.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-content">
              <div className="project-topline">
                <span>{project.type}</span>
                <LayoutDashboard size={18} />
              </div>

              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-detail">
                <strong>My role</strong>
                <span>{project.role}</span>
              </div>

              <div className="project-feature-list">
                <strong>
                  <ListChecks size={17} />
                  Key features
                </strong>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="chip-list">
                {project.stack.map((tech) => (
                  <span className="chip small" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} />
                  Live demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch size={17} />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
