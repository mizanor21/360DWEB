import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Hero.css";
import banner2 from "../../../assets/banner/slider2.png";
const Reviews = () => {
  return (
    <div className="bg font-[Inter] py-10 none">
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=" lg:container lg:mx-auto"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="flex relative">
            <img
              className="custom-width w-full lg:w-[1000px] md:mb-10"
              src={banner2}
            />
            <div className="custom-width absolute hidden md:block lg:w-[900px] top-20 right-[0px] lg:p-20 bg-white shadow-lg rounded-md ">
              <div className="">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
                  Company Goal
                </div>
                <div className="flex justify-center md:justify-start mt-[18px] mb-[40px]">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
                <p className="text-justify overflow-hidden">
                  360D SOUL is more than a business development firm, ensuring
                  your business growth and partnership. Expertise and passion,
                  we craft tailored solutions to elevate your business to new
                  heights. Let’s collaborate, innovate, and thrive together in
                  the ever-evolving landscape of success.
                </p>
              </div>
              <button className="font-semibold bg-gradient-to-r from-[#013762] via-[#0080E5] to-[#013762] text-white px-10 py-3 mt-5  rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
