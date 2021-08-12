import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import TextTypperTitle from "../TextTypperTitle/TextTypperTitle";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <TextTypperTitle title="Contact Me" />
      <footer id="footer" className={styles.Footer}>
        <a href="mailto: psaradakisj@gmail.com" className={styles.Link}>
          <AiOutlineMail />
        </a>
        <a
          href="https://github.com/darthinvader"
          target="_blank"
          rel="noreferrer"
          className={styles.Link}
        >
          <AiOutlineGithub></AiOutlineGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/yiannis-psaradakis/"
          target="_blank"
          rel="noreferrer"
          className={styles.Link}
        >
          <AiFillLinkedin></AiFillLinkedin>
        </a>
      </footer>
    </>
  );
};

export default Footer;
