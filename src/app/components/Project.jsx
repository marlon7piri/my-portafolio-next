"use client";

import React, { useRef } from "react";

import TheTitle from "./TheTitle";
import CardProyect from "./CardProyect";
import { dataProyect } from "../data/proyectos";



const Project = () => {
  return (
    <div className="section">
      <div className="flex mt-20">
        <TheTitle texto="Proyectos" />
      </div>
      <p className="max-w-[70%] text-2xl text-complementario mb-20">
        Aquí podrá ver mis proyectos trabajados y el aprendizaje en el proceso.
        Espero que les guste.
      </p>

      <div
        className="  w-[90%]  h-full flex flex-wrap gap-20 
      justify-center  items-center "
        id="proyects"
      >
        {dataProyect
          .map((tecno) => {
            return <CardProyect item={tecno} key={tecno.id} />;
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Project;
