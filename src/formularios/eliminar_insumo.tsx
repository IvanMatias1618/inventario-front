

export default function FormularioEliminar() {
  return (
    <form className="formulario_insumos" id="eliminar__insumo">
      <fieldset>
        <legend>Buscar en insumos:</legend>

        <div className="campo_formulario">
          <label htmlFor="buscar__insumo_nombre">Nombre del insumo a eliminar:</label>
          <input
            type="text"
            className="insumo__nombre"
            id="buscar__insumo_nombre"
            name="nombre"
            required
          />
        </div>

        <button type="submit" id="btn_eliminar__insumo" className="btn_submit">
          Eliminar
        </button>

        <div className="mensaje_respuesta oculto" aria-live="polite"></div>
      </fieldset>
    </form>
  );
}
