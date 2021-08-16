import styles from "./PhoneNavbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const PhoneNavbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const changeState = () => {
    setExtendNavbar(!extendNavbar);
  };

  const navbarStyle = extendNavbar
    ? `${styles.navbar} ${styles.extend}`
    : styles.navbar;

  return (
    <>
      <div className={styles.BurgerContainer}>
        <div className={styles.Burger} onClick={changeState}>
          <GiHamburgerMenu />
        </div>
      </div>
      <nav className={navbarStyle}>
        <ul className={styles.navList}>
          <li>
            <a href="#Home"> Home</a>
          </li>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1nkpTMiL7u5BFJhPxLLm2aBIZ4tTfS9ca/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <a href="#Contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PhoneNavbar;
