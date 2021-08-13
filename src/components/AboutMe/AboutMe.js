import TextTypperTitle from "../TextTypperTitle/TextTypperTitle";
import Experience from "./Experience/Experience";

const AboutMe = () => {
  return (
    <>
      <TextTypperTitle title="About Me" />
      <div id="About">
        <div className="Card">
          <h2>Experience</h2>
          <Experience
            ExperienceName="Tom Sawyer Software"
            ExperienceDetail="Herakleion,Greece | May 2019- Oct 2019"
            Description="Java Developer for the Perspectives Product"
          />
          <Experience
            ExperienceName="Convert Group"
            ExperienceDetail="Athens,Greece | April 2020 - Present"
            Description="Python Developer for with emphasis on Web Scraping with the Scrapy
            API."
          />
        </div>
        <div className="Card">
          <h2>Education</h2>
          <Experience
            ExperienceName="Computer Science"
            ExperienceDetail="University Of Crete | Herakleion,Greece | April 2020 - Present"
            Description=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
