'use client'

import React, { useState } from "react";

import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { DataContext } from "../data/DataContext";




export default function Nav() {
  const [show, setShow] = useState(true)


  const handelToggle=()=>{
    document.getElementById("menu").classList.toggle("show_menu")
    setShow(!show)


  }


  return (
    <div className=" w-full  ">

        <div className="flex w-full h-full  justify-between  p-6 text-blanco ">
      <div>
      <p className="text-xl">Marlon  <span className="text-complementario font-bold">.Dev</span></p>
      </div>
    <div className= "menu" id="menu">
      <a href="#home">Home</a>
        <a href="#about" onClick={handelToggle}>Sobre Mi</a>
        <a href="#proyectos"onClick={handelToggle}>Proyectos</a>
        <a href="#skills"onClick={handelToggle}>Habilidades</a>
        <a href="#services"onClick={handelToggle}>Servicios</a>
       
      
       
      </div>
   
    

    {!show ? <AiOutlineClose className=" icon_hamburguer  " id="icono_hamburguesa" onClick={()=>handelToggle()}/>:<RxHamburgerMenu onClick={()=>handelToggle()} className="icono_close"/>}
    </div>
    </div>
  );
}
