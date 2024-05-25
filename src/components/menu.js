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
          <a target="_blank" rel="noopener noreferrer" href={item.href}>
            <img src={item.src} alt={item.alt} width="600" height="400" />
          </a>
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
