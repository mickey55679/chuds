import React from "react";

const MenuHighlights = () => {
  return (
    <div className="menu-highlights-section">
      <h3 className="menu-highlights-title">Menu Highlights</h3>
      <div className="menu-highlights-container">
        <div className="menu-highlights-item">
          <img
            src="https://scontent.ffsd2-1.fna.fbcdn.net/v/t39.30808-6/447631074_437655552382939_3159214166711699973_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oZrfJVatwsMQ7kNvgH6xkqV&_nc_ht=scontent.ffsd2-1.fna&oh=00_AYCtgOiKROwiQp5EP3wpey40bgEtOJ-GceET7D7TuriRyA&oe=6666D0A1"
            alt="Caramelized Mushroom Onion Philly "
          />
          <h3>Carmelized Mushroom Onion Philly</h3>
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
