import React, { useState, useEffect } from 'react';
import type {Ingrediente} from '../../contratos/tipos';

interface  Props {
  opciones: string[];
  onSubmit: (ingrediente: Ingrediente) => void;
  onCancelar: () => void;
  inicial?: Ingrediente | null;
}

const IngredienteFormulario: React.FC<Props> = ({ opciones, onSubmit, onCancelar,  inicial = null,}) => {
  const [nombre, setNombre] = useState<string>(inicial?.nombre || opciones[0] || '');
  const [cantidad, setCantidad] = useState<number>(inicial?.cantidad || 0);

  useEffect(() => {
    if (inicial) {
      setNombre(inicial.nombre);
      setCantidad(inicial.cantidad);
    }
  }, [inicial]);

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || cantidad <= 0 ) return;
    onSubmit ({ nombre, cantidad});
  };
  
  return (
    <form onSubmit={manejarSubmit} className="recetas crear">
    <h4>{inicial ? 'Editar Ingrediente' : 'Agregar Ingrediente'}</h4>
    <select value={nombre} onChange={(e) => setNombre(e.target.value)} disabled={!!inicial}>
      {opciones.map((op) => (
        <option key={op} value={op}>{op}</option>
      ))};
    </select>
    <input
    type="number"
    placeholder="Cantidad en gramos."
    value={cantidad}
    onChange={(e) => setCantidad(Number(e.target.value))}
    required
    min={1}
    />
    <button type="submit">{inicial ? 'Actualizar' : 'Agregar'}</button>
    <button type="button" onClick={onCancelar}>Cancelar</button>
    </form> 
  
  )
}

export default IngredienteFormulario;
