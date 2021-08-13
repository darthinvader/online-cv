import styles from "./Experience.module.scss";

const Experience = ({ ExperienceName, ExperienceDetail, Description }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Experience}>
        <h3 className={styles.Name}>{ExperienceName}</h3>
        <h4 className={styles.Details}>{ExperienceDetail}</h4>
        <p className={styles.Description}>{Description}</p>
      </div>
    </div>
  );
};

export default Experience;
