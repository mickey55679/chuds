import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ContactForm,
  Footer,
  Menu,
  Home,
  Login,
  NavigationBar,
  Checkout,
} from "./components/index";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (path) => {
    console.log("Navigating to:", path);
    setActiveLink(path);
    setIsOpen(false);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen); // This toggles the visibility of the menu
  };
    const removeFromCart = (title, id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigationBar
            activeLink={activeLink}
            handleClick={handleClick}
            handleToggle={handleToggle}
            isOpen={isOpen}
          />
          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
