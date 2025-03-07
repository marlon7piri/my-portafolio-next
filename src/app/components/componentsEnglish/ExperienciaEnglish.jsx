import React from "react";
import TheTitle from "../TheTitle";

export const ExperienciaEnglish = () => {
  return (
    <div className="section ">
      <div className="flex ">
        <TheTitle texto="Experiencia" />
      </div>

      <div className="text-complementario "></div>

      <div
        className="text-complementario w-3/4  flex flex-col gap-2"
        id="experiencia"
      >
        <p className="text-2xl">Galmasoft</p>
        <p className="text-xl text-primario font-bold">FrontEnd Developer</p>
        <span>June 2024 - January 2025</span>
        <p className="text-xl lg:max-w-[calc(100%-200px)] sm:w-full md:w-full">
          As a Frontend Developer, I developed web applications according to the
          company's requirements, ensuring functionality and an optimal user
          experience. I also collaborated with the backend team in creating some
          support APIs. I worked following the prototypes provided by the design
          team, ensuring design fidelity and an intuitive interface.
          Additionally, I implemented authentication systems using NextAuth to
          enhance security and managed global state with Redux, which made the
          applications more scalable and efficient.
        </p>
        <p className="text-xl">
          Working with technologies such as:
          <span className="text-primario">Next.js, React.js, MongoDb</span>
        </p>
      </div>
    </div>
  );
};
