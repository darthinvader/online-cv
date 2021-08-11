import styles from "./ProjectsContainer.module.scss";
import Project from "./Project/Project";
import TextTypper from "../TextTypper/TextTypper";
const ProjectsContainer = () => {
  const projects = [];

  projects.push(
    <Project
      key={1}
      link="https://cocktail-bartender.netlify.app"
      imgLink="https://i.imgur.com/RP3Z2GJm.png"
      background={{ background: "linear-gradient(#b5651d,white)" }}
      title="Bartender App"
      subTitle="React, scss, Responsive Design"
      description="A simple app that allows you to search for a random drink from a single ingredient. The implementation was done using React."
    />
  );

  projects.push(
    <Project
      key={2}
      link="https://github.com/darthinvader/BoardGameVendor"
      imgLink="https://i.imgur.com/IiQIPSjl.png"
      background={{ background: "linear-gradient(#4a48ff,white)" }}
      title="Boardgame Vendor"
      subTitle="React, scss, CRUD, SPA"
      description="An app that allows you to manage and search your favorite boardgames. The implementation was done using React."
    />
  );

  projects.push(
    <Project
      key={3}
      link="https://darthinvader.github.io/Ioanna-Psaradaki-Personal-Web-Page/"
      imgLink="https://i.imgur.com/8XoGWZL.png"
      background={{ background: "linear-gradient(#001f2b,white)" }}
      title="Personal Website"
      subTitle="Html, css, Responsive Design"
      description="The Design was handled with Adobe XD design platform using transitions when applicable."
    />
  );

  return (
    <div id="Projects">
      <h1 className={styles.ProjectsTitle}>
        <TextTypper text="Projects" />
        <span className={styles.dot}>
          <TextTypper text="." fixedTimer={9 * 150} />
        </span>
      </h1>
      <div className={styles.ProjectsContainer}>{projects}</div>
    </div>
  );
};

export default ProjectsContainer;
