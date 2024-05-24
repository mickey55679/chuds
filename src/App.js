import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ContactForm, Footer, Menu, Home, Login, NavigationBar} from './components/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Home />} />
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
