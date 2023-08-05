import React, { useEffect, useState } from 'react';
import CalculateDuration from './Dates';
import Link from 'next/link';
import IconArrow from './icons/Arrow';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
// import { graphql, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export interface IRecognitions {
  show: boolean;
  featured: boolean;
  name: string;
  title: string;
  link: string;
  date: string;
  description: string;
  tags: string[];
  expande: string[];
  expandeText: string;
  image: string;
}

interface RecognitionProps {
  recognition: IRecognitions;
}

const Recognition = ({recognition}:RecognitionProps) => {

  const [expand, setExpand] = useState(false);

  const renderImage = (src:string) => {
    if (src === "") return null;
    return (
        <img
          className="recognitions__image"
          src={src}
          alt={`photo for "${recognition.title}"`}
        />
      )
  }

  return (
    // <div className={`recognitions__project py-8 ${recognition.expande.length>1?"border-l-4 border-primary":""}`}>
    <div className="recognitions__project py-8">
      <div className='relative recognitions__imagewrapper'>
        {renderImage(recognition.image)}
      </div>
      <div className="recognitions__detail">
        <h3 className="recognitions__title">{recognition.title}</h3>
        <p className='recognitions__info'>
          {recognition.link.length > 2 ? 
          <>
          <a className='' href={recognition.link}>
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary inline"/>
          </a>
          {' ‧ '}
          </>
          :
          null
          }
          <span className='font-bold text-black-dark'>{recognition.tags[0]}</span>
          {' ‧ '}
          <span className='italic text-black-dark'>{recognition.date}</span>
          {' ‧ '}
          {recognition.description}
        </p>
        {/* <p><span className='font-bold'>Tech: </span>{tech}</p> */}
        {/* <div className="read-more my-4">
            <a onClick={()=>{setExpand(!expand)}}>
              <span>{expand ? "Close":recognition.expandeText}</span>
            </a>
        </div> */}
      </div>
    </div>
  );
};

export default Recognition;
