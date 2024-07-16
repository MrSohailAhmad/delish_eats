// import React from "react";
import { images } from "../assets/images.tsx";
import { CardInterface } from "../Interfaces/card.interface.ts";

const Card = ({ item }: { item: CardInterface }) => {
  return (
    <div className="w-[18rem] box-border rounded-lg hover:shadow-lg p-2 hover:border-[.25px] hover:border-gray-300 flex flex-col gap-3 h-auto overflow-hidden items-center justify-center cursor-pointer">
      <div className="overflow-hidden rounded-lg w-full h-[13rem] ">
        <img className={`w-full h-full`} src={item.img} alt="" />
      </div>
      <div className="w-[90%] items-center justify-center">
        <span className="font-bold text-xl ">{item.title}</span>
        <div className="flex h-[3rem] items-center justify-between">
          <p className="flex gap-3">
            <span>RS {item.price}</span>
            <span className="text-gray-400 line-through">
              RS {item.discount}
            </span>
          </p>
          {images.freeDelivery("w-7 h-7")}
        </div>
        <p className="text-gray-400 text-[13px] w-full flex justify-end">
          30 - 45 min
        </p>
      </div>
    </div>
  );
};

export default Card;
