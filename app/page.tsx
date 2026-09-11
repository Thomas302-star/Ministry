import { Navbar } from "./components/Navbar";
import heroStyles from "./hero.module.css";
import aboutStyles from "./about.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="home" className={heroStyles.hero} aria-labelledby="hero-title">
        <div className={heroStyles.glow} aria-hidden="true" />
        <div className={heroStyles.grid} aria-hidden="true" />

        <div className={heroStyles.content}>
          <p className={heroStyles.eyebrow}>Emmanuel Makanjuola Apostolic Missions</p>

          <h1 id="hero-title">
            Raising a generation that <span>knows God.</span>
          </h1>

          <p className={heroStyles.description}>
            A ministry committed to revival, prayer, discipleship, soul winning,
            and the equipping of end-time ministers to advance the Kingdom of God.
          </p>

          <div className={heroStyles.actions}>
            <a className={heroStyles.primaryAction} href="#about">
              Discover the Ministry
            </a>
            <a className={heroStyles.secondaryAction} href="#gatherings">
              Explore Our Gatherings
            </a>
          </div>

          <div className={heroStyles.pillars} aria-label="Ministry focus">
            <span>Revival</span>
            <span>Prayer</span>
            <span>Discipleship</span>
            <span>Soul Winning</span>
            <span>Equipping</span>
          </div>
        </div>

        <div className={heroStyles.sideMark} aria-hidden="true">
          <span>EM</span>
          <div />
          <small>APOSTOLIC MISSIONS</small>
        </div>
      </section>

      <section id="about" className={aboutStyles.section} aria-labelledby="about-title">
        <div className={aboutStyles.inner}>
          <div className={aboutStyles.header}>
            <div>
              <p className={aboutStyles.eyebrow}>About the Apostle</p>
              <h2 id="about-title" className={aboutStyles.title}>
                A burden for revival. A call to equip a generation.
              </h2>
            </div>
            <p className={aboutStyles.intro}>
              Apostle Emmanuel Makanjuola is an itinerant minister of the Gospel,
              Apostle, missionary, intercessor, and revivalist, sent with a burden
              to see lives set ablaze for God and to advance the cause of Christ.
            </p>
          </div>

          <div className={aboutStyles.body}>
            <div className={aboutStyles.portrait} aria-label="Apostolic Missions visual">
              <div className={aboutStyles.portraitMark}>EM</div>
            </div>

            <div className={aboutStyles.copy}>
              <p>
                His apostolic mandate is centered on raising and equipping end-time
                ministers as arrows in the quiver of Elohim: men and women deeply
                rooted in Christ, grounded in sound doctrine, committed to prayer,
                and prepared to fulfill God&apos;s purpose in their generation.
              </p>

              <p>
                He carries a burden for the awakening of hearts back to God and is
                passionate about taking the Gospel beyond the walls of the church
                to campuses, cities, and territories, proclaiming Christ and
                calling people into genuine discipleship and consecration.
              </p>

              <p className={aboutStyles.quote}>
                A generation that will know God, walk in His ways, carry His
                presence, and faithfully advance His Kingdom.
              </p>

              <div className={aboutStyles.signature}>
                Apostle Emmanuel Makanjuola
                <span className={aboutStyles.role}>Apostolic Missions</span>
              </div>

              <div className={aboutStyles.values} aria-label="Ministry foundations">
                <div className={aboutStyles.value}>
                  <strong>Christ</strong>
                  <span>Rooted in the person and purpose of Christ.</span>
                </div>
                <div className={aboutStyles.value}>
                  <strong>Prayer</strong>
                  <span>Committed to the place of prayer and intercession.</span>
                </div>
                <div className={aboutStyles.value}>
                  <strong>Equipping</strong>
                  <span>Raising ministers prepared for their generation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
