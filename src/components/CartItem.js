import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <div className="cart-item">
        <h4>{item.title}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
        <button onClick={() => removeItem(item.id)} className="btn btn-danger">Eliminar</button>
        </div>
    );
};

export default CartItem;
