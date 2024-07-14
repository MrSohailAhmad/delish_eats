// import React from "react";
import { CardInterface } from "../Interfaces/card.interface.ts";

const Card = ({ item }: { item: CardInterface }) => {
  return (
    <div className="w-[18rem] rounded-md shadow-md  hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto overflow-hidden items-center justify-center cursor-pointer">
      <img className={`w-full h-full`} src={item.img} alt="" />
      <div className="w-[90%] items-center justify-center">
        <span className="font-bold text-xl ">{item.title}</span>
        <div className="flex h-[3rem] items-center justify-between">
          <p className="flex gap-3">
            <span>RS {item.price}</span>
            <span className="text-gray-400 line-through">
              RS {item.discount}
            </span>
          </p>
          <span className="text-green-500 font-bold">
            {item.percentOff}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
