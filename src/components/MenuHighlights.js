import MenuItem from "./menuItem";

const MenuHighlights = ({
  title,
  items,
  handleQuantityChange,
  handleAddToCart,
  orderItems,
}) => {
  return (
    <div className="menu-container">
      <h1 className="title-menu">{title}</h1>
      <div className="menu-category">
        {items ? (
          items.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              orderItems={orderItems}
              handleQuantityChange={handleQuantityChange}
              handleAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default MenuHighlights;
