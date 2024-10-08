const MenuItem = ({
  item,
  orderItems,
  handleQuantityChange,
  handleAddToCart,
}) => {
  return (
    <div className="menu-item menu-items">
      <h2>{item.name}</h2>
      <img src={item.imgurl} alt={`${item.name}`} width="180" height="auto" />
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
          {orderItems[item.id] > 0 ? "Add More" : "Order Now"}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
