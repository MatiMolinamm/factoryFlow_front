import { useRef } from "react";
import sendHook from "../hooks/sendHook";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles/styles.css";

export const AddForm = ({ name }) => {
  const form = useRef();
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      nombre: "",
      presentacion: "",
      costo: "",
      proveedor: "",
      categoria: "",
      cantidad: "",
    },
    onSubmit: (values) => {
      //console.log(values)
      sendHook(values, name);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(2, "Mínimo dos carácteres")
        .max(15, "Max 15 caracteres")
        .required("Requerido"),
      presentacion: Yup.string()
        .min(2, "Mínimo dos carácteres")
        .max(15, "Max 15 caracteres")
        .required("Requerido"),
      costo: Yup.number().required("Requerido"),
      proveedor: Yup.string()
        .min(2, "Mínimo dos carácteres")
        .max(150, "Max 150 caracteres")
        .required("Requerido"),
      categoria: Yup.string()
        .min(2, "Mínimo dos carácteres")
        .max(15, "Max 15 caracteres")
        .required("Requerido"),
      cantidad: Yup.number().required("Requerido"),
    }),
  });

  return (
    <form ref={form} onSubmit={handleSubmit} noValidate>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        className={`${errors.nombre && "has-error"}`}
        {...getFieldProps("nombre")}
      />
      {touched.nombre && errors.nombre && (
        <span className="error-message">{errors.nombre}</span>
      )}
      <label htmlFor="presentacion">Presentacion</label>
      <input
        type="text"
        className={`${errors.presentacion && "has-error"}`}
        {...getFieldProps("presentacion")}
      />
      {touched.presentacion && errors.presentacion && (
        <span className="error-message">{errors.presentacion}</span>
      )}
      <label htmlFor="costo">Costo</label>
      <input type="number" className={""} {...getFieldProps("costo")} />
      {touched.costo && errors.costo && (
        <span className="error-message">{errors.costo}</span>
      )}
      <label htmlFor="proveedor">Proveedor</label>
      <input
        type="text"
        className={`${errors.proveedor && "has-error"}`}
        {...getFieldProps("proveedor")}
      />
      {touched.proveedor && errors.proveedor && (
        <span className="error-message">{errors.proveedor}</span>
      )}
      <label htmlFor="categoria">Categoria</label>
      <input
        type="text"
        className={`${errors.categoria && "has-error"}`}
        {...getFieldProps("categoria")}
      />
      {touched.categoria && errors.categoria && (
        <span className="error-message">{errors.categoria}</span>
      )}
      <label htmlFor="cantidad">Cantidad</label>
      <input type="number" className={""} {...getFieldProps("cantidad")} />
      {touched.cantidad && errors.cantidad && (
        <span className="error-message">{errors.cantidad}</span>
      )}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddForm;
