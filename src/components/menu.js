import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ setCartItems, setItems }) => {
  const [menuItems, setMenuItems] = useState({
    buildYourOwnBurger: [],
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
          buildYourOwnBurger: data.buildYourOwnBurger || [],
          burgers: data.burgerItems || [],
          sandwiches: data.sandwichItems || [],
          drinks: data.drinkItems || [],
          sides: data.sideItems || [],
        });

        setItems(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedOrder = { ...orderItems, [id]: quantity };
    setOrderItems(updatedOrder);
  };

  const handleAddToCart = (id) => {
    const currentQuantity = orderItems[id] || 0;
    const updatedQuantity = currentQuantity + 1;
    const updatedOrder = { ...orderItems, [id]: updatedQuantity };

    setOrderItems(updatedOrder);

    const updatedCartItems = Object.entries(updatedOrder).reduce(
      (acc, [key, value]) => {
        if (value > 0) acc[key] = value;
        return acc;
      },
      {}
    );

    setCartItems(updatedCartItems);
  };

  const categories = [
    { title: "Build your own burger", items: menuItems.burgers },
    { title: "Sandwiches", items: menuItems.sandwiches },
    { title: "Drink Items", items: menuItems.drinks },
    { title: "Sides", items: menuItems.sides },
    { title: "buildYourOwnBurger", items: menuItems.buildYourOwnBurger},
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {categories.map((category) => (
        <MenuCategory
          key={category.title}
          title={category.title}
          items={category.items}
          handleQuantityChange={handleQuantityChange}
          handleAddToCart={handleAddToCart}
          orderItems={orderItems}
        />
      ))}
    </div>
  );
};

export default Menu;
