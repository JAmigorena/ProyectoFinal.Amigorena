// src/components/CartWidget.js
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { totalItems } = useCart(); // Acceder al número total de artículos en el carrito

    return (
        <Link to="/cart" className="cart-widget">
            🛒 {totalItems > 0 && <span>({totalItems})</span>}
        </Link>
    );
};

export default CartWidget;
