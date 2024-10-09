import { NextPage } from "next";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MetaHead from "../components/MetaHead";
import Navigation from "../components/Navigation";
import _data from "../data/projects.json";
import { useState } from "react";
import Section from "../components/Section";
import { Recognition } from "../components/Recognition";
import { projAll } from "../data/projects";
import {
  expAmazon,
  expAmazonWebServices,
  expDrembitsStudio,
  expFamaLabs,
  expHumanHall,
  expSmartBearEU,
  expStealthStartup,
} from "../data/experiences";
import { TextLink } from "../components/Link";

const Projects: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <MetaHead
        title="Experiences | Tommaso Romano"
        ogtitle="Experiences made by Tommaso Romano"
        url="https://tommasoromano.com/experiences"
      />
      <section className="mx-auto max-w-screen-sm px-4">
        <main className="mb-auto">
          <div className="text-sm pt-4">
            <TextLink href="/">{"< back"}</TextLink>
          </div>
          <div className="pt-8 mb-4 text-2xl font-bold">All Experiences</div>
          <div className="flex w-full flex-col space-y-8">
            {[
              expAmazonWebServices,
              expHumanHall,
              expAmazon,
              expFamaLabs,
              expDrembitsStudio,
              expSmartBearEU,
              expStealthStartup,
            ]
              // .reverse()
              .map((e) => e)}
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default Projects;
