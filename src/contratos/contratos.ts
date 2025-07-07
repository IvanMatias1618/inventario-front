import type { Insumo, InsumoEditado, InsumoValor } from './tipos.ts';

export interface InsumosConsulta {
  crear: (insumo: Insumo) => Promise<Response>;
  buscarPorNombre: (nombre: string) => Promise<string[]>;
  listar: () => Promise<string[]>;
  valorInsumo: (nombre: string) => Promise<InsumoValor>;
  editarInsumo: (nombre: string, datos: InsumoEditado) => Promise<void>;
  eliminarInsumo: (nombre: string) => Promise<void>
}


