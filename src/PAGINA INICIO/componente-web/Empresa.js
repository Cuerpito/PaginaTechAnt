import React from 'react';
import '../hoja-estilo-web/Empresa.css';
import imagenHacemos from '../imagenes-pagina/hacemos.png';

function Empresa() {
    return(
        <div className='contenedor-empresa'>
            <h3 className='Que-hacemos'>¿ QUE HACEMOS PARA TRANSFORMAR EL MUNDO ?</h3>
            <h6 className='Text-Que-hacemos'>TECH ANT se dedica a automatizar procesos de software que pueden ser repetitivos y consumir muchos recursos humanos. Con esto, mejoramos la eficiencia y el rendimiento de dichos procesos. Nos especializamos en la lectura rápida de grandes cantidades de documentos, la generación de certificados a partir de información pública en internet y la aplicación de soluciones personalizadas para satisfacer las necesidades específicas de nuestros clientes.La implementación de big data nos permite gestionar eficientemente el flujo de información requerido para este tipo de procesos, y nos permite ejecutar tareas con un rendimiento optimizado que solo es posible mediante el uso de procesos de inteligencia artificial.</h6>
            <img className='imagenHacer' src={imagenHacemos} alt='imagen hacemos'></img>
        </div>
    );

}

export default Empresa;