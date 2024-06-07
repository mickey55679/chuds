import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  ContactForm,
  Footer,
  Menu,
  Home,
  NavigationBar,
  Checkout,
} from "./components/index";
import Admin from "./components/Admin";
import CheckToken from "./components/checkToken";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [items, setItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState([]);
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        if (isAuthenticated && user) {
          console.log("Email Verified:", user.email_verified);
          console.log("User:", user);
          const idTokenClaims = await getIdTokenClaims();
          console.log("ID Token Claims:", idTokenClaims);
          const rolesClaim = idTokenClaims["https://chuds.com/roles"];
          console.log("Roles Claim:", rolesClaim);
          setRoles(rolesClaim || []);
        } else {
          console.log("User is not authenticated or user object is undefined");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [getIdTokenClaims, isAuthenticated, user]);

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
        <Router>
          <NavigationBar
            activeLink={activeLink}
            handleClick={handleClick}
            handleToggle={handleToggle}
            isOpen={isOpen}
            totalItemsInCart={totalItemsInCart}
            isAuthenticated={isAuthenticated}
            user={user}
            isLoading={isLoading}
          />

          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} />
            <Route
              path="/menu"
              element={<Menu setCartItems={setCartItems} setItems={setItems} />}
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
            <Route path="/checktoken" element={<CheckToken />} />

            <Route
              path="/admin"
              element={
                isAuthenticated && roles.includes("admin") ? (
                  <Admin />
                ) : (
                  <Navigate to="/" replace />
                )
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
