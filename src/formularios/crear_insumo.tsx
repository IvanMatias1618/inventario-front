

export default function FormularioCrear() {
  return (
    <form className="formulario__crear" id="crear__insumo">
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

        <div className="mensaje_respuesta oculto" aria-live="polite"></div>
      </fieldset>
    </form>
  );
}
