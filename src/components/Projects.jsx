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
    github: "https://github.com/Arun10092001/Chat",
  },
  {
    title: "Job Portal",
    subtitle: "Django REST Framework Job Portal",
    type: "Full-stack application",
    role: "Backend development, REST APIs, database design, authentication",
    description:
      "A job portal application that provides REST APIs for user authentication, job management, and job applications using Django REST Framework and PostgreSQL.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Django ORM",
      "REST APIs",
    ],
    features: [
      "User authentication and job management APIs",
      "Job application management with duplicate application validation",
      "PostgreSQL database with relational models using Django ORM",
      "CRUD operations with serializers and backend business logic",
    ],
    live: "https://job-portal-frontend-cgzk.onrender.com",
    github: "https://github.com/Arun10092001/job-portal-backend",
  },
  {
    title: "Product Management System",
    subtitle: "FastAPI Product Management Application",
    type: "Full-stack application",
    role: "Backend development, REST APIs, authentication, database design",
    description:
      "A product management application built with FastAPI, SQLAlchemy, and PostgreSQL, providing secure APIs for managing users, products, and categories.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Pydantic"],
    features: [
      "REST APIs for user, product, and category management",
      "JWT authentication with role-based authorization",
      "Secure password hashing using Bcrypt",
      "Search, filtering, sorting, and pagination",
      "Pydantic-based request validation",
    ],
    live: "https://product-management-frontend-876i.onrender.com",
    github: "https://github.com/Arun10092001/Product-management-backend",
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
