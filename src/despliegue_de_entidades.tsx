
import { useState, useEffect } from "react";
import type { InsumoEditado } from "./contratos/tipos";
/** 🔍 Buscador que comunica el input al componente padre */
export function Buscador({ onBuscar }: { onBuscar: (valor: string) => void }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault(); // No recarga la página
      }}
    >
      <label htmlFor="nombreEntidad">Buscar:</label>
      <input
        type="text"
        name="nombreEntidad"
        className="buscador entidad"
        onChange={e => onBuscar(e.target.value)}
        placeholder="Escribe para buscar..."
        required
      />
      <button type="submit">🔎</button>
    </form>
  );
}

/** 🎨 Componente visual para pintar cualquier entidad */
export function EntidadVisual<T>({
  entidad,
  getNombre,
  getDescripcion,
  getImagen
}: {
  entidad: T;
  getNombre: (e: T) => string;
  getDescripcion: (e: T) => string;
  getImagen?: (e: T) => string;
}) {
  const nombre = getNombre(entidad);
  const descripcion = getDescripcion(entidad);
  const imagen = getImagen
    ? getImagen(entidad)
    : `/img/${nombre.toLowerCase()}.png`; // Default dinámico

  return (
    <div className="entidad">
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      <div className="datos">
        <h1 className="entidad_nombre">{nombre}</h1>
        <pre className="descripcion">{descripcion}</pre>
      </div>
    </div>
  );
}

/** 🧬 Componente principal que carga, busca y despliega entidades */
export function BarraDeEntidades<T>({
  servicio,
  render,
  getKey
}: {
  servicio: {
    listar: () => Promise<string[]>;
    buscar: (query: string) => Promise<string[]>;
    valor: (nombre: string) => Promise<T>;
    editar: (nombre: string, datos: InsumoEditado) => Promise<void>;
    eliminar: (nombre:string) => Promise<void>;
  };
  render: (e: T) => React.ReactNode;
  getKey: (e: T) => string | number;
}) {
  const [entidades, setEntidades] = useState<T[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function cargar() {
      try {
        const nombres =
          busqueda === ""
            ? await servicio.listar()
            : await servicio.buscar(busqueda);

        const valores = await Promise.all(nombres.map(servicio.valor));
        setEntidades(valores);
      } catch (error) {
        console.log("Error al cargar entidades:", error);
      }
    }
    cargar();
  }, [busqueda]);

  return (
    <>
      <Buscador onBuscar={setBusqueda} />
      <div className="barra_entidades">
        <ul>
          {entidades.length === 0 ? (
            <p>No se encontraron resultados 😔</p>
          ) : (
            entidades.map(e => <li key={getKey(e)}>{render(e)}</li>)
          )}
        </ul>
      </div>
    </>
  );
}
