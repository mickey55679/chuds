import React from "react";

const MenuHighlights = ({
  title,
  items,
  handleQuantityChange,
  handleAddToCart,
  orderItems,
}) => {
  return (
    <div className="menu-highlights-section">
      <h2 className="menu-highlights-title">{title}</h2>
      <div className="menu-highlights-container">
        {items ? (
          items.map((item, index) => (
            <div key={index} className="menu-highlights-item">
              <h3 className="menu-highlights-label">{item.name}</h3>
              <img
                src={item.imgurl}
                alt={`${item.name} image`}
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
