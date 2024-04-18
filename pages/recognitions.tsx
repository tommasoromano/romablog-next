import { NextPage } from "next";
import MetaHead from "../components/MetaHead";
import Footer from "../components/Footer";
import { Recognition } from "../components/Recognition";

const Recognitions: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <MetaHead
        title="Recognitions | Tommaso Romanò"
        ogtitle="Recognitions made by Tommaso Romanò"
        description="A selected list of recognitions I've received over the years including news, articles, interviews, awards, expositions, events, talks, courses and achievements."
        url="https://tommasoromano.com/recognitions"
      />
      <section className="mx-auto max-w-screen-sm px-4">
        <main className="mb-auto">
          <div className="pt-8 mb-4 text-2xl font-bold">Recognitions</div>
          <div className="flex w-full flex-col space-y-8">
            {allRecognitions.map((e) => e)}
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default Recognitions;

export const rcnTop10023 = (
  <Recognition
    title="Top 100 in the Italian game industry (2023)"
    link="https://startupitalia.eu/le-100-e-piu-persone-da-seguire-nel-mondo-dei-videogiochi-in-italia-lista-in-aggiornamento"
    tag="Award"
    when="16 July 2023"
    images={[]}
  >
    I&apos;ve been nominated in this list by StartupItalia that consists of
    professional allowing italian videogame industry to shine in the world of
    creativity.
  </Recognition>
);

export const rcnUsc = (
  <Recognition
    title="University Startup Challenge 2023 Finalist"
    link="https://www.linkedin.com/posts/tommaso-romano-developer_startup-innovation-energy-activity-7050766312649682945-Dj1B?utm_source=share&utm_medium=member_desktop"
    tag="Startup Hackathon"
    when="24-31 March 2023"
    images={[
      {
        descr: "University Startup Challenge 2023 Finalist",
        src: "/me/usc2023.jpeg",
      },
    ]}
  >
    {/* My team and I have been selected as finalist in the University Startup Challenge 2023: focused
    on energy and climate and organized by Politecnico di Milano and Bocconi, we had to create a
    startup, prototype and pitch deck in 7 days. Attended several workshops and talks, been selected
    as finalist and pitched in front of a jury of investors and experts, as well as a crowded
    auditorium of students and entrepreneurs */}
    Organized by Politecnico di Milano and Bocconi, it consists in pitching to
    investors a startup idea focused on energy and climate, after a week of
    workshops and talks.
  </Recognition>
);

export const rcnParis22 = (
  <Recognition
    title="GameConnection Paris 2022"
    link="https://www.linkedin.com/posts/tommaso-roman%C3%B2-developer_game-connection-europe-was-great-it-was-activity-6995741933381824512-yw6X?utm_source=share&utm_medium=member_desktop"
    tag="Event"
    when="3-4 Nov. 2022"
    images={[
      {
        descr: "",
        src: "/me/gcparis_2022.jpeg",
      },
    ]}
  >
    I&apos;ve took part at the Game Connection Paris: the deal making event for
    the video game industry. Game Connection is the international event where
    developers, publishers, distributors and service providers come to find new
    partners and clients.
  </Recognition>
);
export const rcnGC22 = (
  <Recognition
    title="GamesCom 2022"
    link="https://www.linkedin.com/posts/tommaso-roman%C3%B2-developer_gamescom-business-pitching-activity-6970629214131605505-0xqz"
    tag="Event"
    when="23-25 Aug. 2023"
    images={[
      {
        descr: "",
        src: "/me/gc_2022.JPG",
      },
    ]}
  >
    I&apos;ve represented Italy in the world biggest game business event:
    GamesCom in Cologne, Germany. Pitched the project War of Wheels, met
    business partners and shared ideas with developers all over the world.
    Italian pavilion organized by IIDEA, Italian Trade Agency and Ministry of
    Foreign Affairs.
  </Recognition>
);

export const rcnTop10022 = (
  <Recognition
    title="Top 100 in the Italian game industry (2022)"
    link="https://startupitalia.eu/97380-20220717-163-persone-che-contano-e-da-seguire-nel-mondo-dei-videogiochi-in-italia"
    tag="Award"
    when="17 July 2022"
    images={[]}
  >
    I&apos;ve been nominated in this list by StartupItalia that consists of
    professional allowing italian videogame industry to shine in the world of
    creativity.
  </Recognition>
);

export const rcnFP22 = (
  <Recognition
    title="First Playable 2022"
    link="https://www.linkedin.com/posts/tommaso-roman%C3%B2-developer_gamescom-business-pitching-activity-6970629214131605505-0xqz"
    tag="Event"
    when="6-8 July 2023"
    images={[
      {
        descr: "",
        src: "/me/fp_2022.JPG",
      },
    ]}
  >
    I&apos;ve brought the project War of Wheels to Firts Playable, which is
    Italy&apos;s leading international event about game business. Coaching,
    talking and pitching to international publishers and investment founds.
  </Recognition>
);
export const rcnBGF = (
  <Recognition
    title="Bologna Game Factory"
    link="https://www.linkedin.com/posts/tommaso-roman%C3%B2-developer_gamescom-business-pitching-activity-6970629214131605505-0xqz"
    tag="Founding and Accelerator"
    when="Dec 2021 - July 2022"
    images={[
      {
        descr: "",
        src: "/me/bgf_0.jpg",
      },
    ]}
  >
    Winners of BGF with GladiatorWheels. Bologna Game Farm is a funding and
    accelerator initiative dedicated to innovative startups for the development
    of videogames. Lead by Ivan Venturi, Luca Marchetti, Gianluca Marani.
    Promoted by Regione Emilia Romagna, Comune di Bologna, in collaboration with
    IIDEA.
  </Recognition>
);
export const rcnTop10021 = (
  <Recognition
    title="Top 100 in the Italian game industry (2021)"
    link="https://startupitalia.eu/90664-20210826-142-persone-che-contano-e-da-seguire-nel-mondo-dei-videogiochi-in-italia"
    tag="Award"
    when="1 Sep. 2021"
    images={[]}
  >
    I&apos;ve been nominated in this list by StartupItalia that consists of
    professional allowing italian videogame industry to shine in the world of
    creativity.
  </Recognition>
);

export const rcnSVP21 = (
  <Recognition
    title="Social Media for Game Developers"
    link="https://www.linkedin.com/posts/tommaso-roman%C3%B2-developer_gamescom-business-pitching-activity-6970629214131605505-0xqz"
    tag="Speaker"
    when="10 July 2021"
    images={[
      {
        descr: "",
        src: "/me/svp21.PNG",
      },
    ]}
  >
    Been invited to speak about Social Medias for Game Developers at Svilupparty
    2021: Twitter, YouTube, Facebook, Reddit and TikTok to boost GameDev
    explosure.
  </Recognition>
);
export const rcnMGWXRT = (
  <Recognition
    title="One Man Company"
    link=""
    tag="Interview"
    when="29 Nov. 2020"
    images={[
      {
        descr: "",
        src: "/me/mgwx_rt.JPG",
      },
    ]}
  >
    Emilio Cozzi, with Fortuna Imperatore and Johnny Lonack. Pros and cons of
    working as a Solo-Game-Developer
  </Recognition>
);
export const rcnMGWX = (
  <Recognition
    title="Milan Games Week X"
    link=""
    tag="Event"
    when="27 Nov. 2020"
    images={[
      {
        descr: "",
        src: "/me/mgwx.JPG",
      },
    ]}
  >
    Showcased RELOW at Milan Games Week X on Twitch (online due to the
    pandemic).
  </Recognition>
);
export const rcnSVP20 = (
  <Recognition
    title="The making of RELOW"
    link=""
    tag="Speaker and Exposition"
    when="6 Sep. 2020"
    images={[
      {
        descr: "",
        src: "/me/svp20.PNG",
      },
    ]}
  >
    Post-mortem talk at Svilupparty 2020 of the multiplayer game RELOW.
  </Recognition>
);
export const rcnMGW19 = (
  <Recognition
    title="Milan Games Week 2019"
    link=""
    tag="Exposition"
    when="27-28 Sep. 2019"
    images={[
      {
        descr: "",
        src: "/me/mgw19.JPG",
      },
    ]}
  >
    Showcased RELOW at Milan Games Week 2019.
  </Recognition>
);
export const rcnGJ = (
  <Recognition
    title="Green entrepreneurship"
    link="https://www.jaworldwide.org/"
    tag="Accelerator"
    when="Feb. 2018 - May 2018"
    images={[]}
  >
    Green Jobs is a program of entrepreneurial education in the environmental
    field, which integrates the methodology of the company JuniorAchievement
    with training meetings aimed at green entrepreneurship by InVento Innovation
    Lab.
  </Recognition>
);

export const selectedRecognitions = [
  rcnUsc,
  rcnParis22,
  rcnGC22,
  rcnBGF,
  rcnSVP21,
];

export const allRecognitions = [
  rcnTop10023,
  rcnUsc,
  rcnParis22,
  rcnGC22,
  rcnTop10022,
  rcnFP22,
  rcnBGF,
  rcnTop10021,
  rcnSVP21,
  rcnMGWXRT,
  rcnMGWX,
  rcnSVP20,
  rcnMGW19,
  rcnGJ,
];
