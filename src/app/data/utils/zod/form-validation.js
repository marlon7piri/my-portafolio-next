import * as yup from "yup";

export const SchemaValidationFormContact = yup.object({
  email: yup
    .string()
    .email("El email no es válido.")
    .required("El email es requerido."),

  telefono: yup
    .string()
    .required("El teléfono es requerido.")
    .min(8, "El mínimo valor de caracteres aceptado es 8."),
  mensaje: yup.string().required("El mensaje es requerido"),
});

export const SchemaValidationFormContactEnglish = yup.object({
  email: yup
    .string()
    .email("The email is not valid.")
    .required("The email is required."),

  telefono: yup
    .string()
    .required("The phone is required.")
    .min(8, "The minimum accepted character length is 8."),
  mensaje: yup.string().required("The message is required."),
});
