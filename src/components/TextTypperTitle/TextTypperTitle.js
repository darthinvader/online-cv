import TextTypper from "../TextTypper/TextTypper";
import styles from "./TextTypperTitle.module.scss";

const TextTypperTitle = ({ title }) => {
  return (
    <h1 className={styles.ProjectsTitle}>
      <TextTypper text={title} />
      <span className={styles.dot}>
        <TextTypper text="." fixedTimer={(title.length + 1) * 150} />
      </span>
    </h1>
  );
};

export default TextTypperTitle;
