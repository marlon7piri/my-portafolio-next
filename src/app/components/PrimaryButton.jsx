"use client";
import Link from "next/link";
import React from "react";



export const PrimaryButton = ({ islink }) => {

 

  if (islink) {
    return (
      <a
        className=" w-max h-max text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario "
        href={islink}
        target="_blank"
      >
        Ver Proyecto
      </a>
    );
  } else {
    return (
      <Link href={'/#proyects'}>
      <button
        className=" w-ma x h-max text-complementario  rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario "
       
      >
        Atras
      </button>
      </Link>
    );
  }
};
