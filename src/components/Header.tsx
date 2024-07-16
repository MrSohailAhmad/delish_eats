// import React from "react";

import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Header = () => {
  interface SocialIcon {
    icon: JSX.Element;
    path: string;
  }

  const socialIcons: SocialIcon[] = [
    {
      icon: images.facebook("w-7 h-7"),
      path: "",
    },
    {
      icon: images.instagram("w-7 h-7"),
      path: "",
    },
    {
      icon: images.tiktok("w-7 h-7"),
      path: "",
    },
  ];

  return (
    <div className="w-full sm:h-[6rem] h-[4rem] py-1 border flex flex-col sm:flex-row items-center justify-center">
      <div className="flex sm:h-[2rem] w-[80%] items-center justify-between">
        <div className="flex w-auto gap-3 items-center">
          <img
            src="https://res.cloudinary.com/resello/image/upload/v1721053139/Group_2_2_s4l0ht.png"
            alt="mockup"
            style={{ width: "auto", height: "40px" }} // Adjusted height
          />
        </div>
        <div>{/* Empty div for possible future content */}</div>
        <div className="flex w-auto gap-3 items-center">
          <ul className="flex items-center justify-center">
            {socialIcons.map((item, indx) => (
              <li key={indx}>
                <Link to={""}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
