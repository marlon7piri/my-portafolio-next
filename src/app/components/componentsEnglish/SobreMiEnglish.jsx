import React from "react";
import TheTitle from "../../components/TheTitle";

const SobreMiEnglish = () => {
  return (
    <div className="section" id="sobre_mi_english">
      <TheTitle texto="About Me" />

      <div className="sobre_mi_parrafo">
        <p className="text-complementario text-2xl ml-4">
          Hello everyone, I am a
          <b className="text-primario"> FullStack programmer</b>, self-taught,
          and currently pursuing a degree in Computer Systems Engineering.
          <br></br>
          <br></br>I started programming 5 years ago when I discovered the wonders that can be achieved with coding,
          and I enjoy it so much that it became my hobby.
          I used to spend any free time I had programming,
          and I love learning new things,
          so I listen to constructive advice.
          I have knowledge of programming languages for both backend and frontend development.
          On my profile, you can see individual projects I have worked on.
        </p>

        <div className="w-4 h-4 absolute -top-2 -left-2 bg-primario rounded-full"></div>

        <div className="w-4 h-4 absolute -bottom-2 -left-2 bg-primario rounded-full"></div>
      </div>
    </div>
  );
};

export default SobreMiEnglish;
