import styles from "./Hero.module.css";
import infinityIcon from "../../assets/images/infinity.svg";
import starsIcon from "../../assets/images/stars.svg";
export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.badge}>
          <span></span>
          Available for new projects
        </p>

        <p className={styles.greeting}>
          Hi, <span>I'm</span>
        </p>

        <h1 className={styles.title}>
          <span>Robert</span>
          <span className={styles["gradient-text"]}>Vaitechovskij</span>
        </h1>

        <p className={styles.role}>
          <span>&lt;/&gt;</span> Front-End Developer
        </p>

        <p className={styles.description}>
          I build modern, responsive and fast web applications with clean code
          and great user experience.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles["primary-button"]}>
            View Projects ↗
          </a>

          <a href="#contact" className={styles["secondary-button"]}>
            Contact Me ↗
          </a>
        </div>

        <div className={styles.stats}>
          <div>
            <strong>~1,5</strong>
            <span>Years coding</span>
          </div>

          <div>
            <strong className={styles["infinity-icon"]}>
              <img src={infinityIcon} alt="Infinity" />
            </strong>
            <span>Coffees</span>
          </div>
        </div>
      </div>

      <div className={styles.preview}>
        <div className={styles["preview-card"]}>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p className={styles["file-name"]}>developer.tsx</p>

          <div className={styles["code-block"]}>
            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>const </span>
              <span className={styles["code-accent"]}>dev</span>
              <span className={styles["code-default"]}> = </span>
              <span className={styles["code-default"]}>{"{"}</span>
            </p>

            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>name: </span>
              <span className={styles["code-string"]}>"Robert V."</span>
              <span className={styles["code-default"]}>,</span>
            </p>

            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>role: </span>
              <span className={styles["code-string"]}>"Front-End"</span>
              <span className={styles["code-default"]}>,</span>
            </p>

            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>stack: [</span>
              <span className={styles["code-string"]}>"React"</span>
              <span className={styles["code-default"]}>, </span>
              <span className={styles["code-string"]}>"TS"</span>
              <span className={styles["code-default"]}>],</span>
            </p>

            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>focus: </span>
              <span className={styles["code-string"]}>"UI · UX · DX"</span>
              <span className={styles["code-default"]}>,</span>
            </p>

            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>open: </span>
              <span className={styles["code-accent"]}>true</span>
              <span className={styles["code-default"]}>,</span>
            </p>

            <p className={styles["code-line"]}>
              <span className={styles["code-default"]}>{"};"}</span>
            </p>
          </div>

          <p className={styles["preview-footer"]}>
            <img src={starsIcon} alt="" />
            <span>Crafting things on the web</span>
          </p>
        </div>
      </div>
    </section>
  );
}
