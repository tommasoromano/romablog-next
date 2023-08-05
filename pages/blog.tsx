import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import Navigation from '../components/Navigation';
import { getSortedPostsData } from '../lib/posts';
import { Post } from '../types/post';
import Section from '../components/Section';

const Blog: NextPage<{ allPostsData: Post[] }> = ({
  allPostsData,
}: {
  allPostsData: Post[];
}) => (
  <div className="blog__wrapper">
    <MetaHead
      title="Blog | Tommaso Romanò"
      ogtitle="Blog by Tommaso Romanò"
      description="You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my careers, sharing knowledge along the way."
      url="https://tommasoromano.com/blog"
    />
    <Navigation />
    <div className="py-8"></div>
    
    <Section
      title="Blog"
      description="You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my careers, sharing knowledge along the way."
    >
      <div className="blog__blogs">
        {[...allPostsData]
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((post) => {
            if (post.isBlog) {
              return (
                <Link key={post.slug} href={'/blog/' + post.slug}>
                  <a>
                    <div className="blog__blog">
                      <div className="blog__details">
                        <p className="blog__details-date">
                          {post.publishedDate} . {post.readingTime}
                        </p>
                        <h3 className="blog__details-title">{post.title}</h3>
                      </div>
                      <img
                        className="blog__cover"
                        src={post.cover}
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
    </Section>

    <div className="py-3"></div>
    <Contact />
    <Footer />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
