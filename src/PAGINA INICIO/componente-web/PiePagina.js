import React from 'react';
import '../hoja-estilo-web/PiePagina.css';
import imagenPieLogo from '../imagenes-pagina/TechAnt.png';

function PiePagina() {
    return(
        <div className='contenedor-PiePagina'>
            <img className='imgPiePagina' src={imagenPieLogo} alt='imagen pie pagina'></img>
            <h5 className='lineas'>2023 © Derechos reservados</h5>
        </div>
    );

}

export default PiePagina;