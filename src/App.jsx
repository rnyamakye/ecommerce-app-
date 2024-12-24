// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/Navbar";
import About from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Shop } from "./components/pages/Shop";
import SearchResults from "./components/pages/SearchResult";
import "./App.css";
import { Footer } from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/pages/Cart";
import { CheckoutPage } from "./components/pages/Checkout";
import OrderHistory from "./components/pages/OrderHistory";
import { OrderProvider } from "./components/OrderContext";
import ItemDetails from "./components/pages/itemDetails";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/category/:category" element={<Shop />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/item/:id" element={<ItemDetails />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
