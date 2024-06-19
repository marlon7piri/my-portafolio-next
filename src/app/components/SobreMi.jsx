import React from "react";
import TheTitle from "./TheTitle";

const SobreMi = () => {
  return (
    <div className="section" id="sobre_mi">
      <TheTitle texto="Sobre Mi" />

      <div className="w-[80%]   relative min-h-[200px] border-l-2 border-complementario p-2 -z-50">
        <p className="text-complementario text-2xl">
          Hola a tod@s, soy programador <b className="text-primario">FullStack</b>, estudio de forma
          
          autodidacta y actualmente me encuentro cursando la carrera de
          Ingeniería en Sistemas Computacionales.
          <br></br>
          <br></br>
          Tengo conocimientos en lenguajes de programación tanto del backend como el frontend, actualmente estoy
          aprendiendo React Native, donde estoy implementando mis conocimientos
          en proyectos colaborativos, me gusta aprender cosas nuevas por lo que escucho consejos
          constructivos. Muchas gracias, en mi perfil pueden ver proyectos
          individuales en los que he trabajado.
        </p>

        <div className="w-4 h-4 absolute -top-2 -left-2 bg-complementario rounded-full"></div>

        <div className="w-4 h-4 absolute -bottom-2 -left-2 bg-complementario rounded-full"></div>
      </div>
    </div>
  );
};

export default SobreMi;
