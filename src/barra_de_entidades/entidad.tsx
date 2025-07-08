import type { Entidad } from "../contratos/tipos";

export function EntidadVisual<T>({ entidad, clase, obtenerNombre, obtenerDescripcion, obtenerImagen}: Entidad<T>){
  const nombre = obtenerNombre(entidad);
  const descripcion = obtenerDescripcion(entidad);
  const imagen = obtenerImagen ? obtenerImagen(entidad) : `/img/${nombre.toLowerCase()}.png`;
  return (
    <div className={`entidad ${clase}`}>
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      <div className="datos"> <h1 className={`nombre ${clase}`} >{nombre}</h1>
        <p className={`descripcion ${clase}`}> {descripcion} </p>
        </div>
      </div>
  );
}
