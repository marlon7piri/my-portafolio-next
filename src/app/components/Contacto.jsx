"use client";

import React, { useState } from "react";
import "./form.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik } from "formik";
import { SchemaValidationFormContact } from "../data/utils/zod/form-validation";
import TheTitle from "./TheTitle";

export const Contacto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function onSubmit(values) {

   
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts
/* https://localhost:3000/api/email */
/* https://marlonrd.vercel.app/api/email */
   try {
      const response = await fetch("https://marlonrd.vercel.app/api/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });


      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      
      toast.success("Mensaje enviado");
      // ...
    } catch (error) {
      setError(error.message);
      toast.success(error);
    } finally {
      setIsLoading(false);
    }
   
  }
  return (
    <div className="section">
      <TheTitle texto={'Contáctame'}/>
      <p className="max-w-[350px] text-complementario mb-10">Si tienes algún proyecto en mente o deseas que trabajemos juntos, no dudes en escribirme.</p>
      <div class="form-container">
      
        <Formik
          validationSchema={SchemaValidationFormContact}
          onSubmit={async (values, actions) => {
            await onSubmit(values);
            actions.resetForm();
          }}
          initialValues={{ email: "", telefono: "", mensaje: "" }}
        >
          {({ errors, values, handleSubmit, touched, handleChange }) => (
            <form
              class="form"
              autoComplete="false"
              onSubmit={handleSubmit}
              id="contacto"
            >
              <div class="form-group">
              <label for="email">E-mail</label>
                <input
                  required=""
                  name="email"
                  id="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange("email")}
                />
                {errors.email && touched.email ? (
                  <p className="text-red font-semibold">{errors.email}</p>
                ) : null}
              </div>
              <div class="form-group">
                <label for="email">Teléfono</label>
                <input
                  required=""
                  name="telefono"
                  id="telefono"
                  type="text"
                  value={values.telefono}
                  onChange={handleChange("telefono")}
                />
                {errors.telefono && touched.telefono ? (
                  <p className="text-red font-semibold">{errors.telefono}</p>
                ) : null}
              </div>
              <div class="form-group">
                <label for="textarea">Mensaje </label>
                <textarea
                  required=""
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="textarea"
                  value={values.mensaje}
                  onChange={handleChange("mensaje")}
                ></textarea>
                {errors.mensaje && touched.mensaje ? (
                  <p className="text-red font-semibold">{errors.mensaje}</p>
                ) : null}
              </div>
              <button className="button">
                {" "}
                {isLoading ? "Cargando..." : "Enviar"}
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Toaster />
    </div>
  );
};
