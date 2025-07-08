import type { Insumo, InsumoValor, InsumoEditado, Respuesta} from "../contratos/tipos.ts";
import type { Servicio } from "../contratos/contratos.ts";

const url_base = 'http://127.0.0.1:8080/insumos';


export const servicioDeInsumos: Servicio<Insumo, InsumoEditado, InsumoValor> = {
  async crear(datos: Insumo): Promise<Respuesta> {
    try {
      const res = await fetch(`${url_base}/crear`, {
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
    const respuesta = await fetch(`${url_base}/buscar?consulta=${encodeURIComponent(nombre)}`);
    if (!respuesta.ok){
      return {
        ok: false,
        mensaje: [`Error al buscar el insumo ${nombre}`]     
      };
    }
    return {
      ok: true,
      mensaje: [String(respuesta.json())]
    }
  },

  async listar(): Promise<Respuesta>{
    const respuesta = await fetch(`${url_base}/todos`);
    if (!respuesta.ok){
      return {
        ok: false,
        mensaje: ["Error al listar los insumos"]
      };
    }
    return {
      ok: true,
      mensaje: [String(respuesta.json())]
    };
  },

  async valor(nombre: string): Promise<InsumoValor>{
    const respuesta = await fetch(`${url_base}/valor?consulta=${encodeURIComponent(nombre)}`);
    if (!respuesta.ok) throw new Error(`Error al buscar el insumo ${nombre}`);
    const info: InsumoValor = await respuesta.json();
    return info;
  },

  async editar(nombre: string, datos: InsumoEditado): Promise<Respuesta>{
    const res = await fetch(`${url_base}/editar/${encodeURIComponent(nombre)}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(datos),
    });
    const texto = await res.text();
    
    if (!res.ok) {
      
      return {
        ok: false,
        mensaje: [texto]
      };
    }
    return {
      ok: true,
      mensaje: [texto]
    };
  },

  async eliminar(nombre: string): Promise<Respuesta> {
      const res = await fetch(`${url_base}/${encodeURIComponent(nombre)}`, {
        method: 'DELETE',
      });
      const texto = await res.text();
      if (!res.ok) {
        return {
          ok: false,
          mensaje: [texto]
        };
      }
      return {
        ok: true,
        mensaje: [texto]
      };
  },
  
}
