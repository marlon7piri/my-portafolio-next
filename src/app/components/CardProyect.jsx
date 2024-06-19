"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CardProyect = ({ item }) => {

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
    >
      <Image
        src={item.image}
        width={400}
        height={400}
        objectFit="cover"
        alt={`Foto de ${item.nombre}`}
      />

      <div className="flex flex-col gap-2 p-4 justify-center items-center">
        <span className="text-complementario font-light text-[18px]  block mt-4">
          {item.nombre}
        </span>
        <Link
          href={`/detalles/${item.id}`}
          className=" w-max h-max text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario"
        >
          <span> Más Detalles</span>
          <div>
            <Image width={26} height={26} src={"/icons/book.svg"} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default CardProyect;
