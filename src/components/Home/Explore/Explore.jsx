import "./Explore.css";
const Explore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="cyber lg:container lg:mx-auto font-[Inter] font-semibold text-white text-end p-5 lg:p-20">
        <h3 className="text-[20px] lg:text-[30px]">360D SOUL LTD</h3>
        <h1 className="text-[30px] lg:text-[48px] font-bold">Cyber Security</h1>
        <p className="text-[16px] lg:text-[16px] my-2 ">
          A complete suite of CYBER SECURITY delivering consistent processes and
          SECURITY across your business
        </p>
        <button className="btn bg-white text-[18px] lg:text-[24px] text-black mt-5 px-10 py-2">
          {" "}
          Explore
        </button>
      </div>
      <div className="infrastructure lg:container lg:mx-auto font-[Inter] font-semibold text-white p-5 lg:p-20">
        <h3 className="text-[20px] lg:text-[30px]">360D SOUL LTD</h3>
        <h1 className="text-[30px] lg:text-[48px] font-bold">INFRASTRUCTURE</h1>
        <p className="text-[16px] lg:text-[16px] my-2">
          An automated, secure platform for migrating enterprise workloads and
          building new cloud native apps
        </p>
        <button className="btn bg-white text-[18px] lg:text-[24px] text-black mt-5 px-10 py-2">
          {" "}
          Explore
        </button>
      </div>
    </div>
  );
};

export default Explore;
