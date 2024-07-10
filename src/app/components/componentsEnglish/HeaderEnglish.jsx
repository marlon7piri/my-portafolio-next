"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "../navbar.module.css";
import "../burbujas.css";
import NavEnglish from "./components/NavEnglish";

export const HeaderEnglish = () => {
  return (
    <header className="header_container">
      <NavEnglish />

      <div className="w-full h-screen flex justify-start p-24 relative">
        <div
          className=" w-max mt-24 flex flex-col gap-4" /* {style.container_title_header} */
        >
          <h1 className={style.title}>
            Hello, I <b className="text-primario font-black text-6xl">Marlon</b>
          </h1>
          <p className="text-complementario text-2xl z-50">
            FullStack Developer
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/marlon-rodriguez-rivera/"
              target="_blank"
              className=" w-max h-max text-complementario p-3 rounded-full flex justify-center items-center text-3xl shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario z-50"
            >
              {" "}
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a
              href="https://github.com/marlon7piri"
              target="_blank"
              className=" w-max h-max text-complementario p-3 rounded-full flex justify-center items-center text-3xl shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario z-50"
            >
              {" "}
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a
              href="https://wa.me/+50765844123"
              target="_blank"
              className=" w-max h-max text-complementario p-3 rounded-full flex justify-center items-center text-3xl shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario z-50"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
        </div>
        <img src="/icons/luna.png" alt="" className={style.luna} />
        <img src="/icons/cloud.png" alt="" className={style.cloud} />
        <img src="/icons/cloud.png" alt="" className={style.cloud2} />
      </div>
    </header>
  );
};
