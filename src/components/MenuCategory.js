import MenuItem from "./menuItem";

const MenuCategory = ({
  title,
  items,
  handleQuantityChange,
  handleAddToCart,
  orderItems,
}) => {
  return (
    <div className="menu-container flex flex-col p-[10px]">
      <h1 className="title-menu text-[2em] text-center">{title}</h1>
      <div className="menu-category flex flex-wrap justify-around m-5">
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

export default MenuCategory;
