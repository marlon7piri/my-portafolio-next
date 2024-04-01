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
    tecnologia: "next",
    path: "/icons/react.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/javascript.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/html.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/css.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/mongo.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/node.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/figma.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/tailwindcss.svg",
    size: 160,
  },
  {
    tecnologia: "next",
    path: "/icons/express.svg",
    size: 160,
  },
];

const Skills = () => {
  return (
    <div className="section">
      <TheTitle texto="Lenguajes de Programacion y Tecnologías con las que trabajo" />

      <div
        className=" w-[90%]  h-full flex flex-wrap gap-20 
        justify-center  items-center"
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
