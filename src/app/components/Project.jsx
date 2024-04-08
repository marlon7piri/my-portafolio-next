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
      "Sitio Web llamado drinksfizz, servicio que brinda bartender y paquetes para eventos y fiestas privadas en Panama, tambien pueden registrarse bartenders que quieran estar en la Base de Datos de la página.",
    ruta: "https://drinksfizz.com",
    tecnologias: [
      "/icons/javascript.svg",
      "/icons/react.svg",
      "/icons/html.svg",
      "/icons/css.svg",
      "/icons/vite.svg",
      "/icons/tailwindcss.svg",
    ],
    logros: [
      "1.Poder organizar cada producto en su categoria correspondiente mediante un renderizado condicional utilizando la url.",
      "2. Renderizar los productos y mostrarlos en una UI agradable y bonita",
      "3. Diseñado en Figma y desplegado en Netlify.",
    ],
  },
  {
    id: 2,
    nombre: "Sistema de Inventario ",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1689617415/fotos_portafolio2/IMG_20230717_130729_xl37ry.jpg",
    description:
      "Aplicacion de escritorio programado con Java, Netbeans como IDE, donde agregas productos, clientes, proveedores, imprimes datos en pdf,excel, actualmente continuo trabajando en dicho proyecto.",
    ruta: "https://github.com/marlon7piri/SistemaVentaJava",
    tecnologias: ["/icons/java.svg", "/icons/mysql.svg"],

    logros: [
      "1. Aprendí a trabajar con Netbeans facilitando el diseño y la funcionalidad de la aplicación de escritorio.",
      "2. Aprendi a trabajar con POO donde tenemos usuarios, productos, proveedores.",
      "3. Implementar los encapsulamientos de clases mediante los métodos setter y getter",
      "4. Realizar consultas a  base de datos relacional como lo es MySql.",
    ],
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
      "/icons/vite.svg",
      "/icons/tailwindcss.svg",
    ],
    logros: [
      "1. Consumir una API(MovieDB) externa donde me devuelve las peliculas en formato JSON y poder convertir esos datos para despues renderizar las películas.",
      "2. Comprender las funcionalidades de React, como los hooks useState(), useEffect(), crear funciones de filtrados de las peliculas segun su nombre.",
      "3. Crear e implementar componentes loader para dar una mejor experiencia al usuario mientras se cargan las portadas de las películas.",
      "4. Comprender el manejo de React Router Dom para navegar entre paginas.",
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
      "/icons/vite.svg",
      "/icons/tailwindcss.svg",
    ],
    logros: [
      "1. Crear un ToDo list  donde el usuario puede hacer un CRUD(crear, leer, actualizar, borrar)  ",
      "2. Trabajar con arreglos y comprender sus metodos como el array.filter(), array.map()",
      "3. Aprendí a guardar datos en el local Storage para que las tareas persistan al usuario salga de la página o la recargue",
      "4. Comprender los eventos de los inputs en React para poder capturar todo lo que el usuario escriba en él.",
    ],
  },
  {
    id: 5,
    nombre: "Aplicacion de Sistema de Ventas",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672687654/fotos_portafolio2/ppig4_mocdlb.png",
    description:
      "Aplicacion de Systema de venta comercial utilizando HTML, CSS, Javascript, React, tailwindCSS, la aplicacion no es adaptable a dispositivos mobiles ya que simula a una aplicacion de escritorio.",
    ruta: "https://pig4.netlify.app/",
    tecnologias: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/html.svg",
      "/icons/css.svg",
      "/icons/vite.svg",
      "/icons/tailwindcss.svg",
    ],
    logros: [
      "1. Cree un carrito de compras donde el usuario puede ver los productos ordenados a su cuenta.",
      "2. Comprendí el metodo array.push(), haciendo que el usuario pueda crear algún producto nuevo y lo inserte en alguna categoría de productos.",
      "3. Comprender el metodo array.reduce(), según el precio del producto agregado, aumentando  el costo de la factura si el usuario ingresa mas productos.",
    ],
  },
  {
    id: 6,
    nombre: "Aplicacion de Registro y Control de Inventario",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1711934150/fotos_portafolio2/clone-invu-picture-2_tu4jib.jpg",
    description:
      "Piri es una aplicación  de control de inventarios que puede ser utilizada tanto en restaurantes y hoteles, como en otros establecimientos donde sea necesario hacer inventarios, me inspire en crear Piri ya que en el restaurante donde trabajo actualmente como encargado, diariamente realizan conteos de inventarios de los 30 productos más vendidos. Y todos los días se necesitaban hacer impresiones en hojas de esos 30 productos, entonces tuve la idea de implementar mis conocimientos para reserver ese problema y ese gasto de hojas innecesarias y facilitar a los trabajadores este proceso de conteo y de registro pudiendo hacer esta tarea mucho más sencilla ya que pueden realizarla desde cualquier dispositivo mobile. ",
    ruta: "https://clone-invu-app.vercel.app/",
    tecnologias: [
      "/icons/next.svg",
      "/icons/react.svg",
      "/icons/mongo.svg",
      "/icons/javascript.svg",
      "/icons/tailwindcss.svg",
      "/icons/css.svg",
      "/icons/html.svg",
    ],
    logros: [
      "1. Cree un proyecto Full Stack trabajando con base de datos NoSQL como lo es MongoDB",
      "2. Comprender el framework Next.js utilizando las nuevas características de Server Side Rendering.",
      "3. Implementar autenticación del usuario utilizando nextAuth, permitiendole al usuario iniciar sesión con su email y contraseña.",
      "4. Crear rutas privadas según el rol del usuario.",
      /*  "4. Hacer relaciones entre colecciones one-to-many, one-to-one, haciendo que cuando crees una merma de un producto automaticamente afecte al producto específico, y que devuelva los productos que pertenecen al restaurante del usuario que ha creado sesión. Puede ver la aplicación utilizando las siguientes credenciales email: test@gmail.com, password: 1234" */
      ,
    ],
  },
];

const Project = () => {
  return (
    <div className="section">
      <div className="flex mt-20">
        <TheTitle texto="Proyectos" />
      </div>
      <p className="max-w-[60%]  text-complementario mb-20">
        Aqui podrá ver mis proyectos trabajados
        {/* , las dificultades que presenté y como las solucione. */} Espero que
        les guste
      </p>

      <div
        className="  w-[90%]  h-full flex flex-wrap gap-20 
      justify-center  items-center "
        id="proyects"
      >
        {dataProyect.map((tecno) => {
          return <CardProyect item={tecno} key={tecno.id} />;
        })}
      </div>
    </div>
  );
};

export default Project;
