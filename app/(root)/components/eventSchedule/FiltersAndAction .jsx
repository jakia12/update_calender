import Image from "next/image";

const FiltersAndAction = () => {
  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className=" mx-auto  py-6">
      <div className="2xl:flex  xl:flex  lg:flex  justify-between items-center gap-4 mx-auto text-center dp">
        {/* Left: Selects */}
        <div className="flex gap-4 w-full md:w-auto justify-center sm:justify-center">
          {/* Month Select */}
          <div className="relative inline-block w-[130px]">
            <select className="appearance-none border border-[#5B5B5B] px-[18px] py-1.5 rounded-[15px] text-white bg-[#171717] w-full text-[18px]">
              {months.map((month, idx) => (
                <option key={idx} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <Image
                src="/images/ard.png"
                alt="dropdown arrow"
                width={14}
                height={7}
                className="w-[14px] h-[7px]"
              />
            </div>
          </div>

          {/* Year Select */}
          <div className="relative inline-block w-[130px]">
            <select className="appearance-none border border-[#5B5B5B] px-[18px] py-1.5 rounded-[15px] text-white bg-[#171717] w-full text-[18px]">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <Image
                src="/images/ard.png"
                alt="dropdown arrow"
                width={14}
                height={7}
                className="w-[14px] h-[7px]"
              />
            </div>
          </div>
        </div>

        {/* Right: Yellow Button */}
        <div className="pt-4  mx-auto lg:mx-0 flex justify-center">
          <button className="bg-[#F8DA55] hover:bg-yellow-500 text-black px-6 py-2 2xl:mt-0 xl:mt-0 lg:mt-0 rounded-full  text-lg transition flex items-center justify-center font-[400] text-[18px]">
            <img src="/images/location.png" alt="" />
            <span className="ml-[9px]">Patrick SFB</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersAndAction;
