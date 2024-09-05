import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";

const Home = (props) => {
  const [highlightedItems, setHighlightedItems] = useState([]);
  const [orderItems, setOrderItems] = useState({}); // Dummy state for order items
  const [items, setItems] = useState({}); // Dummy state for all items

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched menu items for home page:", data);

        setItems(data); // Set all items (if needed elsewhere)

        const dayOfWeek = new Date().getDay();
        let itemsToHighlight = [];

        if (dayOfWeek === 0 && data.burgerItems) {
          itemsToHighlight = data.burgerItems.slice(0, 3); // Highlight 3 burgers on Sunday
        } else if (dayOfWeek === 1 && data.sandwichItems) {
          itemsToHighlight = data.sandwichItems.slice(0, 3); // Highlight 3 sandwiches on Monday
        } else if (dayOfWeek === 3 && data.drinkItems) {
          itemsToHighlight = data.drinkItems.slice(0, 3); // Highlight 3 drinks on Wednesday
        }

        setHighlightedItems(itemsToHighlight);
      })
      .catch((error) => {
        console.error("Error fetching menu items for home page:", error);
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
  };

  return (
    <>
      <div className="home-page">
        <div className="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg"
            alt="Home"
            className="background-image"
          />
          <div className="overlay-text">
            <p>
              Chuds Pub and Grub is a family-friendly restaurant that offers
              delicious homemade food and a full bar!
            </p>
            <Link to="/menu">
              <button
                className="button-home"
                onClick={() => props.handleClick("/menu")}
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Display MenuHighlights with fetched highlighted items */}
      {highlightedItems.length > 0 && (
        <MenuHighlights
          title="Today's Highlights"
          items={highlightedItems}
          handleQuantityChange={handleQuantityChange}
          handleAddToCart={handleAddToCart}
          orderItems={orderItems}
        />
      )}
    </>
  );
};

export default Home;
