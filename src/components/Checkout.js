import React, { useEffect, useState } from "react";

function Checkout({ cartItems, removeFromCart, items }) {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to handle the checkout process
  const handleCheckout = () => {
    alert("Checkout successful!");
  };

  useEffect(() => {
    let newTotal = 0;
    const formattedOrder = [];

    // Iterate over each item category in 'items'
    for (let item in items) {
      const menu = items[item];
      // Iterate over each item in the category
      for (let menuItem of menu) {
        // Check if the menuItem.id exists in cartItems object
        if (menuItem.id in cartItems) {
          const quantity = cartItems[menuItem.id]; // Get the quantity directly from cartItems
          newTotal += menuItem.price * quantity;
          formattedOrder.push({
            ...menuItem,
            quantity: quantity,
          });
        }
      }
    }

    setTotal(newTotal);
    setOrder(formattedOrder);
  }, [cartItems, items]); // Ensure correct dependencies are listed

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item.name} - quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.name, item.id)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      Total: {total}$
      <button onClick={handleCheckout} className="button-75">
        Confirm and Pay
      </button>
    </div>
  );
}

export default Checkout;
