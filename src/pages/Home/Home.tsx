// import React from "react";

import { useRef } from "react";
import { images } from "../../assets/images";
import CardCom from "../../components/Card";
import { CardInterface } from "../../Interfaces/card.interface";

const Home = () => {
  const comboRef = useRef(null);
  const chickenRef = useRef(null);
  const wrapsRef = useRef(null);
  const parathaRollsRef = useRef(null);
  const shawarmaRef = useRef(null);
  const navCardData = [
    {
      img: images.CardImg1,
      title: "BOGO Combo",
      ref: comboRef,
    },
    {
      img: images.CardImg2,
      title: "Chicken",
      ref: chickenRef,
    },
    {
      img: images.CardImg3,
      title: "Wraps",
      ref: wrapsRef,
    },
    {
      img: images.CardImg4,
      title: "Paratha Rolls",
      ref: parathaRollsRef,
    },
    {
      img: images.CardImg5,
      title: "Shawarma",
      ref: shawarmaRef,
    },
  ];

  const popularData: CardInterface[] = [
    {
      img: images.cardimg,
      title: "Paneer Tikka Rice Bowl",
      price: 139,
      discount: 250,
      percentOff: 25,
    },
    {
      img: images.cardimg,
      title: "Paneer Tikka Rice Bowl",
      price: 139,
      discount: 250,
      percentOff: 25,
    },
    {
      img: images.cardimg,
      title: "Chicken Tikka wrap",
      price: 139,
      discount: 250,
      percentOff: 25,
    },
    {
      img: images.cardimg,
      title: "Paneer Tikka Rice Bowl",
      price: 139,
      discount: 250,
      percentOff: 25,
    },
    {
      img: images.cardimg,
      title: "Chicken Tikka wrap",
      price: 139,
      discount: 250,
      percentOff: 25,
    },
  ];

  const scrollToSection = (sectionRef: any) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" w-full bg-indigo-800">
        <div className="grid w-[80%] py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-[10rem] text-white">
              ZERO
            </h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              DELIVERY, PLATEFORM & PACKAJING FEE
            </h1>
            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              We deliver all your dishesh in one single order
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full flex items-center justify-center py-[5rem]">
        <div className="w-[80%] flex  flex-col gap-10">
          <div className="">
            <span className="text-4xl font-bold">What's on your mind?</span>
          </div>
          <div className="flex w-full flex-wrap gap-5 items-center justify-start">
            {navCardData.map((item, indx) => (
              <div
                key={indx}
                onClick={() => scrollToSection(item.ref)}
                className="w-[12rem] hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto items-center justify-center cursor-pointer"
              >
                <img className={`w-full h-[80%]`} src={item.img} alt="" />
                <p>
                  <span className="font-bold text-xl">{item.title}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  Popular */}
      <div className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className=" w-full items-start">
            <span className="text-4xl font-bold">Popular</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/*  BOGO Combo FLAT 25% OFF */}
      <div
        ref={comboRef}
        className="w-full flex items-center justify-center py-5"
      >
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className=" w-full items-start">
            <span className="text-4xl font-bold">BOGO Combo FLAT 25% OFF</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Chicken */}
      <div
        ref={chickenRef}
        className="w-full flex items-center justify-center py-5"
      >
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className=" w-full items-start">
            <span className="text-4xl font-bold">Chicken</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Wraps */}
      <div
        ref={wrapsRef}
        className="w-full flex items-center justify-center py-5"
      >
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className=" w-full items-start">
            <span className="text-4xl font-bold">Wraps</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Paratha Rolls */}
      <div
        ref={parathaRollsRef}
        className="w-full flex items-center justify-center py-5"
      >
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className=" w-full items-start">
            <span className="text-4xl font-bold">Paratha Rolls</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Shawarma */}
      <div
        ref={shawarmaRef}
        className="w-full flex items-center justify-center py-5"
      >
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className=" w-full items-start">
            <span className="text-4xl font-bold">Shawarma</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
