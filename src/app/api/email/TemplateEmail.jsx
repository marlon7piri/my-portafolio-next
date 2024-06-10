import React from "react";

const TemplateEmail = ({ email, telefono, mensaje }) => {
  return (
    <div>
      <p>Email: {email}</p>
      <p>Telefono: {telefono}</p>
      <p>Mensaje: {mensaje}</p>
    </div>
  );
};

export default TemplateEmail;
