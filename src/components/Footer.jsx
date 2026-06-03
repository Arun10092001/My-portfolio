import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";

function Footer({ profile }) {
  return (
    <footer className="footer">
      <p>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <div className="footer-links">
        <a href={profile.links.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <GitBranch size={18} />
        </a>
        <a href={profile.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
