import {useState} from 'react';

interface Props {
  elegir = (tema:string) => void;
  cancelar = () => void;
}

export default function Cabecera({elegir, cancelar}:Props){
  return (
    <>
      <h1 id="titulo"> {seccion} </h1>
      <ul className="temass_lista">
        <li onClick={elegir("insumos")} > Insumos</li>
        <li onClick={elegir("recetas")}> Recetas</li>
      </ul>
    </>
  );
}
