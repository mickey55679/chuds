import React, { useEffect, useState } from "react";

function Checkout({ cartItems, setCartItems, items }) {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    const formattedOrder = [];

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

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = { ...cartItems, [id]: quantity };
    if (quantity === 0) {
      delete updatedCartItems[id];
    }
    setCartItems(updatedCartItems);
  };

  const handleAddToCart = (id) => {
    const currentQuantity = cartItems[id] || 0;
    const updatedQuantity = currentQuantity + 1;
    handleQuantityChange(id, updatedQuantity);
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
              <input
                type="number"
                value={item.quantity || 0}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                }
                min="0"
              />
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(item.id)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-details">
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={() => alert("Checkout successful!")}>
          Confirm and Pay
        </button>
      </div>
    </>
  );
}

export default Checkout;
