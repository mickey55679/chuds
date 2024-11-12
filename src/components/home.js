import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";
import { Events } from "./index";
import { barTap, bloodyMary, potRoastGrilled, salad } from "./images/index";

const Home = ({ handleClick }) => {
  const [highlightedItems, setHighlightedItems] = useState([]);
  const [orderItems, setOrderItems] = useState({});
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu");
        const data = await response.json();
        setItems(data);
        highlightItemsForDay(data);
      } catch (error) {
        console.error("Error fetching menu items for home page:", error);
      }
    };

    const highlightItemsForDay = (data) => {
      const dayOfWeek = new Date().getDay();
      const highlightByDay = {
        0: data.burgerItems?.slice(0, 3),
        1: data.sandwichItems?.slice(0, 3),
        3: data.drinkItems?.slice(0, 3),
      };
      setHighlightedItems(highlightByDay[dayOfWeek] || []);
    };

    fetchMenuItems();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    setOrderItems((prevOrder) => ({
      ...prevOrder,
      [id]: quantity,
    }));
  };

  const handleAddToCart = (id) => {
    setOrderItems((prevOrder) => ({
      ...prevOrder,
      [id]: (prevOrder[id] || 0) + 1,
    }));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 p-4 min-h-max bg-stone-300  border-2 border-black">
        {/* First Box */}
        <div className="flex flex-col items-center space-y-8 p-8 border-2 rounded-md border-black bg-stone-300">
          <h1 className="text-xl">Delicious Comfort Food</h1>
          <p className="text-center p-5 font-serif text-lg">
            Chuds Pub and Grub is a family-friendly restaurant offering
            delicious homemade food and a full bar!
          </p>
          <Link to="/menu">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Order Now
            </button>
          </Link>
        </div>

        {/* Second Box */}
        <div className="flex flex-col items-center space-y-8 p-8 border-2 rounded-md border-black bg-stone-300">
          <img src={barTap} />
          <p className="text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend platea
            et aenean porttitor nullam. Vestibulum sed senectus lobortis
            condimentum viverra taciti. Volutpat pulvinar finibus amet facilisis
            dignissim venenatis parturient orci dignissim. Mattis efficitur ante
            maecenas ullamcorper vitae cursus. Auctor ex integer justo per
            sollicitudin porttitor quisque. Tempor ipsum potenti et nullam
            consectetur sit sagittis.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:justify-around sm:items-center border-2 border-grey space-y-4 sm:space-y-0 sm:space-x-4 p-5">
        <img
          src={salad}
          alt="Salad"
          className="w-64 h-64 object-cover rounded-md"
        />
        <img
          src={potRoastGrilled}
          alt="Pot Roast Grilled"
          className="w-64 h-64 object-cover rounded-md"
        />
        <img
          src={salad}
          alt="Salad"
          className="w-64 h-64 object-cover rounded-md"
        />
      </div>

      {/* Highlights Section */}
      {highlightedItems.length > 0 && (
        <div className="w-full flex justify-center">
          <MenuHighlights
            title="Today's Highlights"
            items={highlightedItems}
            handleQuantityChange={handleQuantityChange}
            handleAddToCart={handleAddToCart}
            orderItems={orderItems}
          />
        </div>
      )}

      {/* Events Section */}
      <div className="w-full flex justify-center">
        <Events />
      </div>
    </>
  );
};

export default Home;
