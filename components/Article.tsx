import Link from "next/link";
import { Post } from "../types/post";

interface ArticleProps {
  edge: Post;
}

function Article ({edge}:ArticleProps) {
  return (
    <Link
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
}

export default Article;