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
} from "./components/index";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigationBar
            activeLink={activeLink}
            handleClick={handleClick}
            isOpen={isOpen}
          />
          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
