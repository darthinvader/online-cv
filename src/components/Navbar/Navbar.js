import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
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

export default Navbar;
