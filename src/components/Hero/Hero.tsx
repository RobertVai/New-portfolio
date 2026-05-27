import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>
          Hi, <span>I'm</span>
        </p>

        <h1 className={styles.title}>
          <span>Robert</span>
          <span className={styles.gradientText}>Vaitechovskij</span>
        </h1>

        <p className={styles.role}>
          <span>&lt;/&gt;</span> Front-End Developer
        </p>

        <p className={styles.description}>
          I build modern, responsive and fast web applications with clean code
          and great user experience.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            View Projects ↗
          </a>

          <a href="#contact" className={styles.secondaryButton}>
            Contact Me ↗
          </a>
        </div>
      </div>
    </section>
  );
}
