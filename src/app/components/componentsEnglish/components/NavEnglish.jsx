"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import style from "../../navbar.module.css";
import { usePathname } from "next/navigation";

export default function NavEnglish() {
  const [show, setShow] = useState(true);
  const [isGoDown, setIsGoDown] = useState(0);
  const path = usePathname();

  const handelToggle = () => {
    document.getElementById("menu").classList.toggle("show_menu");
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = scrollY;
      setIsGoDown(scroll);
    });
  }, []);

  return (
    <div
      className={
        isGoDown < 10
          ? style.contenedor_navegacion
          : style.contenedor_navegacion_bajando
      }
    >
      <div className="w-full flex justify-between p-4">
        <div className="nav_container flex gap-2 w-full ">
          <p className="text-2xl font-bold text-primario">
            Marlon<span className="text-complementario">.Dev</span>
          </p>
        </div>
        <div className="menu" id="menu">
          <Link href={"/en"}>
            <img
              src="/icons/english.png"
              alt=""
              width={42}
              height={32}
              style={
                path === "/en" && { opacity: 0.5, minWidth: 42, minHeight: 32 }
              }
            />
          </Link>
          <Link href={"/"}>
            {" "}
            <img
              src="/icons/banderaespain.png"
              alt=""
              width={42}
              height={32}
              style={{ minWidth: 42, minHeight: 32 }}
            />
          </Link>
          <a href="#sobre_mi_english" onClick={handelToggle}>
            About Me
          </a>

          <a href="#skills_english" onClick={handelToggle}>
            Skills
          </a>
          <a href="#proyects_english" onClick={handelToggle}>
            Projects
          </a>
          <a href="#contacto_english" onClick={handelToggle}>
            Contact
          </a>
        </div>

        {!show ? (
          <AiOutlineClose
            className=" icon_hamburguer  text-complementario"
            id="icono_hamburguesa"
            onClick={() => handelToggle()}
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => handelToggle()}
            className="icono_close text-complementario"
          />
        )}
      </div>
    </div>
  );
}
