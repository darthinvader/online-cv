import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.PageCentering}>
      <div className={styles.Container}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
