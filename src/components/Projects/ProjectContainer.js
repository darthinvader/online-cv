import styles from "./ProjectContainer.module.scss";
import Project from "./Project/Project";
const ProjectsContainer = () => {
  const projects = [];

  projects.push(
    <Project
      link="https://cocktail-bartender.netlify.app"
      imgLink="https://i.imgur.com/RP3Z2GJm.png"
      background={{ background: "linear-gradient(#b5651d,white)" }}
      title="Bartender App"
      subTitle="React, scss, Responsive Design"
      description="A simple app that allows you to search for a random drink from a single ingredient. The implementation was done using React."
    />
  );

  return (
    <>
      <h1 className={styles.ProjectsTitle}>Projects</h1>
      <div className={styles.ProjectsContainer}>{projects}</div>
    </>
  );
};

export default ProjectsContainer;
