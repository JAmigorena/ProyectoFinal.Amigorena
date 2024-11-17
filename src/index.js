import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Importa CartProvider
import "./index.css";
import "./styles/styles.css"; // Cambia el nombre del archivo si es necesario

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
