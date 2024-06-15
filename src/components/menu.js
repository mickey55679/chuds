import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ setCartItems, setItems }) => {
 const [menuItems, setMenuItems] = useState({
   burgers: [],
   sandwiches: [],
   drinks: [],
   sides: [],
 });

  const [orderItems, setOrderItems] = useState({});

 useEffect(() => {
   fetch("http://localhost:3000/api/menu")
     .then((response) => response.json())
     .then((data) => {
       console.log("Fetched menu items:", data);
       setMenuItems({
         burgers: data.burgerItems,
         sandwiches: data.sandwichItems,
         drinks: data.drinkItems,
         sides: data.sideItems,
       });
       setItems(data);
     })
     .catch((error) => {
       console.error("Error:", error);
     });
 }, []);


  const updateOrder = (id, operation) => {
    let updatedOrder = { ...orderItems };
    if (operation === "+") {
      updatedOrder[id] = (updatedOrder[id] || 0) + 1;
    } else {
      updatedOrder[id] = Math.max((updatedOrder[id] || 0) - 1, 0);
    }
    setOrderItems(updatedOrder);
    setCartItems(
      Object.entries(updatedOrder).reduce((acc, [key, value]) => {
        if (value > 0) acc[key] = value;
        return acc;
      }, {})
    );
  };

const categories = [
  { title: "Build your own burger", items: menuItems.burgers },
  { title: "Sandwiches", items: menuItems.sandwiches },
  { title: "Drink Items", items: menuItems.drinks },
  { title: "Sides", items: menuItems.sides },
];


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {categories.map((category) => (
        <MenuCategory
          key={category.title}
          title={category.title}
          items={category.items}
          updateOrder={updateOrder}
          orderItems={orderItems}
        />
      ))}
    </div>
  );
};

export default Menu;
