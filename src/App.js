// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ContactForm,
  Footer,
  Menu,
  Home,
  NavigationBar,
  Checkout,
  Login,
  Register,
  Unauthorized,
} from "./components/index";
import AdminDash from "./components/AdminDash";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [items, setItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      // Check authentication and admin status from storage or API
      const token = localStorage.getItem("token");
      if (token) {
        // Simulate API call
        // const user = await simulateAuthCheck();
        setIsAuthenticated(true);
        // setIsAdmin(user.isAdmin);
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    const totalItems = Object.values(cartItems).reduce(
      (acc, curr) => acc + curr,
      0
    );
    setTotalItemsInCart(totalItems);
  }, [cartItems]);

  const handleClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const removeFromCart = (title, id) => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[id];
    setCartItems(updatedCartItems);
  };

  // Function to update authentication status
  const updateAuthStatus = (status, adminStatus) => {
    setIsAuthenticated(status);
    setIsAdmin(adminStatus);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Router>
            <NavigationBar
              activeLink={activeLink}
              handleClick={handleClick}
              handleToggle={handleToggle}
              isOpen={isOpen}
              totalItemsInCart={totalItemsInCart}
              isAuthenticated={isAuthenticated}
            />

            <Routes>
              <Route path="/" element={<Home handleClick={handleClick} />} />
              <Route
                path="/menu"
                element={
                  <Menu setCartItems={setCartItems} setItems={setItems} />
                }
              />
              <Route path="/contact" element={<ContactForm />} />
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
              <Route
                path="/login"
                element={<Login updateAuthStatus={updateAuthStatus} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/unauthorized" element={<div>Unauthorized</div>} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute
                    isAuthenticated={isAuthenticated}
                    isAdmin={isAdmin}
                  >
                    <AdminDash />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
        )}
        <Footer />
      </header>
    </div>
  );
}

// Simulate a function to check authentication and admin status
// async function simulateAuthCheck() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ isAdmin: true }); 
//     }, 1000);
//   });
// }

export default App;
