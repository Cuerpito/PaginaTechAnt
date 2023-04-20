import React from 'react';
import '../hoja-estilo-web/Productos.css';
import imagenInteligencia from '../imagenes-pagina/Inteligencia.png';
import imagenAutomatizacion from '../imagenes-pagina/automatizacion.png';
import imagenBigData from '../imagenes-pagina/bigData.png';

function Productos() {
	return (
        <div className='contenedor-productos'>
            <h1 className='titulo-productos'>NUESTROS PRODUCTOS</h1>
		    <div className='cuadro-inteligencia'>
				    <figure>
				    <img className="Inteligencia" src={imagenInteligencia} alt="Imagen inteligencia"></img>
				    	<div className='capa-inteligencia'>
					    	<h3>INTELIGENCIA ARTIFICIAL</h3>
						    <p>La inteligencia artificial (IA) es un conjunto de tecnologías que permiten que las computadoras realicen una variedad de funciones avanzadas, incluida la capacidad de ver, comprender y traducir lenguaje hablado y escrito, analizar datos, hacer recomendaciones y mucho más.</p>
					    </div>
				    </figure>
		    </div>

            <div className='cuadro-automatizacion'>
				    <figure>
				    <img className="Automatizacion" src={imagenAutomatizacion} alt="Imagen automatizacion"></img>
				    	<div className='capa-automatizacion'>
					    	<h3>AUTOMATIZACION</h3>
						    <p>El principal objetivo de la automatización de procesos es mejorar el progreso del flujo de trabajo en una organización. Con la automatización, es posible reducir costos, tiempo, desperdicio, aumentar la productividad, minimizar fallas y controlar, en tiempo real, todos los procesos comerciales.</p>
					    </div>
				    </figure>
		    </div>

            <div className='cuadro-big'>
				    <figure>
				    <img className="BigData" src={imagenBigData} alt="Imagen BigData"></img>
				    	<div className='capa-big'>
					    	<h3>BIG DATA</h3>
						    <p>El big data describe grandes volúmenes de datos, difíciles o imposibles de procesar a través de métodos tradicionales, que sirven para obtener ideas y tomar mejores decisiones de negocios.</p>
					    </div>
				    </figure>
		    </div>
        </div>
	);
}

export default Productos