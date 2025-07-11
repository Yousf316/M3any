import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.mainTitle}>موقع معاني</h1>
      <p className={styles.subTitle}>أذكار وتفسير</p>

    </div>
  );
}
