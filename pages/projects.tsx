import { NextPage } from 'next';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import _data from '../data/projects.json';
import { useState } from 'react';
import Section from '../components/Section';

const Projects: NextPage = () => {

  const data = _data.filter((p) => p.show === true)
  const filters = ["All","Selected","Software","Data","Game"]
  const [curFilter,setFilter] = useState(0);

  const filtered = (filter:number) => {
    if (filter === 0) {return data;}
    if (filter === 1) {return data.filter((p)=>p.featurated === true);}
    return data.filter((p,i) => {
      return p.show === true && p.field.includes(filters[filter]);
    })
  }

  const renderFilters = () => {
    return (
      <p>{filters.map((f,i) =>
        i == curFilter ?
        <>
        <span className="text-black-dark hover:underline font-black"
        onClick={()=>{setFilter(i)}}> {f} ({filtered(i).length}) </span>
        {i+1 !== filters.length && "/"}
        </>
        : 
        <>
        <span className="hover:underline"
        onClick={()=>{setFilter(i)}}> {f} ({filtered(i).length}) </span>
        {i+1 !== filters.length && "/"}
        </>
      )}</p>
    )
  }

  return (
  <div>
    <MetaHead
      title="Works | Tommaso Romanò"
      ogtitle="Works made by Tommaso Romanò"
      description="These are some of the works over the years. These project reflect my passion in software and design. My most used tools are Javascript, React, Node and MongoDB."
      url="https://samip.vercel.app/projects"
    />
    <Navigation />
    <div className="py-8"></div>

    <Section
      title="Works"
      description="A selected list of projects I've worked on as an employer, collaborator, self-employed, student or personal"
      subtitle={renderFilters()}
    >
      {filtered(curFilter).map((project, index) => (
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
      ))}
    </Section>

    <Contact />
    <Footer />
  </div>
);
}

export default Projects;
