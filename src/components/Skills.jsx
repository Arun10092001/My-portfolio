const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Languages",
    skills: ["Python", "Javascript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Node js", "Express js", "REST APIs", "Fast API"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Mongo DB"],
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
