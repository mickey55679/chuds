import React from "react";

const MenuCategory = ({ title, items, updateOrder, orderItems }) => {
  return (
    <div className="menu-container">
      <h2>{title}</h2>
      <div className="menu-category">
        {items.map((item, index) => (
          <div key={index} className="menu-item menu-items">
            <h2>{item.name}</h2>
            <img
              src={item.imgurl}
              alt={`${item.name} served on a plate`}
              width="180"
              height="auto"
            />
            <p>{item.description}</p>
            <p>Category: {item.category || "No category available"}</p>
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

export default MenuCategory;
