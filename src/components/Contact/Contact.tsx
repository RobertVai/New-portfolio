import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.left}>
        <h2>
          <span></span>
          Let's Work Together
        </h2>

        <p>I'm always open to new opportunities and interesting projects.</p>
      </div>

      <div className={styles.right}>
        <a
          href="mailto:robert.vaitechovskij@gmail.com"
          className={styles.button}
        >
          Get In Touch ↗
        </a>

        <a href="mailto:robert.vaitechovskij@gmail.com" className={styles.info}>
          ✉<span>vaitechovskij@gmail.com</span>
        </a>

        <div className={styles.info}>
          ⌖<span>Remote / Worldwide</span>
        </div>
      </div>
    </section>
  );
}
