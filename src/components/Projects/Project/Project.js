import styles from "./Project.module.scss";
const Project = ({
  link,
  imgLink,
  background,
  title,
  subTitle,
  description,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={styles.projectContainer}>
        <div className={styles.imageContainer} style={background}>
          <img src={imgLink} alt={title} />
        </div>
        <div className={styles.projectContent}>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
