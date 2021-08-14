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
            <a href="#CV">CV</a>
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
