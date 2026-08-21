const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLAlchemy"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Postman"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Technologies I work with</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-list">
              {group.skills.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
