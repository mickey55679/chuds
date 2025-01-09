import chudsBackground from "./images/chudsoutside.jpg";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${chudsBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          CHUDS is a veteran-owned and operated restaurant with homemade food.
          We are known for our delicious menu selection and great service. We
          offer a full bar, flatbreads, hand-pattied burgers, sandwiches, and a
          good variety of other options. If you are looking for a short drive
          out of the city, our place is what you are looking for.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
