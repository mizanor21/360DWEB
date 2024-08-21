import React from "react";
import CustomCarousel from "./CustomCarousel";

const items = [
  {
    image: "https://i.postimg.cc/BvX1P83r/Ellipse-12.png",
    title: "Muhammad Asaduzzaman",
    review:
      "“Outstanding IT-enabled services—proactive, responsive, and invaluable for our business success”",
    description: "IT Head, Mosco Group",
  },
  {
    image: "https://i.postimg.cc/BvX1P83r/Ellipse-12.png",
    title: "Muhammad Asaduzzaman",
    review:
      "“Outstanding IT-enabled services—proactive, responsive, and invaluable for our business success”",
    description: "IT Head, Mosco Group",
  },
  {
    image: "https://i.postimg.cc/BvX1P83r/Ellipse-12.png",
    title: "Muhammad Asaduzzaman",
    review:
      "“Outstanding IT-enabled services—proactive, responsive, and invaluable for our business success”",
    description: "IT Head, Mosco Group",
  },
  // Add more items as needed
];

const Reviews = () => {
  return (
    <div className="bg-cover bg-center min-h-[800px] flex flex-col justify-center items-center font-[Inter] bg-[url('https://i.postimg.cc/C19cD3Pc/Rectangle-62.png')] px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
          <h1>Client&apos;s Testimonial</h1>
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2">
          What our Client&apos;s Tell About Us
        </p>
        <CustomCarousel items={items} />
      </div>
    </div>
  );
};

export default Reviews;
