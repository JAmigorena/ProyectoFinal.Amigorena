// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto que envolverá toda la aplicación
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado del carrito

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Si el producto ya está en el carrito, aumentamos la cantidad
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si el producto no está en el carrito, lo agregamos
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Calcular el total de productos en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Proveer el carrito y las funciones a los componentes hijos
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);


