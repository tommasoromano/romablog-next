import Navigation from './Navigation';

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <Navigation />
      <div className="intro">
        <div className="intro__content">
          <div className="intro__texts">
            <h1 className="intro__name">Tommaso Romanò</h1>
            <p className="intro__job intro__job-main">
              Software Engineer @ Amazon
            </p>

            <p className="intro__job mt-2">
              Hello! I&apos;m a Software Engineer and Data Scientist based in Milan, Italy;
              meanwhile, MSc Computer Science student @ UNIMI.
            </p>

            <p className="intro__job mt-2">
              I&apos;m passionate about . 
              I try to keep things simple. You&apos;ll find writing about technologies I&apos;m interested in at the time, 
              or how I&apos;m learning and growing in my careers, sharing knowledge along the way.
            </p>
          </div>
          <div className="intro__image">
            <img
              width="795"
              height="796"
              src="/images/me/me_2023_05_final_square.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
