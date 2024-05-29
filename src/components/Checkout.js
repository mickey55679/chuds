import React from "react";

// The Checkout component receives 'cartItems' and 'removeFromCart' props from its parent component
function Checkout({ cartItems, removeFromCart }) {
  // Function to handle the checkout process
  const handleCheckout = () => {
    // This could be expanded to include real payment processing logic
    alert("Checkout successful!");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - Downpayment: ${item.downpayment}
            <button onClick={() => removeFromCart(item.title, item.id)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout} className="button-75">
        Confirm and Pay
      </button>
    </div>
  );
}

export default Checkout;
