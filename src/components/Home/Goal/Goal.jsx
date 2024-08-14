import "./Goal.css";
const Goal = () => {
  return (
    <div className="goal">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 py-20">
        <div className="font-['Inter']">
          <div className="text-4xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
            Company Goal
          </div>
          <div className="flex mt-[18px] mb-[40px]">
            <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
            <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
            <span className="border-[3px] border-[#03045E] w-[35px]"></span>
          </div>
          <p className="text-justify">
            360D SOUL is more than a business development firm, ensuring your
            business growth and partnership.Expertise and passion, we craft
            tailored solutions to elevate your business to a new heights. Let’s
            collaborate, innovate, and thrive together in the ever-evolving
            landscape of success.
          </p>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Goal;
