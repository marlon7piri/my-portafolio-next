"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/detalles/[id]/proyect.details.module.css";
import Image from "next/image";
import TheTitle from "@/app/components/TheTitle";
import { dataProyect } from "../../../components/componentsEnglish/ProjectEnglish";
import { PrimaryButtonEnglish } from "../../../components/componentsEnglish/PrimaryButtonEnglish";
import ModalVideo from "@/app/components/ModalVideo";
import { dataProyectEnglish } from "@/app/data/proyectos";

const Detalles = ({ params }) => {
  const [proyecto, setProyecto] = useState([]);
  const [urlvideo, setUrlVideo] = useState(null)
  const [openmodal, setOpenModal] = useState(false)

  const [loading, setLoading] = useState(false);
  const [rutaImageSelected, setRutaImageSelected] = useState("");
  const idProyecto = params.id;

  useEffect(() => {
    setLoading(true);
    const proyectfilter = dataProyectEnglish.filter((item) => {

      if (item.id === parseInt(idProyecto)) {
        setUrlVideo(item.video)
        return item
      }

    });


    setProyecto(proyectfilter);
    setLoading(false);
  }, [idProyecto]);

  const handlerImage = (ruta) => {
    setRutaImageSelected(ruta);
  };


  const openModal = () => {
    setOpenModal(!openmodal)
  }

  return (
    <div className="w-full text-complementario">
      <div className="text-center">
        <TheTitle texto={`${proyecto.map((item) => item.nombre)}`} medium />
      </div>
      <div className={style.container_buttons}>
        <PrimaryButtonEnglish />
        <PrimaryButtonEnglish islink={proyecto.map((item) => item.ruta)} />
        
        <button onClick={() => openModal()}  className=" w-[100px] h-[50px] text-red bg-complementario p-3 rounded-md flex  justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario text-2xl "> <ion-icon name="logo-youtube"/></button>
        <a
          href={proyecto.map((item) => item.github)}
          target="_blank"
          className="w-[100px] h-[50px] text-complementario p-3 rounded-md flex justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario z-50  text-2xl"
        >
          {" "}
          <ion-icon name="logo-github" />
          
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
          {openmodal && <ModalVideo url={urlvideo} onClick={openModal} />}
        </div>
      </div>
    </div>
  );
};

export default Detalles;
