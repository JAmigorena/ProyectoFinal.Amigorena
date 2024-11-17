import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
    const { cart, totalPrice, clearCart } = useCart();
    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
        buyer: formData,
        items: cart,
        total: totalPrice,
        date: new Date(),
        };

        try {
        const docRef = await addDoc(collection(db, "orders"), order);
        setOrderId(docRef.id);
        clearCart();
        } catch (error) {
        console.error("Error al registrar la orden:", error);
        }
    };

    if (orderId) {
        return <div>Gracias por tu compra. ID de tu orden: {orderId}</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Finalizar compra</h2>
        <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit" className="btn btn-success">Confirmar compra</button>
        </form>
    );
};

export default CheckoutForm;
