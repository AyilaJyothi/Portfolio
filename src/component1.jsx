import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./component1.module.css";

function Header({ comp1Ref, comp2Ref, comp3Ref, comp4Ref, comp5Ref, comp6Ref }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToComponent = (ref) => {
    if (ref?.current) {
      const headerHeight = document.querySelector(`.${styles.header}`).offsetHeight;
      window.scrollTo({
        top: ref.current.offsetTop - headerHeight,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Jyothi</div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li><a onClick={() => scrollToComponent(comp1Ref)}>Home</a></li>
          <li><a onClick={() => scrollToComponent(comp2Ref)}>About</a></li>
          <li><a onClick={() => scrollToComponent(comp3Ref)}>Skills</a></li>
          <li><a onClick={() => scrollToComponent(comp4Ref)}>Projects</a></li>
          <li><a onClick={() => scrollToComponent(comp5Ref)}>Certificates</a></li>
          <li><a onClick={() => scrollToComponent(comp6Ref)}>Contact</a></li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;
