// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

    const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="logo">
            <Link to="/">Mi Tienda</Link>
        </div>
        <div className="navbar-nav">
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link> {/* Ahora este enlace lleva a la galería de arte */}
            <Link to="/contacto">Contacto</Link>
        </div>
        <div className="cart-container">
            <CartWidget />
        </div>
        </nav>
    );
};

export default Navbar;




