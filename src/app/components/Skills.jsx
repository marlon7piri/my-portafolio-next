import React from "react";
import Image from "next/image";
import TheTitle from "./TheTitle";
const tecnologies = [
  {
    tecnologia: "next",
    path: "/icons/next.svg",
    size: 90,
  },
  {
    tecnologia: "react",
    path: "/icons/react.svg",
    size: 90,
  },
  {
    tecnologia: "javascript",
    path: "/icons/javascript.svg",
    size: 90,
  },
  {
    tecnologia: "html",
    path: "/icons/html.svg",
    size: 100,
  },
  {
    tecnologia: "css",
    path: "/icons/css.svg",
    size: 100,
  },
  {
    tecnologia: "mongo",
    path: "/icons/mongo.svg",
    size: 80,
  },
  {
    tecnologia: "node",
    path: "/icons/node.svg",
    size: 80,
  },
  {
    tecnologia: "mysql",
    path: "/icons/mysql.svg",
    size: 75,
  },
  {
    tecnologia: "java",
    path: "/icons/java.svg",
    size: 80,
  },
  {
    tecnologia: "aws",
    path: "/icons/aws.svg",
    size: 50,
  },
  {
    tecnologia: "next",
    path: "/icons/git.svg",
    size: 80,
  },
  {
    tecnologia: "figma",
    path: "/icons/figma.svg",
    size: 80,
  },
  {
    tecnologia: "tailwindcss",
    path: "/icons/tailwindcss.svg",
    size: 95,
  },
  {
    tecnologia: "express",
    path: "/icons/express.svg",
    size: 90,
  },
];

const Skills = () => {
  return (
    <div className="section">
      <TheTitle texto="Habilidades" />

      <div
        className=" w-[90%]  h-full flex flex-wrap gap-20 
        justify-center  items-center "
        id="skills"
      >
        {tecnologies.map((tecno) => {
          return (
            <div className="card_skills" key={tecno.path}>
              <Image src={tecno.path} width={160} height={160} />
              <p className={tecno.size < 70 ? "text-orange mt-2" : "text-green mt-2"}>
                {tecno.size}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
