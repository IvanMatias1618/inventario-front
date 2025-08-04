import { useState, useEffect } from "react";
import { Buscador } from "./buscador";
import type { Servicio } from "../contratos/contratos";
import "./estilos.css";

export default function BarraDeEntidades<Valor>(
  {servicio, render, obtenerKey}:
  {servicio: Servicio<Crear,Editar,Valor>;
    render: (e: Valor) => React.ReactNode;
    obtenerKey: (e: Valor) => string | number;
  }) {
  const [entidades, setEntidades] = useState<Valor[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect( () => {
    async function cargar() {
      try {
        const nombres =
        busqueda === ""
        ? await servicio.listar()
        : await servicio.buscarPorNombre(busqueda);
        const valores = await Promise.all(nombres.mensaje.map(servicio.valor));
        /*const valores = await Promise.all(nombres.mensaje.map(servicio.valor));*/
        setEntidades(valores);
      } catch(error) {
        console.log("Error al cargar las entidades:", error);
      }
    }
    cargar();
  }, [busqueda]);
  return (
    <>
    <Buscador onBuscar={setBusqueda} />
    <div className="barra_de_entidades">
      <ul id="lista_de_entidades" >{entidades.length === 0? (<p> No se encontraron resultados</p>): (entidades.map(e =>
      <li className="entidad_item" key={obtenerKey(e)}>{render(e)}</li>)
    )}</ul>
      </div>
    </>
  )
}

