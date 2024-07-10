"use client";

import React from "react";

import TheTitle from "../../components/TheTitle";
import CardProyectEnglish from "./CardProyectEnglish";

export const dataProyect = [
  {
    id: 2,
    nombre: "Inventory System",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1689617415/fotos_portafolio2/IMG_20230717_130729_xl37ry.jpg",
    description:
      "Desktop application programmed with Java, using Netbeans as the IDE, where you can add products, clients, and suppliers, print data in PDF and Excel formats. I am currently continuing to work on this project.",
    ruta: "https://github.com/marlon7piri/SistemaVentaJava",
    tecnologias: ["/icons/java.svg", "/icons/mysql.svg"],

    logros: [
      "1. I learned to work with Netbeans, making it easier to design and implement the functionality of the desktop application.",
      "2. I learned to work with OOP where we have users, products, and suppliers.",
      "3. Implement class encapsulation using setter and getter methods.",
      "4. Perform queries on relational databases such as MySQL.",
    ],
    github: "https://github.com/marlon7piri/SistemaVentaJava",
  },
  {
    id: 3,
    nombre: "Movie Aplication",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1671562665/fotos_portafolio2/imagen_peliculas_portafolio_nfxegv.jpg",
    description:
      "Movie application using HTML, CSS, TailwindCSS, React, react-router-dom, and consuming The Movie DB API.",

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
      "1. Consume an external API (MovieDB) that returns movies in JSON format and convert that data to render the movies.",
      "2. Understand React functionalities, such as the useState() and useEffect() hooks, and create functions to filter movies by their name.",
      "3. Create and implement loader components to provide a better user experience while the movie covers are loading.",
      "4. Understand the handling of React Router Dom to navigate between pages.",
    ],
    github: "https://github.com/marlon7piri/movies",
  },
  {
    id: 4,
    nombre: "Tasks Aplication",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720573040/fotos_portafolio2/principal_oamod5.png",
    description:
      "Task application using React and TailwindCSS, saving tasks in local storage to help you keep track of your pending tasks.",
    ruta: "https://task-aplication-client.vercel.app/",
    tecnologias: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/html.svg",
      "/icons/css.svg",
      "/icons/vite.svg",
      "/icons/tailwindcss.svg",
    ],
    logros: [
      "1. Create a ToDo list where the user can perform CRUD (create, read, update, delete) operations.",
      "2. Work with arrays and understand their methods such as array.filter() and array.map().",
      "3. Learned to save data in local storage so that tasks persist when the user leaves or reloads the page.",
      "4. Understand input events in React to capture everything the user types.",
    ],
    github: "https://github.com/marlon7piri/tasks_aplication",
    imagenes: [
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720572765/fotos_portafolio2/login_i90jao.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720572765/fotos_portafolio2/home_nwojll.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720572765/fotos_portafolio2/register_spe0pf.png",
    ],
  },
  {
    id: 5,
    nombre: "Sales System Application",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672687654/fotos_portafolio2/ppig4_mocdlb.png",
    description:
      "Commercial Sales System Application using HTML, CSS, JavaScript, React, and TailwindCSS. The application is not responsive to mobile devices as it simulates a desktop application.",
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
      "1.Created a shopping cart where the user can view the products ordered in their account.",
      "2. Understood the array.push() method, allowing the user to create a new product and add it to a product category.",
      "3. Understood the array.reduce() method to calculate the total cost of the invoice, increasing the cost as the user adds more products.",
    ],
    github: "https://github.com/marlon7piri/Proyecto_Pig4",
    imagenes: [
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720574154/fotos_portafolio2/foto2_q9dblp.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720574153/fotos_portafolio2/foto1_dxcjpa.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720574153/fotos_portafolio2/foto3_svbq5e.png",
    ],
  },
  {
    id: 1,
    nombre: "DrinkFizz Website",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1684510403/we_gavxxb.png",
    description:
      "Website called DrinksFizz, a service that offers bartenders and packages for events and private parties in Panama. Bartenders who want to be included in the website's database can also register.",
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
      "1. Organize each product into its corresponding category using conditional rendering based on the URL.",
      "2. Render the products and display them in a user-friendly and attractive UI.",
      "3. Designed in Figma and deployed on Netlify.",
    ],
    github: "https://github.com/marlon7piri/sitio_web_bartender",
    imagenes: [
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720573378/fotos_portafolio2/3_diw502.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720573378/fotos_portafolio2/2_rbghfn.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720573377/fotos_portafolio2/4_l8ad5u.png",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1720573377/fotos_portafolio2/5_zl83va.png",
    ],
  },
  {
    id: 6,
    nombre: "Shoe Collection Website",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1714235698/fotos_portafolio2/imagen_creditshoespty_vaxkwp.jpg",
    description:
      "Website for a catalog of sneakers and sports shoes, where users can view products by their respective category. Users can contact the company directly via WhatsApp to request more information about the products.",
    ruta: "https://creditshoespty.vercel.app",
    tecnologias: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/tailwindcss.svg",
      "/icons/css.svg",
      "/icons/html.svg",
    ],
    logros: [
      "1. Display products according to their respective category using the Array.filter() method.",
      "2. Implement an image slider using the Framer Motion library.",
      "3. Implement text and image transition animations using the AOS (Animate On Scroll) library.",

      ,
    ],
    github: "    https://github.com/marlon7piri/creditshoespty",
    imagenes: [
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718766299/fotos_portafolio2/creditshoes-1_mewlvl.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718766299/fotos_portafolio2/creditshoes-2_ci3nsi.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718766305/fotos_portafolio2/creditshoes-3_xst6hb.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718766316/fotos_portafolio2/creditshoes-4_ajexyo.jpg",
    ],
  },

  {
    id: 7,
    nombre: "Inventory Registration and Control Application",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1711934150/fotos_portafolio2/clone-invu-picture-2_tu4jib.jpg",
    description:
      "You can view the web application using the following credentials: email: test@gmail.com, password: 1234. Piri is an inventory control application that can be used in restaurants, hotels, and other establishments where inventory management is needed. I was inspired to create Piri because at the restaurant where I currently work as a manager, we perform daily inventory counts of the top 30 most sold products. Every day, we needed to print out sheets for these 30 products, so I decided to use my knowledge to address this problem and eliminate unnecessary paper usage. This way, the process of counting and recording inventory becomes much easier and more efficient, as it can be done from any mobile device.",
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
      "1. Created a Full Stack project working with a NoSQL database such as MongoDB.",
      "2. Understood the Next.js framework using the new features of Server-Side Rendering.",
      "3. Implemented user authentication using nextAuth, allowing users to log in with their email and password.",
      "4. Created private routes based on the user's role.",
      /*  "4. Hacer relaciones entre colecciones one-to-many, one-to-one, haciendo que cuando crees una merma de un producto automaticamente afecte al producto específico, y que devuelva los productos que pertenecen al restaurante del usuario que ha creado sesión. Puede ver la aplicación utilizando las siguientes credenciales email: test@gmail.com, password: 1234" */
      ,
    ],
    github: "    https://github.com/marlon7piri/clone-invu_app",
    imagenes: [
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718762275/fotos_portafolio2/clone-invu-mermas_ludvie.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1711934150/fotos_portafolio2/clone-invu-picture_lbi0bo.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718762275/fotos_portafolio2/clone-invu-productos_kpswqp.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718762276/fotos_portafolio2/clone-invu-login_siwtt0.png",
    ],
  },

  {
    id: 8,
    nombre: "Wallet E-Commerce with Stripe",
    image:
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718756743/fotos_portafolio2/e-commerce-stripe_gzgo9i.jpg",
    description:
      "Wallet E-Commerce using Stripe as the payment gateway. Users can add products to their cart, adjust the quantity of products, and make purchases using Stripe, which is a very secure payment gateway.",
    ruta: "https://ecommerce-mern-pied.vercel.app",
    tecnologias: [
      "/icons/react.svg",
      "/icons/express.svg",
      "/icons/mongo.svg",
      "/icons/javascript.svg",
      "/icons/tailwindcss.svg",
      "/icons/css.svg",
      "/icons/html.svg",
    ],
    logros: [
      "1. Created a Full Stack project working with a NoSQL database such as MongoDB.",
      "2. Implemented and understood the Stripe payment gateway.",
      "3. Managed global states using useContext()",
      "4. Implemented programming logic to handle the shopping cart when adjusting quantities of each product.",
    ],
    github: "https://github.com/marlon7piri/ecommerce_MERN",
    imagenes: [
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718764542/fotos_portafolio2/carteras-productos_zlzpe2.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718764542/fotos_portafolio2/carteras-slider_shmiib.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718764542/fotos_portafolio2/carteras-carrito_rnsdyr.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718764542/fotos_portafolio2/carteras-stripe_gltblp.jpg",
      "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1718764542/fotos_portafolio2/carteras-about_trxba9.jpg",
    ],
  },
];

const ProjectEnglish = () => {
  return (
    <div className="section">
      <div className="flex mt-20">
        <TheTitle texto="Projects" />
      </div>
      <p className="max-w-[70%] text-2xl text-complementario mb-20">
        Here you will be able to see my projects and the learning process
        involved. I hope you like it.
      </p>

      <div
        className="  w-[90%]  h-full flex flex-wrap gap-20 
      justify-center  items-center "
        id="proyects_english"
      >
        {dataProyect
          .map((tecno) => {
            return <CardProyectEnglish item={tecno} key={tecno.id} />;
          })
          .reverse()}
      </div>
    </div>
  );
};

export default ProjectEnglish;
