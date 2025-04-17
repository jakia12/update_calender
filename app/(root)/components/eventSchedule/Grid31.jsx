"use client";

import { useState } from "react";

const Grid31 = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedWeekDay, setSelectedWeekDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (day) => {
    setSelectedDay(day);
    setSelectedWeekDay(day.daysName); // fix: use day.daysName directly
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDay(null);
    setSelectedWeekDay(null);
    setIsModalOpen(false);
  };

  const days = [
    {
      id: 1,
      Number: "1",
      firstItem: "Spacecoast Hotdogs",
      secondItem: "Notorious Pig",
      daysName: "Saturday",
    },
    { id: 2, Number: "2", firstItem: "Reel Cajun", daysName: "Sunday" },
    {
      id: 3,
      Number: "3",
      firstItem: "Firebird Grill",
      secondItem: "Burger Lab",
      daysName: "Monday",
    },
    {
      id: 4,
      Number: "4",
      firstItem: "Taco Tango",
      secondItem: "Noodle Nation",
      daysName: "Tuesday",
    },
    { id: 5, Number: "5", firstItem: "BBQ Brothers", daysName: "Wednesday" },
    {
      id: 6,
      Number: "6",
      firstItem: "Wrap World",
      secondItem: "Biryani House",
      daysName: "Thursday",
    },
    {
      id: 7,
      Number: "7",
      firstItem: "Pizza Port",
      secondItem: "Chicken Shack",
      daysName: "Friday",
    },
    {
      id: 8,
      Number: "8",
      firstItem: "Spicy Bowl",
      secondItem: "Grill Master",
      daysName: "Saturday",
    },
    {
      id: 9,
      Number: "9",
      firstItem: "Smokehouse Kitchen",
      secondItem: "Falafel Express",
      daysName: "Sunday",
    },
    {
      id: 10,
      Number: "10",
      firstItem: "Loaded Fries",
      secondItem: "Roti Stop",
      daysName: "Monday",
    },
    { id: 11, Number: "11", firstItem: "Rice & Roll", daysName: "Tuesday" },
    {
      id: 12,
      Number: "12",
      firstItem: "Sushi Corner",
      secondItem: "Kebab Kings",
      daysName: "Wednesday",
    },
    {
      id: 13,
      Number: "13",
      firstItem: "Tandoori Trails",
      secondItem: "Pho Fever",
      daysName: "Thursday",
    },
    { id: 14, Number: "14", firstItem: "Wok Street", daysName: "Friday" },
    { id: 15, Number: "15", daysName: "Saturday" },
    {
      id: 16,
      Number: "16",
      firstItem: "Samosa Stop",
      secondItem: "Wrap & Roll",
      daysName: "Sunday",
    },
    { id: 17, Number: "17", firstItem: "Tikka Time", daysName: "Monday" },
    { id: 18, Number: "18", daysName: "Tuesday" },
    { id: 19, Number: "19", daysName: "Wednesday" },
    { id: 20, Number: "20", daysName: "Thursday" },
    { id: 21, Number: "21", daysName: "Friday" },
    {
      id: 22,
      Number: "22",
      firstItem: "Veggie Grill",
      secondItem: "Naan Nook",
      daysName: "Saturday",
    },
    { id: 23, Number: "23", daysName: "Sunday" },
    { id: 24, Number: "24", firstItem: "Doner Deli", daysName: "Monday" },
    { id: 25, Number: "25", daysName: "Tuesday" },
    { id: 26, Number: "26", firstItem: "Rice Republic", daysName: "Wednesday" },
    {
      id: 27,
      Number: "27",
      firstItem: "Burger Stack",
      secondItem: "Falafel Fix",
      daysName: "Thursday",
    },
    {
      id: 28,
      Number: "28",
      firstItem: "The Curry Pot",
      secondItem: "Pita Planet",
      daysName: "Friday",
    },
    { id: 29, Number: "29", firstItem: "Momo House", daysName: "Saturday" },
    { id: 30, Number: "30", daysName: "Sunday" },
    {
      id: 31,
      Number: "31",
      firstItem: "Donut Den",
      secondItem: "Shake Street",
      daysName: "Monday",
    },
  ];

  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day.id}
            className="w-full h-[210px] bg-transparent border border-[#5B5B5B] rounded-[25px] text-white p-3 flex flex-col gap-2 cursor-pointer hover:border-white"
            onClick={() => openModal(day)}
          >
            <div className="text-sm font-bold text-left"> {day.Number}</div>
            {day.firstItem && (
              <button className="border border-[#DD2929] text-[#DD2929] rounded-lg bg-transparent px-2 py-[14px] text-xs w-full mb-2">
                {day.firstItem}
              </button>
            )}
            {day.secondItem && (
              <button className="bg-transparent border border-[#F0AD44] text-[#F0AD44]  rounded-lg px-2 py-[14px] text-xs w-full">
                {day.secondItem}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedDay && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 pt-[30px]">
          <div className="bg-transparent text-black rounded-[25px] p-6 w-[90%] max-w-[300px] relative border border-[#5B5B5B]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-white text-xl"
            >
              &times;
            </button>
            <div className="flex items-center justify-between my-6">
              <h2 className="text-lg font-bold  text-white">
                {" "}
                {selectedDay.Number}
              </h2>
              <h2 className="text-lg font-semibold 0 text-white">
                {selectedWeekDay}
              </h2>
            </div>{" "}
            {selectedDay.firstItem && (
              <button className="border border-red-500 text-red-500 rounded-lg bg-transparent px-2 py-[14px] text-xs w-full mb-4">
                {selectedDay.firstItem}
              </button>
            )}
            {selectedDay.secondItem && (
              <button className="bg-yellow-400 text-black rounded-lg px-2 py-[14px] text-xs w-full">
                {selectedDay.secondItem}
              </button>
            )}
            {!selectedDay.firstItem && !selectedDay.secondItem && (
              <p className="text-gray-500 italic">No items available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid31;
