// src/components/Cart.js
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart(); // Obtener los productos en el carrito

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default Cart;

