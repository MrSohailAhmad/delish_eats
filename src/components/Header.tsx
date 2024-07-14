// import React from "react";

import { images } from "../assets/images";

const Header = () => {
  return (
    <div className="w-full sm:h-[4rem] h-[6rem] py-2 border flex flex-col sm:flex-row items-center justify-center">
      <div className="flex w-[80%] items-center justify-between">
        <div className="flex w-auto gap-3 items-center">
          <span>{images.clock("w-7 h-7 stroke-indigo-600")}</span>
          <span className="text-[10px] sm:text-sm md:text-md lg:text-[0.9rem] xl:text-[1rem]">
            Monday to Sunday | 4:00 PM - 10:00 PM
          </span>{" "}
        </div>
        <div>
          <span className=" font-bold text-[20px]  md:text-md lg:text-lg xl:text-xl">
            Delish Eats
          </span>
        </div>
        <div className="flex w-auto gap-3 items-center">
          <span>{images.location("w-5 h-5 fill-indigo-600")}</span>
          <p className="flex flex-row">
            {" "}
            <span className="text-[10px] sm:text-sm md:text-md lg:text-[0.9rem] xl:text-[1rem]">
              Islamabad / Rawalpindi Call Us: +92 344 902 8644
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
