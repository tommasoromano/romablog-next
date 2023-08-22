import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import MetaHead from '../components/MetaHead';
import Project from '../components/Project';
import Skills from '../components/Skills';
import projectsData from '../data/projects.json';
import recognitionsData from '../data/recognitions.json';
import educationData from '../data/education.json';
import { getSortedPostsData } from '../lib/posts';
import { Post } from '../types/post';
import IconArrow from '../components/icons/Arrow';
import Section from '../components/Section';
import Recognition from '../components/Recognition';
import Article from '../components/Article';

const Home: NextPage<{ allPostsData: Post[] }> = ({
  allPostsData,
}: {
  allPostsData: Post[];
}) => {

  const renderProjects = () => {
    return (
      <Section
        title="Works"
        description="A selected list of projects I've worked on as an employer, collaborator, self-employed, student or personal"
      >
        <>
        {projectsData.filter((p)=>p.featurated === true).map((project, index) => {
          // if (index >= 3) return null;
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
        <div className="read-more">
          <Link href="/projects" aria-label="see more projects by Tommaso Romanò">
            <a>
              <span>More Works</span>
              <IconArrow/>
            </a>
          </Link>
        </div>
        </>
      </Section>
    )
  }

  const renderArticles = () => {
    return (
      <Section
        title="Articles"
        description="You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my careers, sharing knowledge along the way."
      >
        <>
        <div className="blog__blogs">
          {[...allPostsData]
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((edge: Post, index: number) => {
              if (edge.isBlog) {
                return (
                  <Article key={index} edge={edge}/>
                );
              } else {
                return null;
              }
            })}
        </div>
        <div className="read-more">
          <Link aria-label="see more articles by Tommaso Romanò" href="/blog">
            <a>
              <span>More Articles</span>
              <IconArrow/>
            </a>
          </Link>
        </div>
        </>
      </Section>
    )
  }

  const renderRecognitions = () => {
    return (
      <Section
        title="Recognitions"
        description="A selected list of recognitions I've received over the years including news, articles, interviews, awards, expositions, events, talks, courses and achievements."
      >
        <>
        {recognitionsData.filter((r) => r.featured===true).map((recognition, index) => {
            return (
              <Recognition key={index}
              recognition={recognition}
              />
            )
          })}

          <div className="read-more">
            <Link href="/recognitions" aria-label="see more projects by Tommaso Romanò">
              <a>
                <span>More Recognitions</span>
                <IconArrow/>
              </a>
            </Link>
          </div>
          </>
      </Section>
    )
  }

  const renderEducation = () => {
    return (
      <Section
        title="Education"
        description=""
      >
        <>
          {educationData.filter((r) => r.featured===true).map((recognition, index) => {
            return (
              <Recognition key={index}
              recognition={recognition}
              />
            )
          })}
          </>
      </Section>
    )
  }

  return (
    <div>
      <MetaHead />

      <Intro />

      {renderProjects()}
      {renderArticles()}
      {renderRecognitions()}
      {/* {renderEducation()} */}


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
