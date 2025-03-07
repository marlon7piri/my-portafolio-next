"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export const PrimaryButtonEnglish = ({ islink }) => {
  const path = usePathname();
  const router = useRouter();

  if (islink) {
    return (
      <a
        className=" w-[100px] h-[50px] text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario "
        href={islink}
        target="_blank"
      >
        Project
      </a>
    );
  } else {
    return (
      <button
        onClick={() =>
          router.push(path.includes === "/en" ? "/en/#proyects" : "/#proyects")
        }
        className=" w-[100px] h-[50px] text-complementario  rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario "
      >
        Back
      </button>
    );
  }
};
