"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CardProyect = ({ item, index }) => {

  const scrollRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      /* viewport={{ root: scrollRef }} */
      ref={scrollRef}
      className="card_proyectos  flex flex-col justify-between"
      key={item.id}
    >   <Link
      href={`/detalles/${item.id}`}

    >
        <div className="w-full h-full relative">
          <Image
            src={item.image}
            width={400}
            height={0}
            className="object-cover w-[400px] h-[200px]"
            alt={`Foto de ${item.nombre}`}
          />
          <div className="absolute top-1 right-2 bg-secundario  rounded-full p-2  w-16 h-16 flex justify-center items-center ">
            <span className=" text-4xl text-complementario font-semibold">{index}</span>
          </div>
        </div>


        <div className="flex flex-col gap-2 p-4 justify-center items-center">
          <span className="text-complementario font-light text-[18px]  block mt-4">
            {item.nombre}
          </span>




        </div>
      </Link>
    </motion.div>
  );
};

export default CardProyect;
