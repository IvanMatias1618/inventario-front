import { useRef, useState } from 'react';
import type { Receta } from '../../contratos/tipos';

interface Props {
  onCrear: (datos: Receta) => void;
  onCerrar?: ()  => void;
}

interface Ingrediente {
  nombre: string;
  cantidad: number;
}

export default function FormularioCrear( {onCrear, onCerrar}: Props){
  const refForm = useRef<HTMLFormElement>(null);
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([{nombre: '',cantidad: 0}]);

  const manejarCambio = (index: number, campo: keyof Ingrediente, valor: string) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index][campo]= valor;
    
  }
  
  function CrearReceta(e: React.FormEvent) {
    e.preventDefault();
    const form = refForm.current;
    if (!form) return;

    const formInfo = new FormData(form);

    const  nombre = formInfo.get("nombre") as string;
    
  }
}
