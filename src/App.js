import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={styles.PageCentering}>
      <div className={styles.Container}>
        <Navbar />
        <ProjectsContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
