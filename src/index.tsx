
// src/index.tsx

import React, { useState } from "react";
import type { InsumoValor } from "./contratos/tipos.ts";
import { BarraDeEntidades, EntidadVisual, FormularioEditar } from "./despliegue_de_entidades.tsx";
import { servicioDeInsumos } from "./contratos/servicio.ts";

export default function IndexPage() {
  const [aEditar, setAEditar] = useState<InsumoValor | null>(null);

  return (
    <>
      {aEditar && (
        <FormularioEditar<InsumoValor>
          entidad={aEditar}
          getKey={(i) => i.nombre}
          getNombre={(i) => i.nombre}
          getDescripcion={(i) => i.descripcion}
          servicio={{
            editar: servicioDeInsumos.editarInsumo,
            eliminar: servicioDeInsumos.eliminarInsumo
          }}
          onClose={() => setAEditar(null)}
          onUpdated={() => setAEditar(null)}
        />
      )}

      <BarraDeEntidades<InsumoValor>
        servicio={{
          listar: servicioDeInsumos.listar,
          buscar: servicioDeInsumos.buscarPorNombre,
          valor: servicioDeInsumos.valorInsumo,
          editar: servicioDeInsumos.editarInsumo,
          eliminar: servicioDeInsumos.eliminarInsumo
        }}
        getKey={(i) => i.nombre}
        render={(i) => (
          <EntidadVisual
            entidad={i}
            getNombre={(x) => x.nombre}
            getDescripcion={(x) =>
              JSON.stringify(
                {
                  Cantidad: x.cantidad,
                  "Cantidad mínima": x.cantidad_minima,
                  Costo: x.precio
                },
                null,
                2
              )
            }
            getImagen={(x) => `/img/insumos/${x.id}.png`}
            onEditar={() => setAEditar(i)}
            onEliminar={() => {
              servicioDeInsumos.eliminarInsumo(i.nombre).then(() => {
                // refrescar o notificar
              });
            }}
          />
        )}
      />
    </>
  );
}
