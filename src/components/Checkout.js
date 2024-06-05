import React, { useEffect, useState } from "react";

function Checkout({ cartItems, setCartItems, items }) {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    const formattedOrder = [];

    // Convert items object to an array
    const itemsArray = Object.values(items).flatMap((category) => category);

    for (const menuItem of itemsArray) {
      if (menuItem.id in cartItems) {
        const quantity = cartItems[menuItem.id];
        newTotal += menuItem.price * quantity;
        formattedOrder.push({
          ...menuItem,
          quantity,
        });
      }
    }

    setTotal(newTotal);
    setOrder(formattedOrder);
  }, [cartItems, items]);

  const handleQuantityChange = (id, delta) => {
    const newCartItems = { ...cartItems };
    if (newCartItems[id] + delta > 0) {
      newCartItems[id] += delta;
    } else {
      // Optionally remove the item if the quantity goes to zero
      delete newCartItems[id];
    }
    console.log("setCartItems before calling:", setCartItems);
    setCartItems(newCartItems);
  };

  return (
    <>
    <div className="checkout">
      {order.map((item, index) => (
        <div key={index} className="menu-item-checkout">
          <h2>{item.name}</h2>
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
          <div className="menu-item-checkout-controls">
            <button
              className="update_order_subtract"
              onClick={() => handleQuantityChange(item.id, -1)}
            >
              -
            </button>
            <span className="item-quantity">{item.quantity || "0"}</span>
            <button
              className="update_order_add"
              onClick={() => handleQuantityChange(item.id, 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}

    </div>
          <div className="checkout-details">
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => alert("Checkout successful!")}>
        confirm and pay
      </button>
    </div>
    </>
  );
}

export default Checkout;
