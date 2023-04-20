import React from 'react';
import './AppInicio.css';
import EncabezadoPagina from './componente-web/encabezado';
/*import LogoMenus from './componente-web/LogoMenus';*/
import LogoMenusDos from './componente-web/LogoMenusDos';
import fondo from './imagenes-pagina/FondoPagina.png';
import Productos from './componente-web/Productos';
import Empresa from './componente-web/Empresa';
import PiePagina from './componente-web/PiePagina';
import Contacto from './componente-web/Contacto';

function AppInicio() {
  return (
    <div className='PaginaWeb'>
      <img className='img-Pagina' src={fondo} alt="imagen fondo"></img>
      <EncabezadoPagina />
      <Productos />
      <Contacto />
      <Empresa />
      <LogoMenusDos />
      <PiePagina />
    </div>
  );
}

export default AppInicio;