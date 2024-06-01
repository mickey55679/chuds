import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ContactForm,
  Footer,
  Menu,
  Home,
  LoginButton,
  LogoutButton,
  NavigationBar,
  Checkout,
} from "./components/index";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [items, setItems] = useState([]);

  const handleClick = (path) => {
    console.log("Navigating to:", path);
    setActiveLink(path);
    setIsOpen(false);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen); // This toggles the visibility of the menu
  };
  const removeFromCart = (title, id) => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[id]; // Delete the item from the object by key
    setCartItems(updatedCartItems);
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
            <Route
              path="/menu"
              element={<Menu setCartItems={setCartItems} setItems={setItems} />}
            />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<LoginButton />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  items={items}
                  setCartItems={setCartItems}
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
