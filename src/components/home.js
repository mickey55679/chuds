import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";
import { Events } from "./index";
import {bloodyMary, salad} from './images/index'

const Home = ({ handleClick }) => {
  const [highlightedItems, setHighlightedItems] = useState([]);
  const [orderItems, setOrderItems] = useState({}); // Holds the user's selected order items
  const [items, setItems] = useState({}); // Holds all fetched items

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu");
        const data = await response.json();
        // console.log("Fetched menu items for home page:", data);
        setItems(data);
        highlightItemsForDay(data);
      } catch (error) {
        console.error("Error fetching menu items for home page:", error);
      }
    };

    // Highlights specific items based on the day of the week
    const highlightItemsForDay = (data) => {
      const dayOfWeek = new Date().getDay();
      let itemsToHighlight = [];

      const highlightByDay = {
        0: data.burgerItems?.slice(0, 3), // Sunday: Highlight 3 burgers
        1: data.sandwichItems?.slice(0, 3), // Monday: Highlight 3 sandwiches
        3: data.drinkItems?.slice(0, 3), // Wednesday: Highlight 3 drinks
      };

      itemsToHighlight = highlightByDay[dayOfWeek] || [];
      setHighlightedItems(itemsToHighlight);
    };

    fetchMenuItems();
  }, []);

  // Updates the quantity of a specific item in the order
  const handleQuantityChange = (id, quantity) => {
    setOrderItems((prevOrder) => ({
      ...prevOrder,
      [id]: quantity,
    }));
  };

  // Adds an item to the cart and increases its quantity by 1
  const handleAddToCart = (id) => {
    setOrderItems((prevOrder) => ({
      ...prevOrder,
      [id]: (prevOrder[id] || 0) + 1,
    }));
  };

  return (
    <>
      <div className="home-page">
        <div className="relative flex justify-center items-center">
          <img
            src={bloodyMary}
            alt="Home"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border border-black rounded-md flex justify-center p-2"
          />
          <div className="text-center max-w-50 text-lg rounded-md p-4 m-4 border border-black">
            <p>
              Chuds Pub and Grub is a family-friendly restaurant offering
              delicious homemade food and a full bar!
            </p>
            <Link to="/menu">
              <button
                className="button-home"
                onClick={() => handleClick("/menu")}
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          src={salad}
          alt="salad"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border border-black rounded-md flex justify-center p-2"
        />
      </div>
      {highlightedItems.length > 0 && (
        <MenuHighlights
          title="Today's Highlights"
          items={highlightedItems}
          handleQuantityChange={handleQuantityChange}
          handleAddToCart={handleAddToCart}
          orderItems={orderItems}
        />
      )}
      <Events />
    </>
  );
};

export default Home;
