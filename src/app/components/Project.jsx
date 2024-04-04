import React from "react";

import TheTitle from "./TheTitle";
import CardProyect from "./CardProyect";

export const dataProyect = [
  {
    id: 1,
    nombre: "Sitio Web DrinkFizz",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1684510403/we_gavxxb.png",
    description:
      "Sitio Web llamado drinksfizz, servicio que brinda bartender y paquetes para eventos y fiestas privadas en Panama, tambien pueden registrarse bartenders que quieran estar en la Base de Datos de la pagina",
    ruta: "https://drinksfizz.com",
    tecnologias: [
      "/icons/javascript.svg",
      "/icons/react.svg",
      "/icons/html.svg",
      "/icons/css.svg",
    ],
  },
  {
    id: 2,
    nombre: "Sistema de Inventario ",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1689617415/fotos_portafolio2/IMG_20230717_130729_xl37ry.jpg",
    description:
      "Aplicacion de escritorio programado con Java, Netbeans como IDE, donde agregas productos, clientes, proveedores, imprimes datos en pdf,excel, realizando consultas a una base de datos de MySql, actualmente continuo trabajando en dicho proyecto.",
    ruta: "https://github.com/marlon7piri/SistemaVentaJava",
    tecnologias: ["/icons/java.svg", "/icons/mysql.svg", "/icons/netbeans.svg"],
  },
  {
    id: 3,
    nombre: "Aplicacion de Películas",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1671562665/fotos_portafolio2/imagen_peliculas_portafolio_nfxegv.jpg",
    description:
      "Aplicacion de Peliculas utilizando HTML , CSS, tailwindCSS , React, react-router-dom,  consumo de una Api The MOvie DB",
    ruta: "https://aplicacionpelimrd.netlify.app/",
    tecnologias: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/html.svg",
      "/icons/css.svg",
    ],
  },
  {
    id: 4,
    nombre: "Aplicacion de Tareas",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1671562665/fotos_portafolio2/imagen_tareas_portafolio_zubea6.jpg",
    description:
      "Aplicacion de Tareas utilizando React, tailwindCSS, guardando las tareas en local storage, para ayudarte a guardar tus tareas pendientes",
    ruta: "https://tareasmrd.netlify.app/",
    tecnologias: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/html.svg",
      "/icons/css.svg",
    ],
  },
  {
    id: 5,
    nombre: "Aplicacion de Sistema de Ventas",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672687654/fotos_portafolio2/ppig4_mocdlb.png",
    description:
      "Aplicacion de Systema de venta comercial utilizando HTML, CSS, Javascript, React, tailwindCSS, la aplicacion no es adaptable a dispositivos mobiles ya que simula a una aplicacion de escritorio",
    ruta: "https://pig4.netlify.app/",
    tecnologias: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/html.svg",
      "/icons/css.svg",
    ],
  },
  {
    id: 6,
    nombre: "Aplicacion de Registro y Control de Inventario",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1711934150/fotos_portafolio2/clone-invu-picture-2_tu4jib.jpg",
    description:
      "Piri es una aplicación  de control de inventarios que puede ser utilizada tanto en restaurantes y hoteles, como en otros establecimientos donde sea necesario hacer inventarios, me inspire en crear Piri ya que en el restaurante donde trabajo actualmente como encargado, diariamente realizan conteos de inventarios de los 30 productos más vendidos. Y todos los días se necesitaban hacer impresiones en hojas de esos 30 productos, entonces tuve la idea de implementar mis conocimientos para reserver ese problema y ese gasto de hojas innecesarias y facilitar a los trabajadores este proceso de conteo y de registro pudiendo hacer esta tarea mucho más sencilla ya que pueden realizarla desde cualquier dispositivo mobile ",
    ruta: "https://pig4.netlify.app/",
    tecnologias: [
      "/icons/next.svg",
      "/icons/react.svg",
      "/icons/mongo.svg",
      "/icons/javascript.svg",
      "/icons/tailwindcss.svg",
      "/icons/css.svg",
      "/icons/html.svg",
    ],
  },

  /* Piri es una aplicación  de control de inventarios que puede ser utilizada tanto en restaurantes y hoteles, como en otros establecimientos donde sea necesario hacer inventarios, me inspire en crear Piri ya que en el restaurante donde trabajo actualmente como encargado, diariamente realizan conteos de inventarios de los 30 productos más vendidos. Y todos los días se necesitaban hacer impresiones en hojas de esos 30 productos, entonces tuve la idea de implementar mis conocimientos para reserver ese problema y ese gasto de hojas innecesarias y facilitar a los trabajadores este proceso de conteo y de registro pudiendo hacer esta tarea mucho más sencilla ya que pueden realizarla desde cualquier dispositivo mobile */
];

const Project = () => {
  return (
    <div className="section">
      <TheTitle texto="Proyectos" />

      <div
        className="  w-[90%]  h-full flex flex-wrap gap-20 
      justify-center  items-center " id='proyects'
      >
        {dataProyect.map((tecno) => {
          return <CardProyect item={tecno} key={tecno.id} />;
        })}
      </div>
    </div>
  );
};

export default Project;
