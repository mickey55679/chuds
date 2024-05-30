import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState({});
  const [orderItems, setOrderItems] = useState({});

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
  const updateOrder = (id, operation) => {
    let updatedOrder = { ...orderItems };
    if (operation === "+") {
      if (id in updatedOrder) {
        updatedOrder[id] = updatedOrder[id] + 1;
      } else {
        updatedOrder[id] = 1;
      }
    } else {
      if (id in updatedOrder) {
        updatedOrder[id] = updatedOrder[id] === 0 ? 0 : updatedOrder[id] - 1;
      }
    }
    setOrderItems(updatedOrder);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="menu-container">
        <h2>Create your own Burgers</h2>
        {(menuItems?.burgerItems || []).map((item, index) => (
          <div key={index} className="menu-item menu-items">
            <h2>{item.burger_name}</h2>
            <img
              src={item.imgurl}
              alt={`${item.name} served on a plate`}
              width="180"
              height="auto"
            />
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="desc">{item.desc}</div>
            <div className="menu-item-controls">
              <button
                className="update_order_subtract"
                onClick={() => updateOrder(item.id, "-")}
              >
                -
              </button>
              <span className="item-quantity">
                {orderItems[item.id] || "0"}
              </span>
              <button
                className="update_order_add"
                onClick={() => updateOrder(item.id, "+")}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="menu-container">
        <h2>Sandwiches</h2>
        {(menuItems?.sandwichItems || []).map((item, index) => (
          <div key={index} className="menu-item menu-items">
            <h2>{item.sandwich_name}</h2>
            <img
              src={item.imgurl}
              alt={`${item.sandwich_name} served on a plate`}
              width="180"
              height="auto"
            />
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="desc">{item.desc}</div>
            <div className="menu-item-controls">
              <button
                className="update_order_subtract"
                onClick={() => updateOrder(item.id, "-")}
              >
                -
              </button>
              <span className="item-quantity">
                {orderItems[item.id] || "0"}
              </span>
              <button
                className="update_order_add"
                onClick={() => updateOrder(item.id, "+")}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="menu-container">
        <h2>Drink Items</h2>
        {(menuItems?.drinkItems || []).map((item, index) => (
          <div key={index} className="menu-item menu-items">
            <h2>{item.drink_name}</h2>
            <img
              src={item.imgurl}
              alt={`${item.name} served on a plate`}
              width="180"
              height="auto"
            />
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="desc">{item.desc}</div>
            <div className="menu-item-controls">
              <button
                className="update_order_subtract"
                onClick={() => updateOrder(item.id, "-")}
              >
                -
              </button>
              <span className="item-quantity">
                {orderItems[item.id] || "0"}
              </span>
              <button
                className="update_order_add"
                onClick={() => updateOrder(item.id, "+")}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="menu-container">
        <h2>Sides</h2>
        {(menuItems?.sideItems || []).map((item, index) => (
          <div key={index} className="menu-item menu-items">
            <h2>{item.side_name}</h2>
            <img
              src={item.imgurl}
              alt={`${item.name} served on a plate`}
              width="180"
              height="auto"
            />
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="desc">{item.desc}</div>
            <div className="menu-item-controls">
              <button
                className="update_order_subtract"
                onClick={() => updateOrder(item.id, "-")}
              >
                -
              </button>
              <span className="item-quantity">
                {orderItems[item.id] || "0"}
              </span>
              <button
                className="update_order_add"
                onClick={() => updateOrder(item.id, "+")}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
