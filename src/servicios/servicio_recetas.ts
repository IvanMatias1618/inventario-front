import type { Receta, RecetaEditada, RecetaValor, Respuesta} from '../contratos/tipos';
import type { Servicio } from '../contratos/contratos.ts';
import type { RECETAS_URL} from '../../urls';

export const servicioDeRecetas: Servicio<Receta, RecetaEditada, RecetaValor> = {
  async crear(datos: Receta): Promise<Respuesta> {
    try {
      const res = await fetch(`${RECETAS_URL}/crear`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datos)
      });
      const json = await res.json().catch( () => ({
        ok: false,
        mensaje: ["No se pudo completar la operacion."]
      }));
      return {
        ok: res.ok,
        mensaje: json?.mensaje ?? (!res.ok ? ['Error Desconocido']: undefined)
      };
    } catch (error) {
      return {
        ok: false,
        mensaje: [error instanceof Error ? error.message : String(error)]
      };
    }
  },
  async buscarPorNombre(nombre: string): Promise<Respuesta> {
    const respuesta = await fetch(`${RECETAS_URL}/buscar?consulta=${encodeURIComponent(nombre)}`);
    if(!respuesta.ok){
      return {
        ok: false,
        mensaje: [`Error al buscar el insumo ${nombre}`]
      };
    }
    const datos = await respuesta.json();
    return {
      ok: true,
      mensaje: [datos],
    }
  },

  async listar(): Promise<Respuesta> {
    const respuesta = await fetch(`${RECETAS_URL}/todas`);
    if (!respuesta.ok) {
      return {
        ok: false,
        mensaje: ["error al listar los insumos"]
      };
    }
    const json = await respuesta.json();
    return {
      ok: true,
      mensaje:json
    };
  },

  async valor(nombre: string): Promise<RecetaValor> {},
  async editar(nombre: string, datos: RecetaEditada): Promise<Respuesta> {},
  async eliminar(nombre: string): Promise<Respuesta> {}
}
