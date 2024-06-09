import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ContactForm,
  Footer,
  Menu,
  Home,
  NavigationBar,
  Checkout,
  Login,
  Register,
  Admin
} from "./components/index";
import { useAuth } from "./auth/AuthContext";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [items, setItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const checkAdminRights = () => {
      setIsLoading(true);
      if (auth.user) {
        setIsAdmin(auth.user.role === "admin");
      } else {
        setIsAdmin(false);
      }
      setIsLoading(false);
    };

    checkAdminRights();
  }, [auth]);

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
            isAuthenticated={!!auth.user}
            user={auth.user}
            isAdmin={isAdmin}
          />
     
 <Routes>
  <Route path="/" element={<Home handleClick={handleClick} />} />
  <Route path="/menu" element={<Menu setCartItems={setCartItems} setItems={setItems} />} />
  <Route path="/contact" element={<ContactForm />} />
  <Route path="/checkout" element={<Checkout cartItems={cartItems} removeFromCart={removeFromCart} items={items} setCartItems={setCartItems} />} />
  <Route path="/admin" element={auth.user && isAdmin ? <Admin /> : <Navigate to="/" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>


        </Router>
      )}
      <Footer />
    </header>
  </div>
);

}

export default App;
