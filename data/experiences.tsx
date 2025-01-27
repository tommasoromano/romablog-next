import { Experience } from "../components/Experience";
import { TextLink } from "../components/Link";

export const expStealthStartup = (
  <Experience
    company="Stealth Startup"
    logo="/linkedin/stealth_logo.jpeg"
    position="Software Engineer"
    where=""
    startDate="Sept. 2015"
    endDate="Jan. 2022"
    duration="6 years and 5 months"
    techs="Unity, CSharp, Python, React"
    images={[
      { src: "/me/svp21.PNG", descr: "Tommaso Romano SVP" },
      { src: "/me/mgw19.JPG", descr: "Tommaso Romano MGW" },
      { src: "/others/untitle-nature-game.gif", descr: "" },
      { src: "/others/relow.jpg", descr: "" },
    ]}
  >
    <div>
      Developed several commercial projects from videogames to AI automations
      and websites. Here are some of the most relevant:
    </div>
    <div>
      -{" "}
      <TextLink href="https://x.com/TommasoRomano_/status/1414574481281101831">
        Untitled Nature Game
      </TextLink>
      : a prototype game that went viral with several millions of views across
      TikTok, Reddit and Twitter. It got offers from several investors and
      publishers.
    </div>
    <div>
      -{" "}
      <TextLink href="https://store.steampowered.com/app/966070/Relow/">
        RELOW
      </TextLink>
      : a solo-developed multiplayer game, released in 2020 with 5k+ sales,
      showcased in several expositions like Milan Games Week 2019 and 2020, and
      Svilupparty 2019 and 2020; attended and given several talks and
      interviews.
    </div>
    <div>
      -{" "}
      <TextLink href="https://store.steampowered.com/app/444490/POLYWAR/">
        POLYWAR
      </TextLink>
      : multiplayer game released in 2016 with 200k+ sales in collaboration with
      the publisher New Reality Games
    </div>
    <div>
      - Easy Insta Growth: 2020-2021 an Instagram AI automation, with hundreds
      of clients worldwide.
    </div>
    <div>- Freelance worked on several websites</div>
  </Experience>
);
export const expDrembitsStudio = (
  <Experience
    company="Drembits Studio"
    logo="/linkedin/dreambits_logo.jpeg"
    position="Founding Software Engineer"
    where=""
    startDate="May 2021"
    endDate="Nov. 2022"
    duration="1 year and 6 months"
    techs="Unity, CSharp, PhotonEngine, Python"
    images={[
      { src: "/me/gc_2022.JPG", descr: "Tommaso Romano GamesCom 2022" },
      {
        src: "/me/gcparis_2022.jpeg",
        descr: "Tommaso Romano Game Connection Paris 2022",
      },
      { src: "/me/bgf_0.jpg", descr: "Tommaso Romano Bologna Game Farm 2022" },
    ]}
  >
    <div>
      Founding team. Worked on{" "}
      <TextLink href="https://www.dreambitsstudio.com/">War of Wheels</TextLink>
      : a multiplayer game about medieval-punk fighting cars.
    </div>
    <div>
      - Winner of <TextLink href="https://bolognagamefarm.com/">BGF</TextLink>:
      funding of 120k and starup accelerator; participated in several
      international events (like GamesCom Cologne, GamesConnection Paris and GDC
      San Francisco) while pitching to publishers and investors.
    </div>
    <div>
      - Helped the growth of the team from 5 to 20 employees; proactively leaded
      the team for the design and implementation of the multiplayer and
      networking system.
    </div>
  </Experience>
);
export const expSmartBearEU = (
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
      data platform in healthcare funded by the European Union and in
      collaborations with top European Universities; it offer evidence-based
      interventions thanks to predictive analytics.
    </div>
    <div>
      - Built modular and cloud-optimized pipelines for predictive analysis,
      data imputation and visualization while protecting user health data
      anonymity.
    </div>
  </Experience>
);
export const expFamaLabs = (
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
      - Took ownership and proactively guided the development of the modular
      survey engine and compiler, and designed UI library for MAP (Medical
      Adaptive Platform): a dashboard built for doctors to easily manage CRF and
      more.
    </div>
  </Experience>
);
export const expAmazon = (
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
      { src: "/amazon/robotics.jpeg", descr: "" },
      { src: "/amazon/cup.jpeg", descr: "" },
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
      for the operators UI, to speed up the development pipeline, and to enable
      external testing.
    </div>
    <div>
      - Took ownership of the project and worked side by side with stakeholders;
      suggested and guided the refactoring the whole team data schema
    </div>
    <div>
      - Winner the Amazon Robotics internal hackathon with a project about
      streaming and remote controlling the Universal Robots
    </div>
  </Experience>
);
export const expHumanHall = (
  <Experience
    company="Human Hall"
    logo="/linkedin/human_hall_logo.jpeg"
    position="Senior Data Scientist"
    where=""
    startDate="March 2024"
    endDate="Present"
    duration="8 Months"
    techs="Python, Hugging Face, Ollama, Unsloth, AWS"
    images={[]}
  >
    <div>
      Working with a multidisciplinary team on language detection;{" "}
      <TextLink href="https://www.linkedin.com/company/human-hall/">
        Human Hall
      </TextLink>{" "}
      is backed by European Union and MUSA, with several partners like Deloitte
    </div>
    <div>
      - Co-directed the development of pipelines for fine-tune LLMs and
      synthetic data.
    </div>
  </Experience>
);
export const expAmazonWebServices = (
  <Experience
    company="Amazon Web Services (AWS)"
    logo="/linkedin/aws.jpeg"
    position="Software Developer Engineer"
    where="Berlin, Germany"
    startDate="Nov. 2024"
    endDate="Present"
    duration=""
    techs=""
    images={[]}
  >
    <div>AWS Billing. </div>
<div>- Developing solutions for management and automation of pricing offerings for government customers or large enterprises (e.g. major FAANGs), and public customers. 
</div><div>
- Reduced by 80% the time needed for PMs to review offers on continuously expanding products, services, partitions and regions.
</div><div>
- Designing architectures to audit and reduce losses across all AWS services.
</div>
  </Experience>
);
