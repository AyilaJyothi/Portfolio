import React from "react";
import styles from "./component2.module.css";
import profileImage from "../src/assets/image2.png"; // Replace with your actual image
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Component2 = () => {
  return (
    <div className={styles.compoBody}>
      <div className={styles.content}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <h2>Hello,</h2>
          <h1>
            I’m Jyothi <br />
            a <span className={styles.highlight}>Full Stack Developer</span>
          </h1>
          <p className={styles.subText}>
            I'm a passionate Full Stack Developer. I specialize in building dynamic and user-friendly
            web applications, turning ideas into seamless digital experiences.
          </p>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AyilaJyothi"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.iconButton}`}
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/naga-jyothi-ayila-4b3b03258/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.iconButton}`}
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
};

export default Component2;
