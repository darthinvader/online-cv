import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className={styles.PageCentering}>
      <div className={styles.Container}>
        <Navbar />
        <Home />
        <ProjectsContainer />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
