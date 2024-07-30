import React from "react";
import {wrap, notchos, salad, sandwich } from './images/index'


const MenuHighlights = () => {
  return (
    <div className="menu-highlights-section">
      <h2 className="menu-highlights-title">Menu Highlights</h2>
      <div className="menu-highlights-container">
        <div className="menu-highlights-item">
          <img
            src={wrap}
            alt="Caramelized Mushroom Onion Philly "
          />
          <h3>Chicken wrap</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src={notchos}
            alt="Appetizers"
          />
          <h3>Appetizers</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src={salad}
            alt="Classic Entrees"
          />
          <h3>Classic Entrées</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src={sandwich}
            alt="Create Your Own Pasta"
          />
          <h3>Create Your Own Pasta</h3>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuHighlights;
