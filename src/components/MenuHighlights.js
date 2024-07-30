import React from "react";
import wrap from './images/chudswrap.jpg'
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
            src="https://cdn.pixabay.com/photo/2017/07/08/17/13/steak-2484999_1280.jpg"
            alt="Appetizers"
          />
          <h3>Appetizers</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/21/18/25/fillet-3693670_1280.jpg"
            alt="Classic Entrees"
          />
          <h3>Classic Entrées</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_1280.jpg"
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
