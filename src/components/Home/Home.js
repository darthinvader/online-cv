import styles from "./Home.module.scss";
import TextTypper from "../TextTypper/TextTypper";

const Home = () => {
  return (
    <div className={styles.Home} id="Home">
      <img
        src="https://i.imgur.com/yuBq01x.png"
        alt="computer"
        className={styles.Image}
      ></img>
      <div className={styles.Text}>
        <h1 className={styles.Title}>
          <TextTypper
            text="Hello I am Yiannis Psaradakis"
            timerMultiplier={80}
          />
        </h1>
        <p className={styles.Details}>
          <TextTypper
            text="Front End Developer with Background in Python and Java"
            timerMultiplier={70}
          />
        </p>
      </div>
    </div>
  );
};

export default Home;
