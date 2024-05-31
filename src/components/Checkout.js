import React, { useEffect, useState } from "react";

// The Checkout component receives 'cartItems' and 'removeFromCart' props from its parent component
function Checkout({ cartItems, removeFromCart, items }) {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  // Function to handle the checkout process
  const handleCheckout = () => {
    // This could be expanded to include real payment processing logic
    alert("Checkout successful!");
  };

  useEffect(() => {
    const formattedOrder = [];
    for (let item in items) {
      const menu = items[item];
      for (let menuItem of menu) {
        if (menuItem.id in cartItems) {
          setTotal(total + menuItem.price * cartItems[menuItem.id]);
          formattedOrder.push({
            ...menuItem,
            quantity: cartItems[menuItem.id],
          });
        }
      }
    }
    setOrder(formattedOrder);
  }, []);

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
