import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch the data from the server
    fetch("http://localhost:3000/menu")
      .then((response) => {
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setMenuItems(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch
        console.error("Error:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        // Each menu item is rendered inside a div with a unique key
        <div key={index} className="menu-item menu-items">
          {/* Display the name of the menu item */}
          <h2>{item.name}</h2>
          {/* Display the image of the menu item */}
          <img
            src={item.image_url}
            alt={`${item.name} served on a plate`}
            width="180"
            height="auto"
          />
          {/* Display the description of the menu item */}
          <p>{item.description}</p>
          {/* Display the category of the menu item */}
          <p>Category: {item.category}</p>
          {/* Display the price of the menu item, formatted to two decimal places */}
          <p>Price: ${item.price.toFixed(2)}</p>
          {/* Display the item description */}
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
