import { BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    text: `Master of Computer Applications (MCA)
          Hindustan College of Arts and Science, Coimbatore
          2024 - 2026 | 75%`,
  },
  {
    icon: Sparkles,
    label: "Strength",
    text: `A highly motivated and adaptable individual with strong problem-solving, and communication skills.
           Quick to learn new concepts, capable of working effectively both independently and within teams.`,
  },
  {
    icon: BriefcaseBusiness,
    label: "Goal",
    text: "To begin my career as a Software Developer, contribute to impactful projects, enhance my technical skills, and grow into a professional software developer.",
  },
];

function About() {
  return (
    <section className="section split-section" id="about">
      <div>
        <p className="section-kicker">About me</p>
        <h2>Building useful web apps with a practical full stack mindset.</h2>
      </div>
      <div className="about-content">
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="mini-card" key={item.label}>
              <item.icon size={22} />
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
