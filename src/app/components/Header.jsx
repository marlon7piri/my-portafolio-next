import React from "react";
import Nav from "./Nav";
import style from "./navbar.module.css";
import { BsFillArrowUpCircleFill, BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header_container">
      
      <Nav />

      <div className="w-full h-screen flex justify-start p-24 ">
        <div
          className=" w-max mt-24 flex flex-col gap-4" /* {style.container_title_header} */
        >
          <h1 className={style.title}>
            Mi nombre es{" "}
            <span className="text-primario font-bold text-5xl">Marlon</span>
          </h1>
          <p className="text-complementario font-bold text-2xl" >Soy Programador Full Stack</p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/marlon-rodriguez-rivera/"
              target="_blank"
              className=" w-max h-max bg-gray-900 p-3 rounded-full flex justify-center items-center text-3xl shadow-inner shadow-blanco hover:scale-105 trasition duration-500 cursor-pointer"
            >
              {" "}
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a
              href="https://github.com/marlon7piri"
              target="_blank"
              className="w-max h-max bg-gray-900 p-3 rounded-full flex justify-center items-center text-3xl shadow-inner shadow-blanco hover:scale-105 trasition duration-500 cursor-pointer"
            >
              {" "}
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a
              href="https://wa.me/+50765844123"
              target="_blank"
              className="w-max h-max bg-gray-900 p-3 rounded-full flex justify-center items-center text-3xl shadow-inner shadow-blanco hover:scale-105 trasition duration-500 cursor-pointer"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
