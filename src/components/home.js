import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";
import { Events } from "./index";
import { barTap, bloodyMary, potRoastGrilled, salad } from "./images/index"; // Correct import

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
      <div className="flex flex-col items-center md:space-x-8 space-y-8 md:space-y-0 p-4 min-h-max bg-black">
        {/* First Box */}
        <div className="flex flex-col items-center space-y-8 p-8 rounded-md">
          <img
            src={barTap}
            alt="barTap"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-md"
          />
          <h1 className="text-xl text-white">Delicious Comfort Food</h1>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae eu urna torquent erat ultricies.
          </p>
          <Link to="/menu">
            <button className="bg-blue hover:bg-[#3498db] text-white font-bold py-2 px-4 rounded">
              Order Now
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center md:space-x-8 space-y-8 md:space-y-0 p-4 min-h-max">
        <div className="flex flex-wrap justify-center items-center gap-4 p-5 rounded-md">
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
          <img
            src={salad}
            alt="Salad"
            className="w-64 h-64 object-cover rounded-md"
          />
          <img
            src={salad}
            alt="Salad"
            className="w-64 h-64 object-cover rounded-md"
          />
          <img
            src={salad}
            alt="Salad"
            className="w-64 h-64 object-cover rounded-md"
          />
        </div>
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
