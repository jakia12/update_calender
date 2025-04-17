const FindContent = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full    bg-[#171717] lg:rounded-[117px] rounded-[65px]  items-center ">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <img
          src="/images/map.png"
          alt="Left visual"
          className="w-full  rounded-lg cust_img"
        />
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex flex-col  justify-center text-center items-center  py-[20px] px-[25px] 2xl:px-0 xl:px-0 lg:px-0 ">
        {/* first img box */}
        <img
          src="/images/1.png"
          alt="Right visual"
          className="w-full max-w-[320px] rounded-md mb-[20px]"
        />
        <div className="w-full lg:w-[418px] h-[220px] xl:w-[450px] border border-[#5B5B5B] rounded-[50px] flex items-center px-[20px] ">
          <div>
            <h2 className="text-[18px]  font-[500] mb-2 text-white">
              Cape Canaveral
            </h2>
            <p className="text-white leading-relaxed">
              Visit the food trucks, enjoy amazing cuisines, and experience the
              taste of the streets!
            </p>
          </div>
        </div>
        {/* second img box */}
        <img
          src="/images/2.png"
          alt="Right visual"
          className="w-full max-w-[320px] rounded-md mt-[45px] mb-[20px]"
        />
        <div className="w-full lg:w-[418px] h-[220px] xl:w-[450px] border border-[#5B5B5B] rounded-[50px] flex items-center px-[20px] cPad">
          <div>
            <h2 className="text-[18px]  font-[500] mb-2 text-white">
              Patrick Space
            </h2>
            <p className="text-white leading-relaxed">
              Visit the food trucks, enjoy amazing cuisines, and experience the
              taste of the streets!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindContent;
