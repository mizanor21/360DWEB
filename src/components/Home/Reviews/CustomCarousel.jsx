import { useState } from "react";
import "./CustomCarousel.css"; // Optional: For additional styling

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-screen container mx-auto">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <div className=" flex justify-center items-center">
              <div>
                <div className="flex justify-center my-[56px]">
                  <div className="relative p-[6px] bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] rounded-full">
                    <img src={item.image} alt={item.alt} />
                  </div>
                </div>
                <div>
                  <p className="font-medium">
                    <i>{item.review}</i>
                  </p>
                  <div className="my-[23px]">
                    <h2 className="text-3xl font-semibold ">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default CustomCarousel;
