import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FaBars, FaTimes } from "react-icons/fa";
import "../hoja-estilo-web/LogoMenusDos.css";
import imagenLogoTech from '../imagenes-pagina/TechAnt.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="LogoMenuDos">
			<img className="ImagenLogoTe" src={imagenLogoTech} alt="Imagen logo TechAnt"/>
			<nav ref={navRef}>
				<a href="/">INICIO</a>
				<a href="/">QUIENES SOMOS</a>
				<a href="/">NUESTROS CLIENTES</a>
				<a href="/">BLOG</a>
				<a href="/">TRABAJA CON NOSOTROS</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar