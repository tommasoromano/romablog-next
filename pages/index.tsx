import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import MetaHead from '../components/MetaHead';
import Project from '../components/Project';
import Skills from '../components/Skills';
import projectsData from '../data/projects.json';
import { getSortedPostsData } from '../lib/posts';
import { Post } from '../types/post';
import IconArrow from '../components/icons/Arrow';

const Home: NextPage<{ allPostsData: Post[] }> = ({
  allPostsData,
}: {
  allPostsData: Post[];
}) => {
  return (
    <div>
      <MetaHead />

      <Intro />

      <section className="projects limit-width-lg">
        <h2 className="text-left heading-lg">Works</h2>
        <p className="paragraph mb-8">
        A selected list of projects I've worked on as an employer, collaborator, self-employed, student or personal
        </p>
        {projectsData.map((project, index) => {
          if (index >= 3) return null;
          return (
            <Project
              key={project.name}
              show={project.show}
              name={project.name}
              title={project.title}
              link={project.link}
              img={project.img}
              featurated={project.featurated}
              role={project.role}
              description={project.description}
              long={project.long}
              field={project.field}
              tags={project.tags}
              time={project.time}
              at={project.at}
              atlink={project.atlink}
              tech={project.tech}
              seemore={project.seemore}
              slides={project.slides}
              />
          );
        })}
        <div className="projects__allProjects">
          <Link href="/projects" aria-label="see more projects by Tommaso Romanò">
            <a>
              <span>More Works</span>
              <IconArrow/>
            </a>
          </Link>
        </div>
      </section>

      <section className="blog limit-width-lg">
        <h2 className="heading-lg text-left">Articles</h2>
        <p className="paragraph">
          I write about web development and share my experiences as a developer.
        </p>
        <div className="blog__blogs">
          {[...allPostsData]
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((edge: Post, index: number) => {
              if (edge.isBlog && index < 2) {
                return (
                  <Link
                    key={index}
                    href={`/blog/${edge.slug}`}
                    // href={`/blog/${edge.id}`}
                    aria-label={`read article by Tommaso Romanò on the topic '${edge.title}'`}
                  >
                    <a>
                      <div className="blog__blog">
                        <div className="blog__details">
                          <p className="blog__details-date">
                            {edge.publishedDate} . {edge.readingTime}
                          </p>
                          <h3 className="blog__details-title">{edge.title}</h3>
                        </div>
                        <img
                          className="blog__cover"
                          src={edge.cover}
                          alt="coverPhoto"
                        />
                      </div>
                    </a>
                  </Link>
                );
              } else {
                return null;
              }
            })}
        </div>
        <div className="projects__allProjects">
          <Link aria-label="see more articles by Tommaso Romanò" href="/blog">
            <a>
              <span>More Articles</span>
              <IconArrow/>
            </a>
          </Link>
        </div>
        <div className="py-12"></div>
      </section>

      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
