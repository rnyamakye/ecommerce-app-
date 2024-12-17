import { Home } from "./components/pages/Home";
import { Navbar } from "./components/Navbar";
import About from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Shop } from "./components/pages/Shop";

function App() {
  return (
    <Router>
      <nav className="relative w-[100vw] h-[100px]">
        <Navbar />
      </nav>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
