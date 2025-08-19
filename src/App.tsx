import { useState } from 'react';
import Cabecera from './cabecera/titulo';
import './App.css';
import PaginaInsumos from './paginas/insumos';
import PaginaRecetas from './paginas/recetas';
import PaginaUsuarios from './paginas/usuarios';


function App() {
  const [paginaActual, setPaginaActual] = useState('usuarios');

  const renderizarPagina = () =>  {
    switch (paginaActual) {
      case 'insumos':
        return <PaginaInsumos/>;
      case 'recetas':
        return <PaginaRecetas />;
      case 'usuarios':
        return <PaginaUsuarios />;
    }
  }
  
  return (
    <>
      <Cabecera onSeleccionar={setPaginaActual}/>
      {renderizarPagina()}
      
    </>
  )
}

export default App;
