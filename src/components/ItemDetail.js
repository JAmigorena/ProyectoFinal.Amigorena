import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const { addItem } = useCart();

    const onAdd = (quantity) => {
        addItem(product, quantity);
        setAddedToCart(true);
    };

    return (
        <div className="item-detail">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>
        {!addedToCart ? (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        ) : (
            <div>
            <p>Producto agregado al carrito</p>
            <button className="btn btn-success">Seguir comprando</button>
            </div>
        )}
        </div>
    );
};

export default ItemDetail;
