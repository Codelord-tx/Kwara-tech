import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  // const handleOrderClick = () => {
  //   // Your order logic here
  //   console.log("Order placed!");
  // };

  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-[100%] mx-auto h-screen sm:h-[90vh] text-center ${
        isDarkMode
          ? "dark:bg-black"
          : "bg-gradient-to-r from-[#3762f2] to-[#123dcc]"
      }`}
    >
      <div className="w-full h-full mx-auto flex justify-center items-center">
        <div className="animate-in fade-in zoom-in delay-120 duration-700">
          <div className="">
            <h1 className="text-4xl pb-4 font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-customGreen via-yellow-500 to-[#55e022]">
                Join us today!!!
              </span>
            </h1>
          </div>
          <div className="space-y-6">
            <p className="sm:text-6xl text-sm font-medium px-6 max-w-[900px] text-white">
              A new improved way to learn and enhance your skills
            </p>
            <p className="sm:text-lg text-sm px-6 max-w-[900px] text-white">
              Learn how to design, code, and build real-life apps, websites,
              logos in no time. Get access to complete courses, the best tutors,
              and the best tools
            </p>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative md:mt-2 sm:space-x-1">
                <input
                  type="text"
                  placeholder="Search for our courses, tutors and tools"
                  className="sm:pl-14 dark:bg-white dark:text-black pl-10 md:w-96 sm:h-10 h-8 w-80  outline-none rounded md:rounded-l-[22px] md:placeholder:text-base placeholder:text-xs"
                />
                <div className="absolute top-[10px] md:top-2 insert-y-0 sm:left-0 left-8 flex items-center pl-4">
                  <AiOutlineSearch className="text-black/80 sm:h-6 sm:w-6 " />
                </div>
                <ButtonDefault
                  label="Search"
                  className={`sm:rounded-l-xl sm:mt-0 mt-2 ${
                    isDarkMode ? "bg-blue-500" : "bg-blue-500 text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
