import { useState } from 'react';
import Cabecera from './cabecera/titulo';
import './App.css';
import PaginaInsumos from './paginas/insumos';
import PaginaRecetas from './paginas/recetas';
import PaginaUsuarios from './paginas/usuarios';
import BarraDeUsuario from './cabecera/usuario'; 



function App() {
  const [usuario, setUsuario ]  = useState<string>('');
  const [_token, setToken]  = useState<String>('');
  function manejarUsuario(nombre: string, token: string) {
    setUsuario(nombre);
    setToken(token);
  }
  
  const [paginaActual, setPaginaActual] = useState('usuarios');

  const renderizarPagina = () =>  {
    switch (paginaActual) {
      case 'insumos':
        return <PaginaInsumos/>;
      case 'recetas':
        return <PaginaRecetas />;
      case 'usuarios':
        return <PaginaUsuarios guardarUsuario={(nombre, token) => manejarUsuario(nombre, token)  }/>;
    }
  }
  
  return (
    <>
      <BarraDeUsuario nombre={usuario} cerrarSesion={() => setUsuario('')} />
      <Cabecera onSeleccionar={setPaginaActual}/>
      {renderizarPagina()}
      
    </>
  )
}

export default App;
