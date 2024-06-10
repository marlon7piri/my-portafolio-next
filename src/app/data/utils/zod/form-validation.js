import * as yup from "yup";

export const SchemaValidationFormContact = yup.object({
  email: yup
    .string()
    .email("The email is nsot valid")
    .required("The email es required"),

  telefono: yup.string().required("The phone number is required").min(8,"The minimum  accepted value is 8 characters"),
  mensaje: yup.string().required("The message is required"),
});
