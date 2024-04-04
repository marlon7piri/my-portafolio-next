import React from "react";
import TheTitle from "./TheTitle";

const SobreMi = () => {
  return (
    <div className="section" id='sobre_mi'>
      
      <TheTitle texto="Sobre Mi" />
      

      <div className="w-[80%]   relative min-h-[200px] border-l-2 border-complementario p-2 " >
        <p className="parrafo">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro ex
          placeat cum repellendus libero dolor eius iure doloribus voluptate,
          numquam, aliquam quisquam deserunt, possimus a error rerum atque
          velit!
<br></br>
<br></br>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro ex
          placeat cum repellendus libero dolor eius iure doloribus voluptate,
          numquam, aliquam quisquam deserunt, possimus a error rerum atque
          velit!
        </p>

        <div className="w-4 h-4 absolute -top-2 -left-2 bg-complementario rounded-full"></div>

        <div className="w-4 h-4 absolute -bottom-2 -left-2 bg-complementario rounded-full"></div>
      </div>
    </div>
  );
};

export default SobreMi;
