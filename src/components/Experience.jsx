import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

function Experience() {
  return (
    <section className="section split-section" id="experience">
      <div>
        <p className="section-kicker">Internship experience</p>
        <h2>Hands-on React work in a production environment.</h2>
      </div>

      <article className="experience-card">
        <div className="experience-header">
          <div className="experience-icon">
            <BriefcaseBusiness size={22} />
          </div>
          <div>
            <h3>Frontend Developer Intern</h3>
            <p>Resulticks Edge Solution Technologies Pvt. Ltd.</p>
          </div>
        </div>

        <div className="experience-meta">
          <span>
            <MapPin size={16} />
            Chennai
          </span>
          <span>
            <CalendarDays size={16} />
            Feb 2026 - Mar 2026
          </span>
        </div>

        <ul className="experience-list">
          <li>
            Worked on a live React codebase and understood component
            architecture, reusable UI patterns, and API data flow.
          </li>
          <li>
            Identified and fixed UI bugs across multiple components, improving
            visual consistency and user experience.
          </li>
          <li>
            Collaborated in a production-style workflow while learning how
            frontend changes move from issue identification to implementation.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
