import type { GetStaticProps, NextPage } from "next";
import Contact from "../components/Contact";
import MetaHead from "../components/MetaHead";
import { getSortedPostsData } from "../lib/posts";
import { Post } from "../types/post";
import { RainbowText } from "../components/Rainbow";
import SocialIcon from "../components/social-icons";
import Footer from "../components/Footer";
import {
  expAmazon,
  expDrembitsStudio,
  expFamaLabs,
  expSmartBearEU,
  expStealthStartup,
} from "../components/experiences";

const Home: NextPage<{ allPostsData: Post[] }> = ({
  allPostsData,
}: {
  allPostsData: Post[];
}) => {
  const intro = (
    <div className="flex h-full h-screen w-full flex-col items-center justify-center space-y-1 text-center">
      <div className="mb-6 aspect-square w-full max-w-48 rounded-full">
        <div
          className="h-full w-full rounded-full bg-cover bg-center p-4"
          style={{
            backgroundImage: `url(/me/me_2023_05_final_square.jpg)`,
          }}
        >
          {/* <img
            src="/static/images/me/me_2023_05_final_square.jpg"
            className="h-full w-full rounded-full"
          /> */}
        </div>
      </div>
      <div className="mb-4 text-2xl font-semibold">
        Hey
        <span className="mx-1 inline-block origin-[70%_70%] animate-hey">
          👋
        </span>{" "}
        I&apos;m <RainbowText>Tommaso Romano&apos;</RainbowText>
      </div>
      <div className="text-lg font-semibold">
        a software engineer from Milan, Italy 🇮🇹
      </div>
      {/* <div className="text-md mb-4 font-semibold opacity-75">
          A dynamic team and engaging challenges that ignite my passion every day. I&apos;m always
          looking for new opportunities to learn and grow.
        </div> */}
      <div className="flex space-x-4 pt-4">
        <SocialIcon
          kind="mail"
          href={"mailto:info@tommasoromano.com"}
          size={6}
        />
        <SocialIcon
          kind="linkedin"
          href={"https://www.linkedin.com/in/tommaso-romano-developer/"}
          size={6}
        />
        <SocialIcon
          kind="twitter"
          href={"https://twitter.com/TommasoRomano_"}
          size={6}
        />
        <SocialIcon
          kind="resume"
          href={"https://tommasoromano.com/tommaso_romano_resume.pdf"}
          size={6}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white">
      <MetaHead />
      <section className="mx-auto max-w-screen-sm px-4">
        <main className="mb-auto">
          {intro}
          <div className="mb-4 text-2xl font-bold">Experience</div>
          <div className="flex w-full flex-col space-y-8">
            {expAmazon}
            {expFamaLabs}
            {expDrembitsStudio}
            {expSmartBearEU}
            {expStealthStartup}
          </div>
          {/* <div className="mt-8 mb-4 text-2xl font-bold">
            Recognitions */}
          {/* <br />
            <span className="text-sm font-normal">
              A selected list of recognitions
            </span> */}
          {/* </div>
          <div className="flex w-full flex-col space-y-8">
            {selectedRecognitions.map((e) => e)}
          </div> */}
        </main>

        <Footer />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
