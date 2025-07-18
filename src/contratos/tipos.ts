export interface Entidad<T> {
  entidad: T,
  clase: string,
  obtenerNombre: (ent: T) => string,
  obtenerDescripcion: (ent: T) => string,
  obtenerImagen: (ent: T) => string,
}

export interface Insumo {
  nombre: string;
  cantidad: number;
  cantidad_minima: number;
  costo: number;
}

export interface InsumoEditado {
  nombre?: string,
  cantidad?: number,
  cantidad_minima?: number,
  precio?: number,
}

export interface InsumoValor {
  id: string,
  nombre: string,
  cantidad: number,
  cantidad_minima: number,
  precio: number
}

export interface Respuesta {
  ok: boolean;
  mensaje: string[];
}

export interface Lista {
  respuesta: string[];
}

