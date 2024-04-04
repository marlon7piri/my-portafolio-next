"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dataProyect } from "@/app/components/Project";
import Image from "next/image";
import TheTitle from "@/app/components/TheTitle";
import { PrimaryButton } from "@/app/components/PrimaryButton";

const Detalles = ({ params }) => {
  const [proyecto, setProyecto] = useState([]);
  const [loading, setLoading] = useState(false);
  const idProyecto = params.id;

  useEffect(() => {
    setLoading(true);
    const proyectfilter = dataProyect.filter((item) => {
      return item.id === parseInt(idProyecto);
    });
    setProyecto(proyectfilter);
    setLoading(false);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-8">
      <h1 className="text-blanco text-5xl"></h1>
      <TheTitle
        texto={` Detalles del Proyecto ${proyecto.map((item) => item.nombre)}`}
      />
      <PrimaryButton />

      <div className="w-full grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {proyecto.map((item) => {
          return (
            <>
              <div className=" w-full h-full p-8" key={item.description}>
                <Image
                  src={item.image}
                  width={800}
                  height={800}
                  
                  
                  style={{
                    borderRadius: 20,
                    objectFit: "cover",
                   
                   
                  }}
                  alt={`Foto de ${item.nombre}`}
                />

                <PrimaryButton islink={item.ruta} />
              </div>
              <div className="w-full mt-4 p-8 ">
                <span className="md:max-w-[90%] lg:w-max-[600px] text-complementario text-xl">
                  {item.description}
                </span>
                <div className="mt-10">
                  <span className="text-complementario text-2xl">
                    Tecnologias Utilizadas:
                  </span>
                  <div className="w-max grid grid-cols-4 gap-4 mt-4">
                    {item.tecnologias.map((element) => {
                      return (
                        <ul className="card_tecnologias">
                          <Image
                            src={element}
                            width={60}
                            height={60}
                            objectFit="cover"
                            alt={`logo tecnologias`}
                          />
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Detalles;
