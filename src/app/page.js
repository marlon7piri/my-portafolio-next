import React from "react";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Project from "./components/Project";
import SobreMi from "./components/SobreMi";
import { Footter } from "./components/Footter";
import { Contacto } from "./components/Contacto";
import { Experiencia } from "./components/Experiencia";

const Home = () => {
  return (
    <div>
      <Header />
      <SobreMi />
      <Experiencia />
      <Project />
      <Skills />

      <Contacto />
      <Footter />
    </div>
  );
};

export default Home;
