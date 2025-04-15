import FindContent from "./FindContent";

const FindUs = () => {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="container w-[90] max-w-[80%] mx-auto">
        <div className="text-center mb-[50px]">
          <h2 className="font-[700] text-[50px] text-[#111] font-libre">
            Event <span className="text-[#EE263D]">Schedule</span>
          </h2>
          <p className="font-[400] text-[16px] text-[#111] font-poppins">
            Currently serving Cape Canaveral and Patrick SFB with plans to
            expand soon
          </p>
        </div>

        <FindContent />
      </div>
    </section>
  );
};

export default FindUs;
