import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => count < stock && setCount(count + 1);
    const decrement = () => count > 1 && setCount(count - 1);

    return (
        <div className="item-count">
        <button onClick={decrement} className="btn btn-secondary">-</button>
        <span>{count}</span>
        <button onClick={increment} className="btn btn-secondary">+</button>
        <button onClick={() => onAdd(count)} className="btn btn-primary">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
