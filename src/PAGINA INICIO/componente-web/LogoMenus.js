import React from 'react';
import '../hoja-estilo-web/LogoMenus.css';

function LogoMenus(){
return(
  <body>
    <header>
      <nav className='nav'>
        <div className='logo'>TECH ANT</div>
        <ul className='menu'>
          <li><a href="/CONSTRUCCION">Inicio</a></li>
          <li><a href="/CONSTRUCCION">Quienes somos</a></li>
          <li><a href="/CONSTRUCCION">Nuestros clientes</a></li>
          <li><a href="/CONSTRUCCION">Trabaja con nostros</a></li>
        </ul>
      </nav>
    </header>
  </body>
		
  );
}

export default LogoMenus;