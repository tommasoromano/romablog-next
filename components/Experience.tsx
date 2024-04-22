import { useState, useEffect } from "react";
import { TextLink } from "./Link";

export const Experience = ({
  company,
  logo,
  position,
  where,
  startDate,
  endDate,
  duration,
  techs,
  images,
  children,
}: {
  company: string;
  logo: string;
  position: string;
  where: string;
  startDate: string;
  endDate: string;
  duration: string;
  techs: string;
  images: { descr: string; src: string }[];
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-full max-w-full flex-col space-y-2 text-sm md:flex-row md:space-y-0">
      <div className="flex shrink-0 space-x-4 md:w-2/12">
        <div
          className="h-16 w-16 rounded-md bg-cover bg-center"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        ></div>
        <div className="block flex flex-col text-sm md:hidden">
          <div className="font-bold">{position}</div>
          <div>
            {company} • {where}
          </div>
          <div>
            {startDate} - {endDate} ({duration})
          </div>
        </div>
      </div>
      <div className="relative md:w-10/12">
        <div className="absolute right-0 top-0 hidden text-right md:block">
          <div>
            <div>
              {startDate} - {endDate}
            </div>
            <div>{duration}</div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="font-bold">{position}</div>
          <div>
            {company} • {where}
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1 md:mt-4">
          {children}
          <div>
            <span className="font-bold">Tech: </span>
            {techs}
          </div>
          {images.length > 0 && (
            <div className="relative max-w-full overflow-hidden">
              {/* <div className="absolute inset-0"> */}
              <div className="relative overflow-auto pt-2">
                <div className="flex flex-nowrap space-x-2">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="aspect-[16/9] h-32 rounded-md bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${image.src})`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const experienceAmazon = (
  <Experience
    company="Amazon"
    logo="/linkedin/amazon_logo.jpeg"
    position="Software Developer Engineer Intern"
    where="Berlin, Germany"
    startDate="Sept. 2023"
    endDate="Feb. 2024"
    duration="6 months"
    techs="React, TypeScript, ProtoBuf, Kotlin, Python, AWS"
    images={[
      { src: "/amazon/cup.jpeg", descr: "" },
      {
        src: "https://spectrum.ieee.org/media-library/a-photo-of-a-robotic-system-stowing-items-in-an-amazon-warehouse.jpg?id=32625002&width=1580&quality=85",
        descr: "",
      },
    ]}
  >
    <div>
      Robotics. Research team mainly composed of PhD Applied Scientists.
      Mission: develop robots to pick any kind of item from human-task-designed
      pods in warehouses.{" "}
      <TextLink href="https://spectrum.ieee.org/amazon-warehouse-robots-2659064182">
        IEEE
      </TextLink>
    </div>
    <div>
      - Designed from scratch a flexible, modular and extensible architecture
      for the operators UI, to speed up the development's pipeline, and to
      enable external testing.
    </div>
    <div>
      - Took ownership of the project and worked side by side with stakeholders;
      suggested and guided the refactoring the whole team data schema.
    </div>
  </Experience>
);

export const experienceFamalabs = (
  <Experience
    company="FamaLabs"
    logo="/linkedin/famalabs_logo.jpeg"
    position="Software Engineer"
    where=""
    startDate="Aug. 2022"
    endDate="May. 2023"
    duration="9 months"
    techs="Next.js, TypeScript, Redux, Jest, Storybook"
    images={[]}
  >
    <div>
      <TextLink href="https://www.famalabs.com/en">FamaLabs</TextLink> is an
      experienced company in distributed systems and cloud architectures in
      healthcare.
    </div>
    <div>
      - Built the modular survey's engine and compiler, and designed UI library
      for MAP (Medical Adaptive Platform): a dashboard built for doctors to
      easily manage CRF and more.
    </div>
  </Experience>
);

export const experienceDreambits = (
  <Experience
    company="Drembits Studio"
    logo="/linkedin/dreambits_logo.jpeg"
    position="Software Engineer, Multiplayer"
    where=""
    startDate="May 2021"
    endDate="Nov. 2022"
    duration="1 year and 6 months"
    techs="Unity, CSharp, PhotonEngine, Python"
    images={[
      { src: "/me/gc_2022.JPG", descr: "GamesCom 2022" },
      { src: "/me/gcparis_2022.jpeg", descr: "Game Connection Paris 2022" },
      { src: "/me/bgf_0.jpg", descr: "Bologna Game Farm 2022" },
    ]}
  >
    <div>
      Founding team. Worked on{" "}
      <TextLink href="https://www.dreambitsstudio.com/">War of Wheels</TextLink>
      : a multiplayer game about medieval-punk fighting cars.
    </div>
    <div>
      - Winners of <TextLink href="https://bolognagamefarm.com/">BGF</TextLink>{" "}
      (funding and accelerator); participated in several international events
      and expositions while pitching to publishers and investors, and meeting
      fellow devs.
    </div>
    <div>
      - Took ownership of the multiplayer and proactively guided its design and
      implementation.
    </div>
  </Experience>
);

export const experienceSmartBear = (
  <Experience
    company="Smart Bear EU"
    logo="/linkedin/smart_bear_eu_logo.jpeg"
    position="Data Scientist"
    where="Milan, Italy"
    startDate="April 2022"
    endDate="Oct. 2022"
    duration="6 months"
    techs="Python, PySpark, Echats.js and AI/ML libraries"
    images={[]}
  >
    <div>
      <TextLink href="https://www.smart-bear.eu/">Smart-Bear</TextLink> is a big
      data platform in healthcare funded by the European Union, offering
      evidence-based interventions thanks to predictive analytics.
    </div>
    <div>
      - Built modular and cloud-optimized pipelines for predictive analysis,
      data imputation and visualization while protecting user's health data
      anonymity.
    </div>
  </Experience>
);

export const experienceFree = (
  <Experience
    company="Stealth Startup"
    logo="/linkedin/stealth_logo.jpeg"
    position="Software Engineer"
    where=""
    startDate="Sept. 2013"
    endDate="Jan. 2022"
    duration="8 years and 5 months"
    techs="Unity, CSharp, Python, React"
    images={[
      { src: "/me/svp21.PNG", descr: "" },
      { src: "/me/mgw19.JPG", descr: "" },
      { src: "/others/untitle-nature-game.gif", descr: "" },
      { src: "/others/relow.jpg", descr: "" },
    ]}
  >
    <div>
      Developed several commercial projects from videogames to AI automations or
      websites. Here are some of the most relevant:
    </div>
    <div>
      -{" "}
      <TextLink href="https://x.com/TommasoRomano_/status/1414574481281101831">
        Untitled Nature Game
      </TextLink>
      : a prototype game that went viral with several millions of viewers across
      TikTok, Reddit and Twitter. It caught the attention of several investors
      and publishers.
    </div>
    <div>
      -{" "}
      <TextLink href="https://store.steampowered.com/app/966070/Relow/">
        RELOW
      </TextLink>
      : a solo-developed multiplayer game, released in 2020, showcased in
      several expositions like Milan Games Week 2019 and 2020, and Svilupparty
      2019 and 2020; attended and given several talks and interviews.
    </div>
    <div>
      -{" "}
      <TextLink href="https://store.steampowered.com/app/444490/POLYWAR/">
        POLYWAR
      </TextLink>
      : multiplayer game released in 2016 in collaboration with the publisher
      New Reality Games
    </div>
    <div>
      - Easy Insta Growth: 2020-2021 an Instagram AI automation, with hundreds
      of clients worldwide.
    </div>
    <div>- Freelance worked on several websites</div>
  </Experience>
);
