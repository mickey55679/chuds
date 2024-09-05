import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import MenuHighlights from "./MenuHighlights";

const Menu = ({ setCartItems, setItems }) => {
  const [menuItems, setMenuItems] = useState({
    buildYourOwnBurger: [],
    burgers: [],
    sandwiches: [],
    drinks: [],
    sides: [],
    littleChuds: [],
  });
  const [highlightedItems, setHighlightedItems] = useState([]);
  const [orderItems, setOrderItems] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched menu items:", data);

        setMenuItems({
          littleChuds: data.littleChuds || [],
          buildYourOwnBurger: data.buildYourOwnBurger || [],
          burgers: data.burgerItems || [],
          sandwiches: data.sandwichItems || [],
          drinks: data.drinkItems || [],
          sides: data.sideItems || [],
        });
        setItems(data);

        const dayOfWeek = new Date().getDay();
        let itemsToHighlight = [];

        // Check if the arrays exist before slicing them
        if (dayOfWeek === 0 && data.burgerItems) {
          itemsToHighlight = data.burgerItems.slice(0, 3); // Highlight 3 burgers on Sunday
        } else if (dayOfWeek === 1 && data.sandwichItems) {
          itemsToHighlight = data.sandwichItems.slice(0, 3); // Highlight 3 sandwiches on Monday
        } else if (dayOfWeek === 3 && data.drinkItems) {
          itemsToHighlight = data.drinkItems.slice(0, 3); // Highlight 3 drinks on Wednesday
        }

        setHighlightedItems(itemsToHighlight);
      })
      .catch((error) => console.error("Error:", error));
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
    { title: "Burgers", items: menuItems.burgers },
    { title: "Sandwiches", items: menuItems.sandwiches },
    { title: "Drink Items", items: menuItems.drinks },
    { title: "Sides 🍪", items: menuItems.sides },
    { title: "Build your own burger 🍔", items: menuItems.buildYourOwnBurger },
    { title: "Little Chuds 🐻", items: menuItems.littleChuds },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MenuHighlights
        title="Today's Highlights"
        items={highlightedItems}
        handleQuantityChange={handleQuantityChange}
        handleAddToCart={handleAddToCart}
        orderItems={orderItems}
      />
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
