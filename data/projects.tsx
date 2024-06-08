import { Recognition } from "../components/Recognition";
import { TextLink } from "../components/Link";

export const proj0 = (
  <Recognition
    title="SWAGVote"
    link=""
    tag=""
    when="October 2021 - January 2022"
    techs="Java, SQLite, Maven, Eclipse, JavaFX"
    images={[]}
  >
    <div>
      A University project about creating a system for online voting: creating,
      managing and counting electoral votes. Engineering the architecture and
      reusable software using diagrams like Use Cases, Class Diagram, Sequence
      Diagram, UML, FSM.
    </div>
  </Recognition>
);
export const proj1 = (
  <Recognition
    title="pyTradingBot"
    link=""
    tag=""
    when="December 2021 - present"
    techs="Python, PyTorch, Keras, stable-baselines, OpenAI Gym, TAlib and others"
    images={[]}
  >
    <div>
      A library of functions to test trading strategies using several Machine
      Learning and Reinforcement Learning techniques, and Telegram API
    </div>
  </Recognition>
);
export const proj2 = (
  <Recognition
    title="Business Process Intelligence"
    link=""
    tag=""
    when="June 2023 - July 2023"
    techs="Python, pm4py, seaborn"
    images={[]}
  >
    <div>
      A Univerity project about data mining, process mining, variant analysis,
      and process discovery using a dataset of several millions of events and
      cases of a Netherland company.
    </div>
  </Recognition>
);
export const proj3 = (
  <Recognition
    title="Distributed Systems"
    link=""
    tag=""
    when="June 2023 - July 2023"
    techs="Java, Google Protocol Buffers, gRPC, MQTT, Jersey JAXB for REST API"
    images={[]}
  >
    <div>
      A University project about manage independent robots of a city using
      distributed algorithms and communication technologies for sensor data
      streaming.
    </div>
  </Recognition>
);
export const proj4 = (
  <Recognition
    title="BuddyPay"
    link="https://buddypay.tommasoromano.com"
    tag=""
    when="May 2024 - June 2024"
    techs="AWS Cloud: API Gateway, Cognito, Lambda, SQS, DynamoDB, Next.js"
    images={[
      {
        src: "/others/schema_high.jpeg",
        descr: "",
      },
      {
        src: "/others/home_demo.png",
        descr: "",
      },
    ]}
  >
    <div>
      A university project about developing microservices using the API gateway
      architecture in order to support load balancing, fault tolerance, and
      security.
    </div>
  </Recognition>
);

export const projAll = [proj0, proj1, proj2, proj3, proj4];
