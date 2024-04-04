export const crearBurbujas = () => {
  for (let i = 0; i <= 10; i++) {
    const contenedor = document.querySelector("container_burbujas");
    const burbujas = document.createElement("span");

    burbujas.style.backgroundColor("#fffff");
    contenedor.appendChild(burbujas);
  }
};
