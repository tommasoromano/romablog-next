import { NextPage } from 'next';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import _data from '../data/recognitions.json';
import { useState } from 'react';
import Section from '../components/Section';
import Recognition from '../components/Recognition';

const Recognitions: NextPage = () => {

  const data = _data.filter((p) => p.show === true)
  const filters = ["All","Selected"]
  const [curFilter,setFilter] = useState(0);

  const filtered = (filter:number) => {
    if (filter === 0) {return data;}
    if (filter === 1) {return data.filter((p)=>p.featured === true);}
    return data.filter((p,i) => {
      return p.show === true && p.tags.includes(filters[filter]);
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
      title="Recognitions | Tommaso Romanò"
      ogtitle="Recognitions made by Tommaso Romanò"
      description="A selected list of recognitions I've received over the years including news, articles, interviews, awards, expositions, events, talks, courses and achievements."
      url="https://tommasoromano.com/recognitions"
    />
    <Navigation />
    <div className="py-8"></div>

    <Section
      title="Recognitions"
      description="A selected list of recognitions I've received over the years including news, articles, interviews, awards, expositions, events, talks, courses and achievements."
      subtitle={renderFilters()}
    >
      {filtered(curFilter).map((recognition, index) => (
            <Recognition key={index}
            recognition={recognition}
            />
      ))}
    </Section>

    <Contact />
    <Footer />
  </div>
);
}

export default Recognitions;
