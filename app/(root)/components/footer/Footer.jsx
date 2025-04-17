import FooterGrid from "./FooterGrid";

export default function Footer() {
  return (
    <footer className=" text-white py-4 mt-auto ">
      <div className="container w-[90%] max-w-[80%] mx-auto">
        <div className="  px-4 text-center bg-[#171717] rounded-[50px]">
          <FooterGrid />
        </div>
        <div className="lg:flex items-center justify-between px-[30px] py-[40px] text-center">
          <h3 className="lg:text-[15px] text-[14px] font-poppins text-[#171717] mb-6">
            Copyright ©2024 Powered by Savvy Software
          </h3>
          <img src="/images/pay.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
