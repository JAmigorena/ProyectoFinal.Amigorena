import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
      <CartProvider>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
      </CartProvider> 
    );
};

export default App;

