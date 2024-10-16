import React, { FC } from 'react';
import styles from "./Header.module.css";

// Zdefiniuj interfejs dla propsów
interface HeaderProps {
  onShowAboutMe: () => void; // Typ funkcji, która nie przyjmuje argumentów i nie zwraca wartości
}

export const Header: FC<HeaderProps> = ({ onShowAboutMe }) => {
  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.navItem} href="#" onClick={onShowAboutMe}>
          About Me
        </a>
        <a className={styles.navItem} href="#">
          My Skills
        </a>
        <a className={styles.navItem} href="#">
          Projects
        </a>
        <a className={styles.navItem} href="#">
          Contacts
        </a>
      </nav>
    </>
  );
};
