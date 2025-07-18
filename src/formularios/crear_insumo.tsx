import { useRef } from 'react';
import type { Insumo } from '../contratos/tipos';

interface Props {
  onCrear: (datos: Insumo) => void;
  onCerrar?: () => void;
}



export default function FormularioCrear({onCrear, onCerrar}: Props) {
  const refForm = useRef<HTMLFormElement>(null);

  function CrearInsumo(e: React.FormEvent){
    e.preventDefault();
    const form = refForm.current;
    if (!form) return;

    const formInfo = FormData(form);

    const nombre = formInfo.get("nombre");
    const cantidad = Number(formInfo.get("cantidad"));
    const cantidad_minima = Number(formInfo.get("cantidad_minima"));
    const costo = Number(formInfo.get("costo"));
    if (!nombre) return;
    if (cantidad <= 0) return;
    if (cantidad_minima <= 0) return;
    if (costo <= 0) return;
    const datos:Insumo =  {
    nombre,
    cantidad,
    cantidad_minima,
    costo
  };
  onCrear(datos);
  }
  
  return (
    <form onSubmit={CrearInsumo} ref={refForm} className="formulario__crear" id="crear__insumo">
      <fieldset>
        <legend>Agregar un insumo al inventario</legend>

        <div className="campo_formulario">
          <label htmlFor="agregar__insumo_nombre">Nombre de insumo:</label>
          <input
            type="text"
            className="insumo__nombre"
            id="agregar__insumo_nombre"
            name="nombre"
            required
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="agregar__insumo_cantidad">Cantidad total del insumo:</label>
          <input
            type="number"
            className="insumo__cantidad"
            id="agregar__insumo_cantidad"
            name="cantidad"
            required
            min={0}
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="agregar__insumo_cantidad_minima">Cantidad mínima del insumo:</label>
          <input
            type="number"
            className="insumo__cantidad_minima"
            id="agregar__insumo_cantidad_minima"
            name="cantidad_minima"
            required
            min={0}
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="agregar__insumo_precio">Precio por kilo del insumo:</label>
          <input
            type="number"
            className="insumo__precio"
            id="agregar__insumo_precio"
            name="precio"
            required
            step={0.01}
            min={0}
          />
        </div>

        <button type="submit" id="btn_agregar__insumo" className="btn_submit">
          Agregar
        </button>
      {onCerrar && (
        <button type="button" onClick={onCerrar} className="btn_cancelar"> Cancelar </button>
      )}

        <div className="mensaje_respuesta oculto" aria-live="polite"></div>
      </fieldset>
    </form>
  );
}
