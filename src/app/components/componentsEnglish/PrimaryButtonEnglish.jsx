"use client";
import Link from "next/link";
import React from "react";

export const PrimaryButtonEnglish = ({ islink }) => {
  if (islink) {
    return (
      <a
        className=" w-max h-max text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario "
        href={islink}
        target="_blank"
      >
        View Project
      </a>
    );
  } else {
    return (
      <Link href={"/en#proyects_english"}>
        <button className=" w-ma x h-max text-complementario  rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario ">
          Back
        </button>
      </Link>
    );
  }
};
