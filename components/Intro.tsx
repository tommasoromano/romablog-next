import Navigation from './Navigation';

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <Navigation />
      <div className="intro">
        <div className="intro__content">
          <div className="intro__texts">
            <h1 className="intro__name intro__rainbow">Tommaso Romanò</h1>
            <p className="intro__job intro__job-main">
              Software Engineer @ Amazon Robotics
            </p>

            <p className="intro__job mt-2">
              Hello! I&apos;m a Software Engineer from Milan, Italy 🇮🇹;
              Currently in Berlin, Germany 🇩🇪, working as a Software Engineer <span className='minor-links'>@ Amazon Robotics</span> and
              MSc Computer Science student <span className='minor-links'>@ University of Milan</span>.
            </p>

            <p className="intro__job mt-2">
            I&apos;m passionate about building software that solves real-world problems.
            Here, you&apos;ll find how I&apos;m learning and growing in my career, sharing it along the way.
            </p>
          </div>
          <div className="intro__image">
            <img
              width="795"
              height="796"
              src="/me/me_2023_05_final_square.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
