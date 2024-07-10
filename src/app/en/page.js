import React from "react";
import { HeaderEnglish } from "../components/componentsEnglish/HeaderEnglish";
import SobreMiEnglish from "../components/componentsEnglish/SobreMiEnglish";
import SkillsEnglish from "../components/componentsEnglish/SkillsEnglish";
import ProjectEnglish from "../components/componentsEnglish/ProjectEnglish";
import FootterEnglish from "../components/componentsEnglish/FootterEnglish";
import { ContactoEnglish } from "../components/componentsEnglish/ContactoEnglish";

const HomeEnglish = () => {
  return (
    <div className="w-full min-h-screen">
      <HeaderEnglish />
      <SobreMiEnglish />
      <SkillsEnglish />
      <ProjectEnglish />

      <ContactoEnglish />
      <FootterEnglish />
    </div>
  );
};

export default HomeEnglish;
