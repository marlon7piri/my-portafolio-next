import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardProyect = ({ item }) => {
  return (
    <Link
      href={`/detalles/${item.id}`}
      className="card_proyectos hover:scale-105 duration-700"
      key={item.id}
    >
      <Image
        src={item.image}
        width={400}
        height={250}
        objectFit="cover"
        alt={`Foto de ${item.nombre}`}
      />
      <span className="text-complementario font-bold text-2xl  block mt-4">
        {item.nombre}
      </span>
    </Link>
  );
};

export default CardProyect;
