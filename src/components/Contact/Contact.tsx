import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.left}>
        <p className={styles.label}>
          <span></span>
          Available for work
        </p>

        <h2>Let’s work together</h2>

        <p className={styles.description}>
          Open to new opportunities and interesting projects.
        </p>
      </div>

      <div className={styles.right}>
        <a
          href="mailto:robert.vaitechovskij@gmail.com"
          className={styles.button}
        >
          Get in touch ↗
        </a>

        <div className={styles.info}>
          <a href="mailto:robert.vaitechovskij@gmail.com">
            ✉ <span>vaitechovskij@gmail.com</span>
          </a>

          <p>⌖ Remote / Worldwide</p>
        </div>
      </div>
    </section>
  );
}
