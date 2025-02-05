import React from "react";
import TheTitle from "./TheTitle";

const SobreMi = () => {
  return (
    <div className="section" id="sobre_mi">
      <TheTitle texto="Sobre Mi" />

      <div className="sobre_mi_parrafo">
        <p className="  text-complementario text-2xl ml-4">
          Hola a tod@s, soy programador <b className="text-primario">FullStack</b>, estudio de forma

          autodidacta y actualmente me encuentro cursando la carrera de
          Ingeniería en Sistemas Computacionales.
          <br></br>
          <br></br>
          
          Comencé a programar hace 5 años cuando descubrí las maravillas que se pueden hacer con la programación,
          y lo disfruto tanto que se convirtio en mi pasatiempo, el minimo tiempo que tenia
          lo aprovechaba programando, me gusta aprender cosas nuevas por lo que escucho consejos
          constructivos. Tengo conocimientos en lenguajes de programación tanto del backend como el frontend.En mi perfil pueden ver proyectos
          individuales en los que he trabajado.
        </p>

        <div className="w-4 h-4 absolute -top-2 -left-2 bg-primario rounded-full"></div>

        <div className="w-4 h-4 absolute -bottom-2 -left-2 bg-primario rounded-full"></div>
      </div>
    </div>
  );
};

export default SobreMi;
