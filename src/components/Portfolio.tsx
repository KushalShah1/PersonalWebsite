import React from "react";
import { SectionContainer } from "./SectionContainer";
const ListItem:React.FC<{name:string, checked: boolean, onClick: Function}> = ({name, checked, onClick}) => {
    return (
      <button
        className={`md:border-l-4 md:border-b-0 border-b-4 ${
          checked
            ? "border-t-green bg-t-green-hover text-t-green"
            : "border-t-ivory-hover"
        } hover:bg-t-green-hover px-6 py-2 text-lg text-left`}
        onClick={() => onClick()}
      >
        {name}
      </button>
    );
}

const PositionSummary:React.FC<{
    title: string,
    company: string,
    time: string,
    bulletPoints: string[],
    color:string,
}> = (props) => {
    return (
        <div className="flex flex-col pb-8">
            <span className="font-semibold text-xl">{props.title} <span className={props.color}>@ {props.company}</span></span>
            <span>{props.time}</span>
            <ul className={`pt-4 pl-4 flex flex-col list-outside list-disc`}>
                {props.bulletPoints.map(point => (
                    <li className={`${props.color}`}><span className="text-t-black">{point}</span></li>
                ))}
            </ul>
        </div>
    )
}
type Experience = "a" | "p" | "s" | "u" | "v" | "m" | "t";
const RenderPortfolio: React.FC<{activeKey: Experience}> = ({activeKey}) => {
    const content: Record<Experience, any> = {
      a: {
        title: "Software Engineering Intern",
        company: "Amazon",
        time: "May 2021 - August 2021",
        color: "text-orange-500",
        bulletPoints: [
          "Designed 2 backend lambda function to validate user edited rules engine configuration files for Sub Same Day delivery.",
          "Introduced validation into existing CI/CD pipelines and codebases to improve stability and speed up developer workflows.",
          "Collaborated with 3 software engineers to develop a frontend GUI to service the validation backend server.",
        ],
      },
      p: [{
        title: "Backend Software Lead",
        company: "Pop Social",
        time: "June 2021 - May 2022",
        color: "text-sky-400",
        bulletPoints: [
          "Conceived 2 new software products that enabled students to connect with each other via personalized meetup locations.",
          "Orchestrated the conversion of 9 microservices from functional JavaScript to modular object-oriented TypeScript.",
          "Implemented a system to change backend configurations via feature flags and a rule’s engine to increase modularity.",
        ],
      }, {
        title: "Backend Software Developer",
        company: "Pop Social",
        time: "August 2020 - June 2021",
        color: "text-sky-400",
        bulletPoints: [
          "Automated data collection and aggregation pipelines with Kafka and Google Big Query to increase data collection by 47%.",
          "Constructed a containerized Elasticsearch cluster to facilitate a new matching algorithm to improve user matches by 20%.",
          "Overhauled over 30 API endpoints within 9 different Express.js servers to service the frontend application with data.",
        ],
      }],
      s: {
        title: "Software Engineer",
        company: "Stripe",
        time: "July 2022 - Present",
        color: "text-violet-700",
        bulletPoints: [
          "Created multiple hosted onboarding flows for Stripe Connected Accounts, where Stripe would onboard users on behalf of our marketplace customers.",
          "Reduced time to onboarding by ~5 seconds and increased onboarding conversion by 2% by introducing address autocomplete.",
          "Managed a UI system migration of our onboarding engine to create an embeddable onboarding flow for our platform customers.",
        ],
      },
      u: {
        title: "Student",
        company: "University of Texas at Austin",
        time: "August 2018 - May 2022",
        color: "text-amber-600",
        bulletPoints: [
          "Recieved a Bachelors of Science in Electrical Engineering",
          "Maintained a GPA of 3.87",
        ],
      },
      v: {
        title: "Technical Product Manager Intern",
        company: "Visa",
        time: "May 2020 - July 2020",
        color: "text-blue-700",
        bulletPoints: [
          "Designed high visibility infrastructure that facilitated the templatization of Dockerfiles to improve productivity by 3-6 hours.",
          "Engineered a marketplace for developers to share Dockerfiles across teams and companywide to reduce recreation by 80%.",
          "Devised tools to enable container users to edit and update Docker images through a fast and secure self-service portal.",
        ],
      },
      m: {
        title: "Founder",
        company: "Miner",
        time: "May 2020 - May 2021",
        color: "text-cyan-500",
        bulletPoints: [
          "Contrived an app to give users real time investment opportunities to educate them about the stock market via action.",
          "Constructed a frontend app in React Native, a backend using Node.js with MongoDB, and multiple trading bots using Python.",
        ],
      },
      t: {
        title: "Cofounder/CEO",
        company: "tuktuk",
        time: "Novemeber 2019 - April 2020",
        color: "text-green-400",
        bulletPoints: [
          "Launched a mobile carpooling platform startup that allows any user to post and join carpools through an app.",
          "Designed the frontend using React Native while the backend used AWS Lambda, RDS, Cognito, and API Gateway.",
        ],
      },
    };

    if (Array.isArray(content[activeKey])) {
      return (
        <>
        {/*@ts-expect-error*/}
          {content[activeKey].map((props) => {
            return <PositionSummary {...props} />;
          })}
        </>
      );
    } else {
      return <PositionSummary {...content[activeKey]} />;
    }
}
export const Portfolio: React.FC = () => {
    const DEFAULT = {s: false, a:false, v:false, p:false, m: false, t:false,u:false}
    const [activeKey, setActive] = React.useState<Experience>('s');

    return (
      <SectionContainer
        id="portfolio"
        badge="🗂️ Portfolio"
        title="What I've Done"
      >
        <div className="pt-2.5 pb-14">
        I am a recent graduate from UT Austin with a degree in Electrical and
        Computer Engineering with a focus in Data Science. I have a passion for
        entrepreneurship and have started several startups during my time in
        college, including tuktuk, a ridesharing marketplace, and a quant
        trading startup. My professional experience includes internships at Visa
        as a TPM, Pop Social as a backend developer, and Amazon on their Sub
        Same Day shipping team. I currently work as a software developer at
        Stripe, where I have led multiple projects and continue to develop my
        skills in building scalable systems and software design.
        </div>
        
        <div className="md:grid md:grid-cols-3 md:grid-rows-1 md:gap-24">
          <div className="flex md:flex-col flex-row whitespace-nowrap overflow-x-auto mb-8">
            <ListItem
              name="Stripe"
              checked={activeKey === "s"}
              onClick={() => setActive("s")}
            />
            <ListItem
              name="Amazon"
              checked={activeKey === "a"}
              onClick={() => setActive("a")}
            />
            <ListItem
              name="Visa"
              checked={activeKey === "v"}
              onClick={() => setActive("v")}
            />
            <ListItem
              name="Pop Social"
              checked={activeKey === "p"}
              onClick={() => setActive("p")}
            />
            <ListItem
              name="Miner"
              checked={activeKey === "m"}
              onClick={() => setActive("m")}
            />
            <ListItem
              name="tuktuk"
              checked={activeKey === "t"}
              onClick={() => setActive("t")}
            />
            <ListItem
              name="UT Austin"
              checked={activeKey === "u"}
              onClick={() => setActive("u")}
            />
          </div>
          <div className="col-span-2">
            <RenderPortfolio activeKey={activeKey} />
          </div>
        </div>
      </SectionContainer>
    );
}