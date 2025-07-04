import type { Insumo, InsumoValor, InsumoEditado } from "./contratos/tipos";
import { servicioDeInsumos } from "./contratos/servicio";

export function DespliegueDeEntidades(){
  let todos = servicioDeInsumos.listar();
  let insumos: InsumoValor[];
  for insumo in todos{
    let nuevo_insumo = servicioDeInsumos.valorInsumo(insumo);
    insumos.add(nuevo_insumo);
  }
  const listaInsumos = insumos.map(insumo => Entidades(insumo));
  return (
    <>
      <div id="barra_entidades"> <ul> {listaInsumos} </ul>
      </div> 
    </>
  );
}

function Entidades(insumo: InsumoValor){
  let info = `Cantidad: ${insumo.cantidad}, \n Cantidad minima: ${insumo.cantidad_minima}.\n costo: ${insumo.precio}`;
  return (
    <div>
      <img src=imagen ></img> //agregar una funcion y lista de imagenes con el nombre de cada entidad para renderizar aqui con su src
      <div className="datos">
        <h1 className="insumo_nombre"> { insumo.nombre } </h1>
        <h1 className="descricion"> {info}
        </h1> 
        </div>
    </div>
  );
}




function Buscador(){
  return (
    
  );
}
//Buscador
//
// Entidades
//
// barra de entidades
//
// 
