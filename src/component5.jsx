import React from "react";
import styles from "./component5.module.css";
// import profileImage from "../src/assets/image2.png"; 
import BusImage from "../src/assets/busimage.jpg";
import SpaceImage from "../src/assets/Spaceimage.jpg";
import lead from "../src/assets/leader.webp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Bus IN/OUT",
    image: BusImage,
    description: "Designed a bus management system to track arrivals and departures at our college, displaying statistical data for better scheduling.",
    github: "#",
    live: "http://app.technicalhub.io:5567/",
  },
  {
    title: "Space Tech",
    image:  SpaceImage,
    description: "Created an informative website exploring planets, nebulas, and space mysteries, offering engaging content about the universe.",
    github: "#",
    live: "#",
  },
  {
    title: "LeaderBoard",
    image:  lead,
    description: "Built a Leaderboard for Top Coders with campus-wise filtering across three campuses. Enabled real-time rankings to enhance competitive coding culture.",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectLinks}>

              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
