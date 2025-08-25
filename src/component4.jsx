import React from "react";
import styles from "./component4.module.css";
import { FaReact, FaHtml5, FaCss3, FaJs, FaDatabase, FaJava, FaCode, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPython} from "react-icons/si";

const skillsData = [
  { name: "C", icon: <FaCode />, description: "Strong foundation in system-level programming and memory management." },
  { name: "Java", icon: <FaJava />, description: "Experienced in object-oriented programming, data structures, and backend development." },
  { name: "Python", icon: <SiPython />, description: "Skilled in AI, ML, and data science." },
  { name: "React", icon: <FaReact />, description: "Proficient in building dynamic, responsive UI components for web applications." },
  { name: "HTML & CSS", icon: <FaHtml5 />, description: "Proficient in structuring web content with semantic markup and designing responsive, visually appealing pages." },
  { name: "JavaScript", icon: <FaJs />, description: "Strong knowledge of interactive web development and DOM manipulation." },
  { name: "Express.js", icon: <SiExpress />, description: "Experience in developing RESTful APIs and backend services with Node.js." },
  { name: "MongoDB", icon: <SiMongodb />, description: "Knowledge of NoSQL databases." },
  { name: "SQL", icon: <FaDatabase />, description: "Proficient in querying and managing relational databases efficiently." },
  { name: "React Native", icon: <FaCss3 />, description: "Skilled in building cross-platform mobile applications with a smooth and native-like user experience." },
  { name: "ServiceNow", icon: <FaGitAlt />, description: "Hands-on experience in workflow automation and IT service management." },
  { name: "Git", icon: <FaGitAlt />, description: "Proficient in version control and collaborative development." },
  { name: "GitHub", icon: <FaGithub />, description: "Experienced in hosting, managing repositories, and team collaboration." }
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.skillsColumn}>
          {skillsData.slice(0, 7).map((skill, index) => (
            <div key={index} className={styles.skillBox}>
              <div className={styles.icon}>{skill.icon}</div>
              <div className={styles.skillDetails}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className={styles.skillsColumn}>
          {skillsData.slice(7, 14).map((skill, index) => (
            <div key={index} className={styles.skillBox}>
              <div className={styles.icon}>{skill.icon}</div>
              <div className={styles.skillDetails}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
