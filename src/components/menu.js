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
        <div key={index} className="menu-items">
          <h2>{item.name}</h2>
          <a target="_blank" rel="noopener noreferrer" href={item.href}>
            <img src={item.src} alt={item.alt} width="600" height="400" />
          </a>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>Price: {item.price}</p>
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;


