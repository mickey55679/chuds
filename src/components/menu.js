import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h2>{item.name}</h2>
          {/* Updated alt text to describe what the image represents */}
          <img
            src={item.image_url}
            alt={`${item.name} served on a plate`}
            width="600"
            height="400"
          />
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          {/* If `desc` is not needed, you can remove this div */}
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
