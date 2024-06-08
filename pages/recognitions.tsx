import { NextPage } from "next";
import MetaHead from "../components/MetaHead";
import Footer from "../components/Footer";
import { Recognition } from "../components/Recognition";
import { recoAll } from "../data/recognitions";
import { TextLink } from "../components/Link";

const Recognitions: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <MetaHead
        title="Recognitions | Tommaso Romano"
        ogtitle="Recognitions made by Tommaso Romano"
        url="https://tommasoromano.com/recognitions"
      />
      <section className="mx-auto max-w-screen-sm px-4">
        <main className="mb-auto">
          <div className="pt-8 mb-4 text-2xl font-bold">
            <div className="text-sm">
              <TextLink href="/">{"< back"}</TextLink>
            </div>
            All Recognitions
          </div>
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
