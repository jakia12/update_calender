export default function TopNav() {
  return (
    <div className="max-w-[80%] w-[95%] mx-auto  text-white py-[12px] ">
      <div className=" flex items-center lg:justify-between justify-center">
        {/* Logo on the Left */}
        <div></div>

        {/* Buttons on the Right */}
        <div className="flex items-center space-x-3">
          <button className="bg-[#F8DA55] text-[#171717] px-4 py-[10px]  rounded-[15px] hover:bg-gray-200 transition mr-[10px]">
            Cape Canaveral
          </button>
          <button className="bg-transparent text-[F8DA55] px-6 py-[10px]  rounded-[15px] border border-[#F8DA55] transition">
            Patrick SFB
          </button>
        </div>
      </div>
    </div>
  );
}
