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

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="grid w-[70%] sm:h-[20rem] justify-center" style={{ backgroundColor: '#4355FE', alignSelf:'center', alignItems: 'center',borderRadius: 12 }}>
        <div className="grid w-[80%] place-self-center py-3 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-[5rem] text-white">
              ZERO
            </h1>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-1xl text-white">
              DELIVERY, PLATFORM & PACKAGING FEE
            </h1>
            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              We deliver all your dishes in one single order
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1720981722/picture_creera_snz0wk.png"
              alt="mockup"
              style={{ width: '200px', height: '100%' }}
            />
          </div>
        </div>
      </div>
      <p className="text-center text-xl font-medium" style={{color:"#000", fontFamily: "Sans-serif", paddingTop: 30}} >How it Works</p>
      {/* Implementing three horizontal delivery processes */}
      <div className="w-full flex items-center justify-center py-[5rem]">

        <div className="w-[60%] flex justify-evenly">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1721065222/Vector_kwsy6q.png"
              alt="Easy to order"
              style={{ width: '50px', height: '50px' }}
            />
            <p className="text-center text-xl font-medium" style={{color:"gray", fontFamily: "Sans-serif", paddingTop: 12}} >Easy to order</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1721065222/Vector_1_zz5gcb.png"
              alt="Fastest Delivery"
              style={{ width: '50px', height: '50px' }}
            />
            <p className="text-center text-xl font-medium" style={{color:"gray", fontFamily: "Sans-serif",paddingTop: 12}}>Fastest Delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1721065222/Vector_2_t5xsvb.png"
              alt="Best Quality"
              style={{ width: '50px', height: '50px' }}
            />
            <p className="text-center text-xl font-medium" style={{color:"gray", fontFamily: "Sans-serif", paddingTop: 12}}>Best Quality</p>
          </div>
        </div>
      </div>

      {/* Popular */}
      <div className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className="w-full items-start">
            <span className="text-4xl font-bold">Popular</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* BOGO Combo FLAT 25% OFF */}
      <div ref={comboRef} className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className="w-full items-start">
            <span className="text-4xl font-bold">BOGO Combo FLAT 25% OFF</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Chicken */}
      <div ref={chickenRef} className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className="w-full items-start">
            <span className="text-4xl font-bold">Chicken</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Wraps */}
      <div ref={wrapsRef} className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className="w-full items-start">
            <span className="text-4xl font-bold">Wraps</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Paratha Rolls */}
      <div ref={parathaRollsRef} className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className="w-full items-start">
            <span className="text-4xl font-bold">Paratha Rolls</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {popularData.map((item, indx) => (
              <CardCom item={item} key={indx} />
            ))}
          </div>
        </div>
      </div>

      {/* Shawarma */}
      <div ref={shawarmaRef} className="w-full flex items-center justify-center py-5">
        <div className="w-[80%] flex items-center justify-center flex-col gap-10">
          <div className="w-full items-start">
            <span className="text-4xl font-bold">Shawarma</span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
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