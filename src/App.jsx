import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const portfolio = {
  name: "Arun Gokul",
  role: "Software Developer",
  intro:
    "Software Developer specializing in React, Python, SQL, Fast API and PostgreSQL.",
  email: "gokularun529@gmail.com",
  phone: "+91 88706 44363",
  location: "India",
  githubUsername: "arungokul",
  links: {
    github: "https://github.com/Arun10092001",
    linkedin: "https://www.linkedin.com/in/arun-gokul-465540312",
    resume: "/ARUN GOKUL123.pdf",
  },
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Navbar
        name={portfolio.name}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main>
        <Hero profile={portfolio} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact profile={portfolio} />
      </main>
      <Footer profile={portfolio} />
    </div>
  );
}

export default App;
