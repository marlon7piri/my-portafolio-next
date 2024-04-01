import React from "react";

const NavBar = () => {
  return (
    <nav className="text-primario flex justify-between p-4 text-xl">
      <p className="text-xl">Marlon  <span className="text-complementario font-bold">.Dev</span></p>
      <ul className="flex gap-4">
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Contácto</li>
      </ul>
    </nav>
  );
};

export default NavBar;
