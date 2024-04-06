"use client";

import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import style from "./navbar.module.css";
import "./burbujas.css";

const Header = () => {
  

  return (
    <header className="header_container">
      <Nav />

      <div className="w-full h-screen flex justify-start p-24 relative">
        <div
          className=" w-max mt-24 flex flex-col gap-4" /* {style.container_title_header} */
        >
          <h1 className={style.title}>
            Hola! , soy{" "}
            <span className="text-primario font-bold text-5xl">Marlon</span>
          </h1>
          <p className="text-complementario z-50">Programador Full Stack</p>
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
        <img
          src="/icons/luna.png"
          alt=""
          className={style.luna}
         
        />
        <img
          src="/icons/cloud.png"
          alt=""
          className={style.cloud}
        />
        <img src="/icons/cloud.png" alt="" className={style.cloud2} />
      </div>

      {/*  <div className="contenedor_burbujas">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </header>
  );
};

export default Header;
