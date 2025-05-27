"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 max-h-[180px] overflow-y-auto">
        <li>React</li>
        <li>Next.js</li>
        <li>C#</li>
        <li>.NET Core</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Tailwind CSS</li>
        <li>Rest API</li>
        <li>GraphQL</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>...</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master of Interaction Design</li>
        <li>University of Queensland</li>
      </ul>
    ),
  },
  {
    title: "Develop Tools",
    id: "developTools",
    content: (
      <ul className="list-disc pl-2">
        <li>GitHub</li>
        <li>Postman</li>
        <li>Lens</li>
        <li>Figma</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack software engineer with a passion for creating
            interactive and responsive web applications. with 3+ years of
            commercial experience in Agile environments, delivering scalable web
            and data-driven solutions across mining and insurance sectors.
            Skilled in React, Node.js, C#, .NET GraphQL, RESTAPIs,SQL,NoSQL and
            cloud-native practices including containerisation and CI/CD.
            Passionate about emergingtechnologies, rapid prototyping, and
            building secure, innovative systems that solve real-world problems.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("developTools")}
              active={tab === "developTools"}
            >
              {" "}
              Develop tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
