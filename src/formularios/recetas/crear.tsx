import { useState } from 'react';
import type { Receta } from '../../contratos/tipos';
import IngredienteFormulario from './ingrediente';
import type { Ingrediente } from '../../contratos/tipos';

interface Props {
  ingredientesDisponibles: string[];
  onCrear: (datos: Receta) => void;
  onCerrar?: () => void;
}

const RecetaForm: React.FC<Props> = ({ ingredientesDisponibles, onCrear, onCerrar }) => {
  const [nombre, setNombre ] = useState<string>('');
  const [ ingredientes, setIngredientes ] = useState<Ingrediente[]>([]);
  const [ ingredienteForm, setIngredienteForm ] = useState<boolean>(false);
  const [ editadoIngrediente, setEditadoIngrediente ] = useState<Ingrediente | null>(null);
  
  const agregarIngrediente = ( ingrediente: Ingrediente ) => {
    setIngredientes([...ingredientes, ingrediente]);
    setIngredienteForm(false);
  };

  const eliminarIngrediente = (nombre: string) => {
    setIngredientes(ingredientes.filter(i => i.nombre !== nombre));
  };

  const editarIngrediente = (actualizado: Ingrediente) => {
    setIngredientes(ingredientes.map(i => i.nombre === actualizado.nombre ? actualizado: i));
    setEditadoIngrediente(null);
    setIngredienteForm(false);
  };

  const ingredientesUsados = ingredientes.map(i => i.nombre);
  const ingredientesRestantes = ingredientesDisponibles.filter(i => !ingredientesUsados.includes(i));
  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const receta: Receta = {
      nombre: nombre,
      ingredientes,
    };
    onCrear(receta);
  };

  return (
    <form onSubmit={manejarSubmit} className="recetas crear">
      <h2>Receta</h2>
      <input
        type="text"
        placeholder="Nombre de la receta."
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <h3>Ingredientes </h3>
      <ul>
        {ingredientes.map((i, idx) => (
          <li key={i.nombre}>
            {idx + 1}) {i.nombre}: {i.cantidad} grs
            <button type="button" onClick={() => {
              setEditadoIngrediente(i);
              setIngredienteForm(true);
            }}>Editar</button>
            <button type="button" onClick={() => eliminarIngrediente(i.nombre)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {ingredienteForm ? (
        <IngredienteFormulario
        opciones={ingredientesRestantes}
        onSubmit={editadoIngrediente ? editarIngrediente : agregarIngrediente}
        onCancelar={() => {
          setIngredienteForm(false);
          setEditadoIngrediente(null);
        }}
        inicial={editadoIngrediente}
        />
      ) : (
        ingredientesRestantes.length > 0 && (
          <button type="button" onClick={() => setIngredienteForm(true) }>
            Agregar Ingrediente
          </button>
        )
      )}
      <br/>
      <button type="submit" className="submit recetas">Crear receta </button>
      <button type="button" onClick={onCerrar} className="recetas cancelar"> Cancelar</button>
    </form>
  );
};

export default RecetaForm;
