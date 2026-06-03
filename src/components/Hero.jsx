import {
  ArrowDown,
  BriefcaseBusiness,
  Download,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";

function Hero({ profile }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <h1>
          Hi, I&apos;m <span>{profile.name}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a className="btn primary" href={profile.links.resume} download>
            <Download size={18} />
            Resume
          </a>
          <a className="btn ghost" href="#contact">
            <Mail size={18} />
            Contact
          </a>
        </div>

        <div className="social-row" aria-label="Social links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <GitBranch size={19} />
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={19} />
            LinkedIn
          </a>
          <span>
            <MapPin size={19} />
            {profile.location}
          </span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Profile preview">
        <div className="profile-card">
          <img src="/profile.jpg" alt="Arun Gokul" />
          <div>
            <p>{profile.name}</p>
            <span>MCA Graduate</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;
