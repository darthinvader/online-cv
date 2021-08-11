import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
import ProjectsContainer from "./components/Projects/ProjectContainer";
function App() {
  return (
    <div className={styles.PageCentering}>
      <div className={styles.Container}>
        <Navbar />
        <ProjectsContainer />
      </div>
    </div>
  );
}

export default App;
