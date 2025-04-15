const DaysGrid = () => {
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <div className="w-full  grid grid-cols-7 gap-3 p-4">
      {days.map((day, index) => (
        <button
          key={index}
          className="bg-transparent border border-white/30 text-white rounded-lg py-2 px-[50px] text-center hover:bg-white/10 transition"
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaysGrid;
