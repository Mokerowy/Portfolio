import { useState } from 'react';
import { AboutMe } from "../AboutMe/AboutMe";
import { Header } from "../Header/Header";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleShowAboutMe = () => {
    if (showAboutMe) {
      setShowAboutMe(false); // Ustaw na false, jeśli jest true
      setTimeout(() => {
        setShowAboutMe(true); // Ustaw na true po krótkiej przerwie
      }, 0); // Czas w milisekundach (0 ms, aby ustawić w następnej kolejności)
    } else {
      setShowAboutMe(true); // Ustaw na true, jeśli jest false
    }
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <Header onShowAboutMe={handleShowAboutMe} />
        <img className={styles.heroImage} src="./public/panther.png" alt="Panther" />
        {showAboutMe && <AboutMe />} {/* Wyświetlanie AboutMe tylko, gdy showAboutMe jest true */}
      </div>
    </>
  );
}
