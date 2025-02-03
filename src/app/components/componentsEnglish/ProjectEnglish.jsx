"use client";

import React from "react";

import TheTitle from "../../components/TheTitle";
import { dataProyectEnglish } from "../../data/proyectos";
import CardProyectEnglish from './CardProyectEnglish'



const ProjectEnglish = () => {
  return (
    <div className="section">
      <div className="flex mt-20">
        <TheTitle texto="Projects" />
      </div>
      <p className="max-w-[70%] text-2xl text-complementario mb-20">
        Here you will be able to see my projects and the learning process
        involved. I hope you like it.
      </p>

      <div
        className="  w-[90%]  h-full flex flex-wrap gap-20 
      justify-center  items-center "
        id="proyects_english"
      >
        {dataProyectEnglish
          .map((tecno, index) => {
            return <CardProyectEnglish item={tecno} key={tecno.id} index={index + 1} />;
          })
          }
      </div>
    </div>
  );
};

export default ProjectEnglish;
