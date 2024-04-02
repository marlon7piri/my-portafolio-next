import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header_container">
      <Nav />

      <div className="w-full h-screen flex justify-start p-24">
        <div className=" w-max mt-24">
        <h1>
          Mi nombre es{" "}
          <span className="text-primario font-bold text-5xl">Marlon</span>
        </h1>
        <p>Soy Programador Full Stack</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
