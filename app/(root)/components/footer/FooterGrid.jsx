"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterGrid() {
  return (
    <div className="w-full text-white px-6 py-10">
      <div className="lg:flex justify-center">
        {/* First Column */}
        <div className="lg:w-[50%] w-full  flex items-center justify-center">
          <div>
            {/* Logo */}
            <div className="relative w-[186px] h-[50px] mx-auto  lg:mx-0 xl:mx-0">
              <Image
                src="/images/flogo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-[16px] text-gray-300 text-center lg:text-left xl:text-left font-poppins w-full lg:w-[480px] my-[30px]">
              Stay connected with the best food trucks in town! Explore unique
              flavors, check schedules for Cape Canaveral and Patrick SFB, and
              never miss out on your favorite bites.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4  justify-center lg:justify-start xl:justify-start">
              {["fb", "ins", "tt", "tg"].map((icon) => (
                <div key={icon} className="relative w-8 h-8">
                  <Link href="#">
                    <Image
                      src={`/images/${icon}.png`}
                      alt={`${icon} icon`}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="lg:w-[25%] w-full  mt-10 lg:mt-0">
          <h3 className="font-[700] text-[20px] mb-2 text-[#F8DA55] font-libre">
            Useful Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-400">
            {["Home", "About Us", "Event Blocking", "Contact"].map(
              (text, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Third Column */}
        <div className="lg:w-[25%] md:w-full w-full mt-10 lg:mt-0">
          <h3 className="font-[700] text-[20px] mb-2 text-[#F8DA55] font-libre">
            Trucks
          </h3>
          <ul className="space-y-1 text-sm text-gray-400">
            {["MOLO'S", "Reel BBQ", "Sour Mugz", "Fowl Mouth"].map(
              (truck, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
                  >
                    {truck}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
