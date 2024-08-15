import React from "react";
import {wrap, notchos, salad, sandwich } from './images/index'


const MenuHighlights = () => {
  return (
    <div className="menu-highlights-section">
      <h2 className="menu-highlights-title">Menu Highlights</h2>
      <div className="menu-highlights-container">
        <div className="menu-highlights-item">
          <h3 className="menu-highlights-label">Chicken wrap</h3>
          <img src={wrap} alt="Caramelized Mushroom Onion Philly " />
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <h3 className="menu-highlights-label">Appetizers</h3>
          <img src={notchos} alt="Appetizers" />
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <h3 className="menu-highlights-label">Classic Entrées</h3>
          <img src={salad} alt="Classic Entrees" />
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <h3 className="menu-highlights-label">Create Your Own Pasta</h3>
          <img src={sandwich} alt="Create Your Own Pasta" />
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuHighlights;
