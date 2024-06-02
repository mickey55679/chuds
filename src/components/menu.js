import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ setCartItems, setItems }) => {
  const [menuItems, setMenuItems] = useState({});
  const [orderItems, setOrderItems] = useState({});

  useEffect(() => {
    // Fetch the data from the server
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched menu items:", data); // Add this line to log fetched data
        setMenuItems(data);
        setItems(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  const updateOrder = (id, operation) => {
    let updatedOrder = { ...orderItems };
    if (operation === "+") {
      updatedOrder[id] = (updatedOrder[id] || 0) + 1;
    } else {
      updatedOrder[id] = Math.max((updatedOrder[id] || 0) - 1, 0);
    }
    setOrderItems(updatedOrder);
    setCartItems(updatedOrder);
  };

  const categories = [
    { title: "Build your own burger", items: menuItems.burgerItems },
    { title: "Sandwiches", items: menuItems.sandwichItems },
    { title: "Drink Items", items: menuItems.drinkItems },
    { title: "Sides", items: menuItems.sideItems },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {categories.map((category, index) => (
        <MenuCategory
          key={index}
          title={category.title}
          items={category.items || []}
          updateOrder={updateOrder}
          orderItems={orderItems}
        />
      ))}
    </div>
  );
};

export default Menu;
