import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [nombre, setNombre] = useState("");
  

  useEffect(() => {
    const data = localStorage.getItem("nombre");
    setNombre(data);
   
  }, []);


  useEffect(() => {
    if (nombre != null) {
      return localStorage.setItem("nombre", nombre);
    } else {
      setNombre("");
    }
  }, [nombre]);



  return (
    <DataContext.Provider value={{ nombre, setNombre}}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
