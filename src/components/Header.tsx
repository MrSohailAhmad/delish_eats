// import React from "react";

import { images } from "../assets/images";

const Header = () => {
  return (
    <div className="w-full sm:h-[6rem] h-[4rem] py-1 border flex flex-col sm:flex-row items-center justify-center">
    <div className="flex sm:h-[2rem] w-[80%] items-center justify-between">
      <div className="flex w-auto gap-3 items-center">
        <img
          src="https://res.cloudinary.com/resello/image/upload/v1721053139/Group_2_2_s4l0ht.png"
          alt="mockup"
          style={{ width: 'auto', height: '40px' }}  // Adjusted height
        />
      </div>
      <div>
        {/* Empty div for possible future content */}
      </div>
      <div className="flex w-auto gap-3 items-center">
        <span>{images.location("w-5 h-5 fill-indigo-600")}</span>
        <p className="flex flex-row">
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
