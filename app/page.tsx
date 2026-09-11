import { Navbar } from "./components/Navbar";
import styles from "./hero.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="home" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />

        <div className={styles.content}>
          <p className={styles.eyebrow}>Emmanuel Makanjuola Apostolic Missions</p>

          <h1 id="hero-title">
            Raising a generation that <span>knows God.</span>
          </h1>

          <p className={styles.description}>
            A ministry committed to revival, prayer, discipleship, soul winning,
            and the equipping of end-time ministers to advance the Kingdom of God.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#about">
              Discover the Ministry
            </a>
            <a className={styles.secondaryAction} href="#gatherings">
              Explore Our Gatherings
            </a>
          </div>

          <div className={styles.pillars} aria-label="Ministry focus">
            <span>Revival</span>
            <span>Prayer</span>
            <span>Discipleship</span>
            <span>Soul Winning</span>
            <span>Equipping</span>
          </div>
        </div>

        <div className={styles.sideMark} aria-hidden="true">
          <span>EM</span>
          <div />
          <small>APOSTOLIC MISSIONS</small>
        </div>
      </section>
    </main>
  );
}
