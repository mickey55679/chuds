import React from "react";

const MenuHighlights = ({
  title,
  items,
  handleQuantityChange,
  handleAddToCart,
  orderItems,
}) => {
  console.log("MenuHighlights items:", items);
  return (
    <div className="menu-container">
      {" "}
      {/* Updated to use the same class */}
      <h1 className="title-menu">{title}</h1> {/* Same as MenuCategory */}
      <div className="menu-category">
        {" "}
        {/* Match the class of the items container */}
        {items ? (
          items.map((item, index) => (
            <div key={index} className="menu-item menu-items">
              {" "}
              {/* Same class as MenuCategory */}
              <h2>{item.name}</h2>
              <img
                src={item.imgurl}
                alt={`${item.name}`}
                width="180"
                height="auto"
              />
              <p>{item.description}</p>
              <p>Category: {item.category || "No category available"}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="desc">{item.desc}</div>
              <div className="menu-item-controls">
                <label className="quantity">
                  <span>Quantity:</span>{" "}
                </label>
                <select
                  className="quantity-selector"
                  value={orderItems[item.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                  }
                >
                  {[...Array(11).keys()].map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default MenuHighlights;
