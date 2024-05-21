import { NextPage } from "next";
import MetaHead from "../components/MetaHead";
import Footer from "../components/Footer";
import { Recognition } from "../components/Recognition";
import { recoAll } from "../components/recognitions";

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
            {recoAll.reverse().map((e) => e)}
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default Recognitions;
