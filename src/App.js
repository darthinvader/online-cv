import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
function App() {
  return (
    <div className={styles.PageCentering}>
      <div className={styles.Container}>
        <Navbar />
        <ProjectsContainer />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
