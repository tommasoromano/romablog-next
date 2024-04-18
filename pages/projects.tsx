import { NextPage } from "next";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MetaHead from "../components/MetaHead";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import _data from "../data/projects.json";
import { useState } from "react";
import Section from "../components/Section";
import { Recognition } from "../components/Recognition";

const Projects: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <MetaHead
        title="Projects | Tommaso Romanò"
        ogtitle="Projects made by Tommaso Romanò"
        description="These are some of the works over the years. These project reflect my passion in software and design. My most used tools are Javascript, React, Node and MongoDB."
        url="https://tommasoromano.com/projects"
      />
      <section className="mx-auto max-w-screen-sm px-4">
        <main className="mb-auto">
          <div className="pt-8 mb-4 text-2xl font-bold">Projects</div>
          <div className="flex w-full flex-col space-y-8">
            {/* {allRecognitions.map((e) => e)} */}
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default Projects;

const prj = (
  <Recognition
    title="Top 100 in the Italian game industry (2023)"
    link="https://startupitalia.eu/le-100-e-piu-persone-da-seguire-nel-mondo-dei-videogiochi-in-italia-lista-in-aggiornamento"
    tag="Award"
    when="16 July 2023"
    images={[]}
  >
    ciao
  </Recognition>
);
