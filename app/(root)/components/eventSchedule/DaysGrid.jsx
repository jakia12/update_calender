const DaysGrid = () => {
  const days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri"];

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 py-4">
      {days.map((day, index) => (
        <button
          key={index}
          className="bg-transparent border border-[#5B5B5B]  rounded-[15px] py-[11px] px-2 text-center hover:bg-white/10 transition text-[#909090]"
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaysGrid;
