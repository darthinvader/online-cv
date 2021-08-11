import styles from "./ProjectContainer.module.scss";
import Project from "./Project/Project";
const ProjectsContainer = () => {
  const projects = [];

  projects.push(<Project />);

  return <div className={styles.ProjectContainer}>{/* Projects here */}</div>;
};

export default ProjectsContainer;
