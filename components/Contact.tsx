const Contact = () => {
  return (
    <section id="contacts" className="contact__wrapper">
      <div className="contact limit-width-lg">
        <h2 className="heading-lg text-left">Hey!</h2>

        <div className="contact__contents">
          <p className="contact__description">
            I specialize in building fast, high quality and gorgeous websites
            and webapps. If you have a project in mind and need my help or just
            wanna say hi, please feel free to contact me through my email &nbsp;
            <a
              href="mailto:info@tommasoromano.com"
              className="contact__email minor-links"
              aria-label="email address of Tommaso Romanò"
            >
              info@tommasoromano.com
            </a>
          </p>
          <div className="contact__resume">
            <p className="contact__resume-details">
              You can find my resume here
            </p>
            <a
              href="/tommaso_romano_resume.pdf"
              className="contact__resume-link minor-links"
              aria-label="link to download Tommaso Romanò's resume"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
