import styles from "./InfoSection.module.css";

import javascriptIcon from "../../assets/images/skills/javascript.png";
import typescriptIcon from "../../assets/images/skills/typescript.png";
import reactIcon from "../../assets/images/skills/react.png";
import nodejsIcon from "../../assets/images/skills/nodejs.png";
import mongodbIcon from "../../assets/images/skills/mongodb.png";
import cssIcon from "../../assets/images/skills/css.png";
import htmlIcon from "../../assets/images/skills/html.png";

import vscodeIcon from "../../assets/images/tools/vscode.png";
import githubIcon from "../../assets/images/tools/github.png";
import figmaIcon from "../../assets/images/tools/figma.png";
import viteIcon from "../../assets/images/tools/vite.png";
import gitIcon from "../../assets/images/tools/git.png";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "MongoDB", icon: mongodbIcon },
];

const tools: Skill[] = [
  { name: "VS Code", icon: vscodeIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Vite", icon: viteIcon },
];

export function InfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div id="about" className={styles.about}>
          <h2>
            <span></span>
            About Me
          </h2>

          <p>
            I&apos;m a Front-End Developer focused on building clean, responsive
            and user-friendly web applications with React, TypeScript and modern
            CSS. I enjoy turning ideas into polished interfaces and constantly
            improving my code quality.
          </p>
        </div>

        <div id="skills" className={styles.skills}>
          <h2>
            <span></span>
            Skills
          </h2>

          <div className={styles.items}>
            {skills.map((skill) => (
              <div className={styles.item} key={skill.name}>
                <div className={styles.icon}>
                  <img src={skill.icon} alt={skill.name} />
                </div>

                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tools}>
          <h2>
            <span></span>
            Tools
          </h2>

          <div className={styles.items}>
            {tools.map((tool) => (
              <div className={styles.item} key={tool.name}>
                <div className={styles.icon}>
                  <img src={tool.icon} alt={tool.name} />
                </div>

                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
