import React from "react";
import { useHistory } from 'react-router-dom';
import imagenWhatsapp from '../imagenes-pagina/WhatsApp.png';
import imagenLinkedln from '../imagenes-pagina/Linkedln.png';
import imagenCelular from '../imagenes-pagina/Telefono.png';
import imagenCorreo from '../imagenes-pagina/Correo.png';
import '../hoja-estilo-web/encabezado.css';
import 'font-awesome/css/font-awesome.min.css'



function EncabezadoPagina() {

  const historyBotonSesion = useHistory();
  const historyBontonRegistro = useHistory();

  return (
    <div className="Redes-Info-Login">
      <a href="https://api.whatsapp.com/send/?phone=%2B573145051500&text&type=phone_number&app_absent=0">
        <button className="Boton-WhatsApp"> 
          <img className="imgWhatsApp" src={imagenWhatsapp} alt="Imagen WhatsApp" />
        </button>
      </a>
      <a href="https://www.linkedin.com/company/tech-anthispan/">
        <button className="Boton-Linkedln"> 
          <img className="imgLinkedln" src={imagenLinkedln} alt="Imagen Linkedln" />
        </button>
      </a>
      <label className="textoCelular"> +57 3218560842</label>
      <img className="imgCelular" src={imagenCelular} alt="Imagen Celular" />
      <label className="textoCorreo"> info@techant.com</label>
      <img className="imgCorreo" src={imagenCorreo} alt="Imagen Correo" />
      <button className="Sesion" onClick={() => historyBotonSesion.push('/')}>Iniciar sesión</button>
      <button className="Registro"onClick={() => historyBontonRegistro.push('/')}>Registrarse</button>
    </div>

   
  );
}

export default EncabezadoPagina;
