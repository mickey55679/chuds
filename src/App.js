import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import Home from "./components/home";
import Menu from "./components/menu"; 
import Footer from "./components/footer";
import ContactForm from "./components/contact";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<ContactForm />} />
          </Routes>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
