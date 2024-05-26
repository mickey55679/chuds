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
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h2>{item.name}</h2>
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
