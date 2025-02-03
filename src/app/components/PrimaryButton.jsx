"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const PrimaryButton = ({ islink }) => {
  const path = usePathname();

  if (islink) {
    return (
      <a
        className=" w-[100px] h-[50px] text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario "
        href={islink}
        target="_blank"
      >
         Proyecto
      </a>
    );
  } else {
    return (
      <Link href={path.includes === "/en" ? "/en/#proyects" : "/#proyects"}>
        <button className=" w-[100px] h-[50px] text-complementario  rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario ">
          Atrás
        </button>
      </Link>
    );
  }
};
