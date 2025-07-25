import type { Insumo, InsumoValor } from './tipos.ts';
import type { InsumosConsulta } from './contratos.ts';

const url_base = 'http://127.0.0.1:8080/insumos';
export const servicioDeInsumos: InsumosConsulta = {
  async crear(datos: Insumo): Promise<Response> {
    return fetch(`${url_base}/crear`,
      {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });
  },
  async buscarPorNombre(nombre: string): Promise<string[]> {
    const respuesta = await fetch(`${url_base}/buscar?consulta=${encodeURIComponent(nombre)}`);
    if (!respuesta.ok) throw new Error('Error al buscar insumo');
    return respuesta.json();
  }, async listar(): Promise<string[]> {
    const respuesta = await fetch(`${url_base}/todos`);
    if (!respuesta.ok) throw new Error('Error al listar insumos');
    return respuesta.json();
  },
  async valorInsumo(nombre: string): Promise<InsumoValor> {
    const respuesta = await fetch(`${url_base}/valor?consulta=${encodeURIComponent(nombre)}`);
    if (!respuesta.ok) throw new Error(`Error al buscar el insumo ${nombre}`);
    const info: InsumoValor = await respuesta.json();
    return info;
  },
  async editarInsumo(nombre, datos) {
    const res = await fetch(`${url_base}/editar/${nombre}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error al editar: ${res.status} ${text}`);
    }
    // devolvemos void
  },

  async eliminarInsumo(nombre) {
    const res = await fetch(`${url_base}/${encodeURIComponent(nombre)}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error al eliminar: ${res.status} ${text}`);
    }
  },
};
