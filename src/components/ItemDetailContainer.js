// src/components/ItemDetailContainer.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para obtener los parámetros de la URL
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"; // Importa la configuración de Firebase
import { useCart } from "../context/CartContext"; // Importa el contexto de carrito

const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtiene el id del producto desde la URL
    const { addToCart } = useCart(); // Función para agregar al carrito
    const [product, setProduct] = useState(null); // Estado para almacenar los detalles del producto

    useEffect(() => {
        // Función asincrónica para obtener los detalles de un producto
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "productos", id); // Referencia al documento del producto
                const docSnap = await getDoc(docRef); // Obtiene el documento
                if (docSnap.exists()) {
                    setProduct({
                        id: docSnap.id,
                        ...docSnap.data(),
                    });
                } else {
                    console.log("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error obteniendo producto: ", error); // Manejo de errores
            }
        };

        fetchProduct(); // Llama a la función para obtener los detalles del producto
    }, [id]); // Se ejecuta cada vez que el id cambie

    if (!product) {
        return <p>Cargando...</p>; // Muestra un mensaje mientras se cargan los detalles
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetailContainer;

