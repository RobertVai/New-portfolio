import styles from "./Contact.module.css";
import arrowUpIcon from "../../assets/images/arrow-up.svg";
import mailIcon from "../../assets/mail.svg";
import locationIcon from "../../assets/location.svg";

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
          Get in touch <img src={arrowUpIcon} alt="" />
        </a>

        <div className={styles.info}>
          <a href="mailto:robert.vaitechovskij@gmail.com">
            <img src={mailIcon} alt="" />
            <span>robert.vaitechovskij@gmail.com</span>
          </a>

          <p>
            <img src={locationIcon} alt="" />
            <span>Remote / Worldwide</span>
          </p>
        </div>
      </div>
    </section>
  );
}
