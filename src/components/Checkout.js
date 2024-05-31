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
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="items-container">
        {order.map((item, index) => (
          <div key={index} className="item-card">
            <h3>{item.name}</h3>
            <img src={item.imgurl} alt={item.name} width="100" height="auto" />
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="item-actions">
              <button onClick={() => handleQuantityChange(item.id, -1)}>
                -
              </button>
              <button onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => alert("Checkout successful!")}>
        Confirm and Pay
      </button>
    </div>
  );
}

export default Checkout;
