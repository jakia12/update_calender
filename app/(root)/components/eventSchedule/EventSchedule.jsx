import DaysGrid from "./DaysGrid";
import FiltersAndAction from "./FiltersAndAction ";
import Grid31 from "./Grid31";
import NavArrow from "./NavArrow";

const EventSchedule = () => {
  return (
    <section className="pt-[90px] pb-0 ">
      <div className="text-center bg-[#fff]">
        <h2 className="font-[700] lg:text-[50px] text-[40px] text-[#111] font-libre pb-[60px]">
          Event <span className="text-[#EE263D]">Schedule</span>
        </h2>
      </div>
      <div className="w-full bg-[#171717] lg:py-[100px] py-[45px] ">
        <div className="max-w-[80%] w-[95%] mx-auto relative">
          <FiltersAndAction />
          <DaysGrid />
          <Grid31 />
          <NavArrow />
          {/* Your schedule content goes here */}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
