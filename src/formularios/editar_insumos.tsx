

export default function FormularioEditar() {
  return (
    <form className="formulario_insumos" id="editar__insumo">
      <fieldset>
        <legend>Editar un insumo del inventario</legend>

        <div className="campo_formulario">
          <label htmlFor="insumo__nombre_original">Nombre original del insumo:</label>
          <input
            type="text"
            id="insumo__nombre_original"
            name="insumo"
            required
            className="input_text"
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="editar__insumo_nombre">Nuevo nombre del insumo:</label>
          <input
            type="text"
            id="editar__insumo_nombre"
            name="nombre"
            className="input_text"
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="editar__insumo_cantidad">Cantidad total del insumo:</label>
          <input
            type="number"
            id="editar__insumo_cantidad"
            name="cantidad"
            className="input_number"
            min={0}
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="editar__insumo_cantidad_minima">Cantidad mínima del insumo:</label>
          <input
            type="number"
            id="editar__insumo_cantidad_minima"
            name="cantidad_minima"
            className="input_number"
            min={0}
          />
        </div>

        <div className="campo_formulario">
          <label htmlFor="editar__insumo_precio">Precio por kilo del insumo:</label>
          <input
            type="number"
            id="editar__insumo_precio"
            name="precio"
            className="input_number"
            step={0.01}
            min={0}
          />
        </div>

        <button type="submit" id="btn_editar__insumo" className="btn_submit">
          Guardar cambios
        </button>

        <div className="mensaje_respuesta oculto" aria-live="polite"></div>
      </fieldset>
    </form>
  );
}
