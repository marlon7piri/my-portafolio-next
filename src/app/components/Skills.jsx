import React from "react";
import Image from "next/image";
import TheTitle from "./TheTitle";
const tecnologies = [
  {
    tecnologia: "next",
    path: "/icons/next.svg",
    size: 160,
  },
  {
    tecnologia: "react",
    path: "/icons/react.svg",
    size: 160,
  },
  {
    tecnologia: "javascript",
    path: "/icons/javascript.svg",
    size: 160,
  },
  {
    tecnologia: "html",
    path: "/icons/html.svg",
    size: 160,
  },
  {
    tecnologia: "css",
    path: "/icons/css.svg",
    size: 160,
  },
  {
    tecnologia: "mongo",
    path: "/icons/mongo.svg",
    size: 160,
  },
  {
    tecnologia: "node",
    path: "/icons/node.svg",
    size: 160,
  },
  {
    tecnologia: "mysql",
    path: "/icons/mysql.svg",
    size: 160,
  },
  {
    tecnologia: "java",
    path: "/icons/java.svg",
    size: 160,
  },
  {
    tecnologia: "aws",
    path: "/icons/aws.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/git.svg",
    size: 160,
  },
  {
    tecnologia: "figma",
    path: "/icons/figma.svg",
    size: 160,
  },
  {
    tecnologia: "tailwindcss",
    path: "/icons/tailwindcss.svg",
    size: 160,
  },
  {
    tecnologia: "express",
    path: "/icons/express.svg",
    size: 160,
  },
];

const Skills = () => {
  return (
    <div className="section">
      <TheTitle texto="Lenguajes de Programación y Tecnologías con las que trabajo"  />

      <div
        className=" w-[90%]  h-full flex flex-wrap gap-20 
        justify-center  items-center " id='skills'
      >
        {tecnologies.map((tecno) => {
          return (
            <div
              className="card_skills"
              key={tecno.path}
            >
              <Image src={tecno.path} width={tecno.size} height={tecno.size} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
