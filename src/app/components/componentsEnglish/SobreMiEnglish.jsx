import React from "react";
import TheTitle from "../../components/TheTitle";

const SobreMiEnglish = () => {
  return (
    <div className="section" id="sobre_mi_english">
      <TheTitle texto="About Me" />

      <div className="w-[80%]   relative min-h-[200px] border-l-2 border-complementario p-2 -z-50">
        <p className="text-complementario text-2xl">
          Hello everyone, I am a
          <b className="text-primario"> FullStack programmer</b>, self-taught,
          and currently pursuing a degree in Computer Systems Engineering.
          <br></br>
          <br></br>I have knowledge in both backend and frontend programming
          languages, and I am currently learning React Native, where I am
          applying my knowledge in collaborative projects. I enjoy learning new
          things, so I appreciate constructive advice. Thank you very much, you
          can see individual projects I've worked on in my profile.
        </p>

        <div className="w-4 h-4 absolute -top-2 -left-2 bg-complementario rounded-full"></div>

        <div className="w-4 h-4 absolute -bottom-2 -left-2 bg-complementario rounded-full"></div>
      </div>
    </div>
  );
};

export default SobreMiEnglish;
