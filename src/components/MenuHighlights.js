import React from "react";

const MenuHighlights = () => {
  return (
    <div className="menu-highlights-section">
      <h3 className="menu-highlights-title">Menu Highlights</h3>
      <div className="menu-highlights-container">
        <div className="menu-highlights-item">
          <img src="family-style-meals.jpg" alt="Family Style Meals" />
          <h3>Family Style Meals</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img src="appetizers.jpg" alt="Appetizers" />
          <h3>Appetizers</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img src="classic-entrees.jpg" alt="Classic Entrees" />
          <h3>Classic Entrées</h3>
          <button>Order Now</button>
        </div>
        <div className="menu-highlights-item">
          <img src="create-your-own-pasta.jpg" alt="Create Your Own Pasta" />
          <h3>Create Your Own Pasta</h3>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuHighlights;
