import { useState, useEffect } from "react";
import type { Insumo, InsumoValor, InsumoEditado } from "./contratos/tipos";
import { servicioDeInsumos } from "./contratos/servicio";

export function DespliegueDeEntidades(){
  //aqui se revisa la variable "busqueda" que tiende a ser "todos" pero puede recibir valores de la busqueda
  const [insumos, setInsumos] = useState<InsumoValor[]>([]);
  useEffect( () => {
    servicioDeInsumos.listar().then( async todos_insumos => {
      const resultados: InsumoValor[] = [];
      for (const insumo of todos_insumos){
        const valor = await servicioDeInsumos.valorInsumo(insumo);
        resultados.push(valor);
      }
      setInsumos(resultados);
    }).catch( error => console.log(`Error al listar insumos: ${error}`));
    
  }, []); 
  
  return (
    
      <div id="barra_entidades"> <ul> {insumos.map(insumo => (
        <Entidades key={insumo.id} insumo={insumo} />
      ))} </ul>
      </div> 
  );
}

function Entidades({insumo}: {insumo: InsumoValor}){
  let info = `Cantidad: ${insumo.cantidad}, \n Cantidad minima: ${insumo.cantidad_minima}.\n costo: ${insumo.precio}`;
  let imagen = "./img"; //de momento, ya luego implementamos las imagenes que se mostraran.
  return (
    <div>
      
      <img src={imagen} ></img> //agregar una funcion y lista de imagenes con el nombre de cada entidad para renderizar aqui con su src
      <div className="datos">
        <h1 className="insumo_nombre"> { insumo.nombre } </h1>
        <h1 className="descricion"> {info}
        </h1> 
        </div>
    </div>
  );
}




function Buscadorv1(){
  return (
    <form>
      <label> <input type="text" className="buscador insumos" name="nombreInsumo" requiered="true" > nombre de insumo </input> </label>
      <button> Buscar. </button>
    </form>
  //este pibe guarda el resultado de la busqueda en el estado.
  );

  
function Buscadorv2() {
  return (
    <form>
      <label htmlFor="nombreInsumo">Nombre de insumo:</label>
      <input
        type="text"
        className="buscador insumos"
        name="nombreInsumo"
        required
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
}



