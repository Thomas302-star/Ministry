import { Navbar } from "./components/Navbar";
import heroStyles from "./hero.module.css";
import aboutStyles from "./about.module.css";
import mandateStyles from "./mandate.module.css";

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

      <section id="mandate" className={mandateStyles.section} aria-labelledby="mandate-title">
        <div className={mandateStyles.inner}>
          <div className={mandateStyles.top}>
            <div>
              <p className={mandateStyles.eyebrow}>The Apostolic Mandate</p>
              <h2 id="mandate-title" className={mandateStyles.title}>
                Raising arrows for the purposes of God.
              </h2>
            </div>
            <p className={mandateStyles.intro}>
              The assignment is centered on raising and equipping end-time ministers
              who are deeply rooted in Christ, grounded in sound doctrine, committed
              to prayer, and prepared to fulfill God&apos;s purpose in their generation.
            </p>
          </div>

          <div className={mandateStyles.statement}>
            <p className={mandateStyles.statementText}>
              To see lives awakened to God and a generation equipped to carry His
              presence and advance the cause of Christ.
            </p>
            <div className={mandateStyles.mark} aria-hidden="true">EM</div>
          </div>

          <div className={mandateStyles.pillars} aria-label="Apostolic mandate pillars">
            <article className={mandateStyles.pillar}>
              <span className={mandateStyles.number}>01</span>
              <h3>Know Christ</h3>
              <p>Rooted in Christ and growing in genuine devotion to Him.</p>
            </article>
            <article className={mandateStyles.pillar}>
              <span className={mandateStyles.number}>02</span>
              <h3>Sound Doctrine</h3>
              <p>Grounded in biblical truth and prepared to stand firmly in the faith.</p>
            </article>
            <article className={mandateStyles.pillar}>
              <span className={mandateStyles.number}>03</span>
              <h3>Prayer</h3>
              <p>Committed to the place of prayer, intercession, and dependence on God.</p>
            </article>
            <article className={mandateStyles.pillar}>
              <span className={mandateStyles.number}>04</span>
              <h3>Gospel Advance</h3>
              <p>Taking the Gospel beyond church walls to campuses, cities, and territories.</p>
            </article>
            <article className={mandateStyles.pillar}>
              <span className={mandateStyles.number}>05</span>
              <h3>Equip &amp; Send</h3>
              <p>Preparing men and women to fulfill God&apos;s purpose in their generation.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
