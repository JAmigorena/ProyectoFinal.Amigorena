// src/components/ItemListContainer.js
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; // Importa la configuración de Firebase
import { useCart } from "../context/CartContext"; // Importa el contexto de carrito

const ItemListContainer = () => {
    const { addToCart } = useCart(); // Accede a la función para agregar productos al carrito
    const [products, setProducts] = useState([]); // Estado para almacenar la lista de productos

    useEffect(() => {
        // Función asincrónica para obtener los productos de Firestore
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "productos"));
                const productList = querySnapshot.docs.map(doc => ({
                    id: doc.id, // Obtiene el id de cada documento
                    ...doc.data(), // Agrega los datos del documento
                }));
                setProducts(productList); // Actualiza el estado con la lista de productos
            } catch (error) {
                console.error("Error obteniendo productos: ", error); // Manejo de errores
            }
        };

        fetchProducts(); // Llama a la función para obtener los productos
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;


