import { useState } from 'react';
import type { InsumoValor} from '../contratos/tipos';
import { servicioDeInsumos } from '../servicios/servicio_insumos';
import BarraDeEntidades from '../barra_de_entidades/barra';
import EntidadVisual from '../barra_de_entidades/entidad';
import FormularioEditar from '../formularios/editar_insumos';
import FormularioCrear from '../formularios/crear_insumo';

export default function PaginaIndex() {
  const [entidadParaEditar, setEntidadParaEditar] = useState<string | null>(null);
  const [crear, setCrear] = useState<boolean>(false);
  return (
    <>
    <BarraDeEntidades<InsumoValor>
    servicio = {{
      crear: servicioDeInsumos.crear,
      listar: servicioDeInsumos.listar,
      buscarPorNombre: servicioDeInsumos.buscarPorNombre,
      valor: servicioDeInsumos.valor,
      editar: servicioDeInsumos.editar,
      eliminar: servicioDeInsumos.eliminar
    }}
    obtenerKey={(i) => i.nombre}
    render={(i) => (
      <EntidadVisual
      entidad={i}
    obtenerNombre={(x) => x.nombre}
    obtenerDescripcion={(x) => `cantidad: ${x.cantidad} \nCantidad minima: ${x.precio}`}
    obtenerImagen={(x) => `/img/insumos/${x.nombre}.png`}
    onEliminar={() => {
      servicioDeInsumos.eliminar(i.nombre);
    }}
    onEditar={() => setEntidadParaEditar(i.nombre)}
    key={i.id}
    clase='insumos'/>)}
    />
  {entidadParaEditar && (
   <FormularioEditar
   insumoNombre={entidadParaEditar}
 onSubmit={(datos) => {
   servicioDeInsumos.editar(entidadParaEditar, datos);
   setEntidadParaEditar(null);
 }}
onCerrar={() => setEntidadParaEditar(null)} />
  )}
  <button type="submit" onClick={setCrear(true)}>Crear</button>
  {crear && (
    <FormularioCrear
    onCrear={(datos) => {
      servicioDeInsumos.crear(datos);
      setCrear(false);
    }}
  onCerrar={() => setCrear(false)}/>
  )} 
  </>)
}

