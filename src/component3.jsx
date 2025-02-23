import React from "react";
import styles from "./component3.module.css";
import { FaCode, FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Side: About Me Text */}
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <h1>
            Hi, I'm <span className={styles.highlight}>Ayila Naga Jyothi</span>
          </h1>
          <p>
            I'm a <strong>Full Stack Developer</strong> with experience in frontend and backend development.
            I enjoy building user-friendly web applications and solving complex problems.
          </p>
          <p>
            I also have expertise in <strong>Java</strong>, covering <strong>data structures, algorithms, and OOPS</strong>. 
            I love coding, learning new technologies, and working on exciting projects.
          </p>
          <div className={styles.buttons}>
            <a
              href="https://drive.google.com/file/d/1IPL_Fmq3E2vwB6QKE5f3lEp7DaZUSgVu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Side: Boxes */}
        <div className={styles.infoBoxes}>
          <div className={styles.row}>
            <div className={styles.box}>
              <FaGraduationCap className={styles.icon} />
              <h3>Education</h3>
              <p>B.Tech in Artificial Intelligence and Machine Learning</p>
            </div>
            <div className={styles.box}>
              <FaCode className={styles.icon} />
              <h3>Languages</h3>
              <p>HTML, JavaScript, React, Express, MongoDB, React Native, Java</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.box}>
              <FaTools className={styles.icon} />
              <h3>Tools</h3>
              <p>VS Code, Git, GitHub, Anaconda</p>
            </div>
            <div className={styles.box}>
              <FaBriefcase className={styles.icon} />
              <h3>Projects</h3>
              <p>Built more than 5 projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
