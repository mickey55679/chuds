import React from "react";

const MenuHighlights = () => {
  return (
    <div className="menu-highlights-section">
      <h3 className="menu-highlights-title">Menu Highlights</h3>
      <div className="menu-highlights-container">
        <div className="menu-highlights-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"
            alt="Family Style Meals"
          />
          <h3>Family Style Meals</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"
            alt="Appetizers"
          />
          <h3>Appetizers</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"
            alt="Classic Entrees"
          />
          <h3>Classic Entrées</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"
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
