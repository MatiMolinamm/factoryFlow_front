import factoryFlowApi from "../api/factoryFlowApi";

export const sendHook = (values, name) => {
  const { nombre, presentacion, costo, proveedor, categoria, cantidad } =
    values;
  let saveForm = {
    nombre,
    presentacion,
    costo,
    proveedor,
    categoria,
    cantidad,
  };
  const startSavingEvent = async (route, info) => {
    const { data } = await factoryFlowApi.post(route, info);
    console.log(data);
  };

  switch (name) {
    case "materia prima":
      startSavingEvent("mp", saveForm);
      break;

    case "insumo":
      startSavingEvent("insumo", saveForm);
      break;

    case "packaging":
      startSavingEvent("packaging", saveForm);
      break;

    case "producto":
      startSavingEvent("producto", saveForm);
      break;
    default:
      console.log("Tipo no reconocido");
      // Código para manejar casos no reconocidos
      break;
  }
};

export default sendHook;
