import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.pageCentering}>
        <nav className={styles.navbar}></nav>
      </div>
    </>
  );
};

export default Navbar;
