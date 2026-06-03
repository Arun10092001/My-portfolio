import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar({ name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">AG</span>
          <span>{name}</span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            title="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
