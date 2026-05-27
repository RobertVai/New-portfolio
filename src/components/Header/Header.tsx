import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/rvv.png";
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

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    setActiveSection(id);
    setIsMenuOpen(false);

    const headerHeight = 88;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(event) => handleNavClick(event, "home")}
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
              onClick={(event) => handleNavClick(event, link.id)}
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
