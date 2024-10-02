import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";
import { Events } from "./index";
import bloodyMary from './images/bloodyMary.jpg'

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
        <div className="image-container">
          <img src={bloodyMary} alt="Home" className="background-image" />
          <div className="overlay-text">
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
      </div>{" "}
      <div className="second-photo-home">
        <img src="https://scontent.ffsd2-1.fna.fbcdn.net/v/t39.30808-6/460840344_508140455334448_2807475949957204205_n.jpg?stp=c0.296.1152.1152a_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=3gWt7xdOOjcQ7kNvgHu2wdx&_nc_ht=scontent.ffsd2-1.fna&_nc_gid=AN7oHXxRJCUjrwQtI6xlxWk&oh=00_AYBYMI05hB_VtlAtGZb2_0kjyGjOV4wGKIl3xRaPi7J61g&oe=67037FF5" />
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
