import React, { useEffect, useState } from 'react';
import CalculateDuration from './Dates';
import Link from 'next/link';
import IconArrow from './icons/Arrow';
// import { graphql, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface ProjectProps {
  show: boolean;
  name: string;
  title: string;
  link: string;
  img: string;
  featurated: string;
  role: string;
  description: string;
  long: string;
  field: string;
  tags: string[];
  time: string;
  at: string;
  atlink: string;
  tech: string;
  seemore: string;
  slides: never[];
}

const Project = ({
  show,
  name,
  title,
  link,
  img,
  featurated,
  role,
  description,
  long,
  field,
  tags,
  time,
  at,
  atlink,
  tech,
  seemore,
  slides,
}: ProjectProps) => {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const image = entry.target.querySelector('.projects__imagewrapper');
  //       if (entry.isIntersecting) {
  //         image?.classList.add('projects__imagewrapper-animate');
  //       } else {
  //         // We're not intersecting, so remove the class!
  //         image?.classList.remove('projects__imagewrapper-animate');
  //       }
  //     });
  //   });
  //   const projectEntries = document.querySelectorAll('.projects__project');
  //   projectEntries.forEach((entry) => {
  //     observer.observe(entry);
  //   });
  // }, []);

  const [visible, setVisible] = useState(false);

  return (
    <div className="projects__project py-8">
      <div className='relative projects__imagewrapper'>
        <img
          className="projects__image"
          src={img}
          alt={`cover photo for project "${title}"`}
        />
        <div className={`projects__more absolute top-0 bottom-0 left-0 right-0 ${visible?"block":"hidden"}`}>
          <p>{description}</p>
        </div>
      </div>
      <div className="projects__detail">
        <h3 className="projects__title">{title}</h3>
        {/* <div className="projects__allProjects">
          <Link href="/projects" aria-label="see more projects by Tommaso Romanò">
            <a>
              <span>See more</span>
              <IconArrow/>
            </a>
          </Link>
        </div> */}
        <p className='projects__info'>
          <span className='font-bold'>{role}</span> <a className='minor-links' href={atlink}>@ {at}</a>
          <br/>
          <span className='italic'>{CalculateDuration(time)}</span>
        </p>
        {/* <p className="projects__description">{`${description.substring(0, 50)}${
          description.length >= 50 ? '...' : ''
        }`}</p> */}
        <p><span className='font-bold'>Tech: </span>{tech}</p>
        <div className="projects__allProjects my-4">
            <a onClick={()=>{setVisible(!visible)}}>
              <span>{visible ? "Close":"Read More"}</span>
              {/* <IconArrow/> */}
            </a>
        </div>
        {/* <div className="projects__stacks">
          {stacks.map((stack, index) => (
            <div key={index} className="projects__stack">
              {stack}
            </div>
          ))}
        </div>
        <div className="projects__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="projects__links-live"
            aria-label={`visit the live version of Samip Poudel's project named '${title}'`}
          >
            View Live
          </a>
          <a
            href={github}
            className="projects__links-more"
            aria-label={`learn more about Samip Poudel's project named '${title}'`}
          >
            See More
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
