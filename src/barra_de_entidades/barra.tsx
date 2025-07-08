import { useState, useEffect } from "react";
import { Buscador } from "./buscador";
import type { Servicio } from "../contratos/contratos";

export function BarraDeEntidades<T>(
  {servicio, render, obtenerKey}:
  {servicio: Servicio<T, U, V>;
    render: (e: T) => React.ReactNode;
    obtenerKey: (e: T) => string | number;
  }) {
  const [entidades, setEntidades] = useState<T[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect( () => {
    async function cargar() {
      try {
        const nombres =
        busqueda === ""
        ? await servicio.listar()
        : await servicio.buscarPorNombre(busqueda);
        const valores = await Promise.all(nombres.mensaje.map(servicio.valor));
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
      <ul>{entidades.length === 0? (<p> No se encontraron resultados</p>): (entidades.map(e =>
      <li key={obtenerKey(e)}>{render(e)}</li>)
    )}</ul>
      </div>
    </>
  )
}
