import React from "react";
import TheTitle from "./TheTitle";

export const Experiencia = () => {
  return (
    <div className="section ">
      <div className="flex ">
        <TheTitle texto="Experiencia" />
      </div>

      <div
        className="text-complementario w-3/4  flex flex-col gap-2"
        id="experiencia"
      >
        <p className="text-2xl">Galmasoft</p>
        <p className="text-xl text-primario font-bold">
          Desarrollador FrontEnd
        </p>
        <span>Junio 2024 - Enero 2025</span>
        <p className="text-xl lg:max-w-[calc(100%-200px)] sm:w-full md:w-full">
          Como desarrollador Frontend, desarrollé aplicaciones web según los
          requerimientos de la empresa, asegurando funcionalidad y una
          experiencia de usuario óptima. También colaboré con el equipo de
          backend en la creación de algunas APIs de soporte. Trabajé siguiendo
          los prototipos entregados por el equipo de diseño, garantizando
          fidelidad al diseño y una interfaz intuitiva. Además, implementé
          sistemas de autenticación con NextAuth para mejorar la seguridad y
          gestioné el estado global con Redux, lo que permitió que las
          aplicaciones fueran más escalables y eficientes.
        </p>
        <p className="text-xl">
          Trabajando con tecnologías como:{" "}
          <span className=" text-primario">Next.js, React.js, MongoDb</span>
        </p>
      </div>
    </div>
  );
};
