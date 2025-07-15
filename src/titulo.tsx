import {useState} from 'react';

interface Props {
  seccion: string,
  elegir: (tema:string) => void;
  cancelar: () => void;
}

export default function Cabecera({ seccion, elegir}:Props){
  return (
    <>
      <h1 id="titulo"> {seccion} </h1>i
      <ul className="temass_lista">
        <li onClick={elegir("insumos")} > Insumos</li>
        <li onClick={elegir("recetas")}> Recetas</li>
      </ul>
    </>
  );
}
