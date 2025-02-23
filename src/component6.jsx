import React from "react";
import styles from "./component6.module.css";
import cisco from "../src/assets/cisco1.png";
import html from "../src/assets/html.png"
import rhcsa from "../src/assets/rhcsa.png";
import oracle from "../src/assets/oracle.png";
import python from "../src/assets/python.png";
import linux from "../src/assets/linux.png";

const certificates = [
  { id: 1, title: "C", img: cisco, description: "22 Jan 2023" },
  { id: 2, title: "HTML & CSS", img: html, description: "8 May 2023" },
  { id: 3, title: "RHCSA", img: rhcsa, description: "26 July 2024" },
  { id: 4, title: "JAVA Foundations", img: oracle, description: "19 Nov 2023" },
  { id: 5, title: "Python", img: python, description: "3 May 2023" },
  { id: 6, title: "NDG Linux Unhatched", img: linux, description: "20 Aug 2023" },
];

const CertificatesPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Certificates</h2>
      <div className={styles.grid}>
        <div className={styles.anotherdiv}>
        {certificates.map((cert) => (
          <div key={cert.id} className={styles.card}>
            <div className={styles.iconColumn}>
              <img src={cert.img} alt={cert.title} className={styles.icon} />
            </div>
            <div className={styles.titleColumn}>
              <p className={styles.certTitle}>{cert.title}</p>
            </div>
            <div className={styles.descColumn}>
              <p className={styles.certDesc}>{cert.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
