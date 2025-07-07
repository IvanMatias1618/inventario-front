import  FormularioEditar from "./formularios/editar_insumos";
import FormularioCrear from "./formularios/crear_insumo";
import FormularioEliminar from "./formularios/eliminar_insumo"; 
import { useState } from "react";

const opciones = [
  { texto: "Crear insumo", id: "crear__insumo" },
  { texto: "Editar un insumo", id: "editar__insumo" },
  { texto: "Eliminar un insumo", id: "eliminar__insumo" },
];

export function Menu() {
  const [formularioActual, setFormularioActual] = useState<string | null>(null);

  const manejarClick = (id: string) => {
    setFormularioActual(id);
  };

  return (
    <>
      <ul className="menu_lista">
        {opciones.map(({ texto, id }) => (
          <li
            key={id}
            className="menu_ls_item insumos"
            onClick={() => manejarClick(id)}
          >
            {texto}
          </li>
        ))}
      </ul>

      {/* Renderizar formularios condicionalmente */}
      {formularioActual === "crear__insumo" && <FormularioCrear />}
      {formularioActual === "editar__insumo" && <FormularioEditar />}
      {formularioActual === "eliminar__insumo" && <FormularioEliminar />}
    </>
  );
}

export default Menu;
