
import { useState } from "react";

export function Menu() {
  const [formularioActual, setFormularioActual] = useState(null);

  return (
    <ul className="menu_lista">
      <li
        className="menu_ls_item insumos"
        data-formulario="crear__insumo"
        onClick={(e) => setFormularioActual(e.target.getAttribute("data-formulario"))}
      >
        Crear insumo
      </li>
      <li
        className="menu_ls_item insumos"
        data-formulario="buscar__insumo"
        onClick={(e) => setFormularioActual(e.target.getAttribute("data-formulario"))}
      >
        Buscar insumos
      </li>
      <li
        className="menu_ls_item insumos"
        data-formulario="insumos_todos"
        onClick={(e) => setFormularioActual(e.target.getAttribute("data-formulario"))}
      >
        Ver todos los insumos
      </li>
      <li
        className="menu_ls_item insumos"
        data-formulario="valor_insumo"
        onClick={(e) => setFormularioActual(e.target.getAttribute("data-formulario"))}
      >
        Ver el valor de un insumo
      </li>
      <li
        className="menu_ls_item insumos"
        data-formulario="editar__insumo"
        onClick={(e) => setFormularioActual(e.target.getAttribute("data-formulario"))}
      >
        Editar un insumo
      </li>
      <li
        className="menu_ls_item insumos"
        data-formulario="eliminar__insumo"
        onClick={(e) => setFormularioActual(e.target.getAttribute("data-formulario"))}
      >
        Eliminar un insumo
      </li>
    </ul>
  );
}

/* en el contenedor lo podriamos llamar con algo como:
{formularioActual === "crear__insumo" && <FormularioCrear />}
{formularioActual === "buscar__insumo" && <FormularioBuscar />}
 Y así con los demás formularios */
