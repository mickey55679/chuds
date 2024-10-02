const SelectOrderType = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Select Order Type</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* To Go */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <img src="to-go-icon.png" alt="To Go" className="w-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">To Go</h2>
          <p className="text-center text-gray-600 mb-4">
            All your OG favorites, from individual entrées to family-style
            meals.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
            Order To Go
          </button>
        </div>

        {/* Catering Pickup */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="pickup-icon.png"
            alt="Catering Pickup"
            className="w-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Catering Pickup</h2>
          <p className="text-center text-gray-600 mb-4">
            Perfect for any occasion or event.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
            Order Catering Pickup
          </button>
        </div>

        {/* Catering Delivery */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="delivery-icon.png"
            alt="Catering Delivery"
            className="w-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Catering Delivery</h2>
          <p className="text-center text-gray-600 mb-4">
            Order online by 5pm for next day delivery.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
            Order Catering Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectOrderType;
