"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/detalles/[id]/proyect.details.module.css";
import Image from "next/image";
import TheTitle from "@/app/components/TheTitle";
import { dataProyect } from "../../../components/componentsEnglish/ProjectEnglish";
import { PrimaryButtonEnglish } from "../../../components/componentsEnglish/PrimaryButtonEnglish";

const Detalles = ({ params }) => {
  const [proyecto, setProyecto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rutaImageSelected, setRutaImageSelected] = useState("");
  const idProyecto = params.id;

  useEffect(() => {
    setLoading(true);
    const proyectfilter = dataProyect.filter((item) => {
      return item.id === parseInt(idProyecto);
    });

    setProyecto(proyectfilter);
    setLoading(false);
  }, [idProyecto]);

  const handlerImage = (ruta) => {
    setRutaImageSelected(ruta);
  };

  return (
    <div className="w-full text-complementario">
      <div className="text-center">
        <TheTitle texto={`${proyecto.map((item) => item.nombre)}`} medium />
      </div>
      <div className={style.container_buttons}>
        <PrimaryButtonEnglish />
        <PrimaryButtonEnglish islink={proyecto.map((item) => item.ruta)} />
        <a
          href={proyecto.map((item) => item.github)}
          target="_blank"
          className="w-[200px] h-[50px] text-complementario p-3 rounded-md flex justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario z-50"
        >
          {" "}
          <ion-icon name="logo-github"></ion-icon>
          <span className="ml-2">Code</span>
        </a>
      </div>

      <div className={style.container_details}>
        <div>
          <h2 className="uppercase font-bold">technologies</h2>
          <div className={style.tecnology_container}>
            {proyecto.map((item) => {
              return item.tecnologias.map((tecno) => {
                return (
                  <Image
                    src={tecno}
                    width={44}
                    height={44}
                    className={style.tecnology}
                  />
                );
              });
            })}
          </div>

          <div className={style.container_description}>
            <h2 className="uppercase mb-4 font-bold">Description</h2>
            {proyecto.map((item) => {
              return <p className="text-complementario">{item.description}</p>;
            })}
          </div>

          <div className={style.logros_container}>
            <h2 className="uppercase mb-4 font-bold">Achievements</h2>
            {proyecto.map((item) => {
              return item.logros.map((logro) => {
                return (
                  <ul>
                    <li>{logro}</li>
                  </ul>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
