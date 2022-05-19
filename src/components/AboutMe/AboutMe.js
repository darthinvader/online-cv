import TextTypperTitle from "../TextTypperTitle/TextTypperTitle";
import Experience from "./Experience/Experience";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div id="About">
      <TextTypperTitle title="About Me" />
      <div className={styles.Card}>
        <h2 className={styles.Subtitle}>Experience</h2>
        <Experience
          ExperienceName="Enreach"
          ExperienceDetail="Almere Netherlands | November 2021 - Present"
          Description="Front end developer focusing React-typescript Applications"
        />
        <Experience
          ExperienceName="Convert Group"
          ExperienceDetail="Athens | April 2020 - January 2022"
          Description="Python Developer for with emphasis on Web Scraping with the Scrapy
            API."
        />
        <Experience
          ExperienceName="Tom Sawyer Software"
          ExperienceDetail="Herakleion | May 2019 - Oct 2019"
          Description="Java Developer for the Perspectives Product"
        />
      </div>
      <div className={styles.Card}>
        <h2 className={styles.Subtitle}>Education</h2>
        <Experience
          ExperienceName="Computer Science"
          ExperienceDetail="University Of Crete | Herakleion | 2013 - 2018"
          Description=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
