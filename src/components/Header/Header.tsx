import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/skills/rvlogo2.png";
import linkedinIcon from "../../assets/images/social-media/linkedin.svg";
import githubIcon from "../../assets/images/social-media/github.svg";

const navLinks = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && window.scrollY >= section.offsetTop - 160) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={() => handleNavClick("home")}
        >
          <img src={logo} alt="Robert Vaitechovskij Logo" />
        </a>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles["nav-open"] : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={activeSection === link.id ? styles.active : ""}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
          <a
            href="https://github.com/RobertVai"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/robert-vaitechovskij"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        <button
          className={`${styles["menu-button"]} ${
            isMenuOpen ? styles["menu-button-open"] : ""
          }`}
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
