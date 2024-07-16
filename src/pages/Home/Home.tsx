// import React from "react";

import { useEffect, useRef, useState } from "react";
import { images } from "../../assets/images";
import CardCom from "../../components/Card";
import { CardInterface } from "../../Interfaces/card.interface";

const Home = () => {
  const comboRef = useRef(null);
  const chickenRef = useRef(null);
  const wrapsRef = useRef(null);
  const parathaRollsRef = useRef(null);
  const shawarmaRef = useRef(null);

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  return (
    <>
      <div className=" w-full flex items-start justify-center">
        <div
          id="gallery"
          className="relative group w-[80%]"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${
                  currentIndex === index ? "block" : "hidden"
                }`}
                data-carousel-item={currentIndex === index ? "active" : ""}
              >
                <img
                  src={src}
                  className="absolute block w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute hidden top-0 start-0 z-30 group-hover:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-400 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute hidden top-0 end-0 z-30 group-hover:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-400 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <p
        className="text-center text-xl font-medium"
        style={{ color: "#000", fontFamily: "Sans-serif", paddingTop: 30 }}
      >
        How it Works
      </p>
      {/* Implementing three horizontal delivery processes */}
      <div className="w-full flex items-center justify-center py-[2rem]">
        <div className="w-[60%] flex justify-evenly">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1721065222/Vector_kwsy6q.png"
              alt="Easy to order"
              style={{ width: "50px", height: "50px" }}
            />
            <p
              className="text-center text-xl font-medium"
              style={{
                color: "gray",
                fontFamily: "Sans-serif",
                paddingTop: 12,
              }}
            >
              Easy to order
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1721065222/Vector_1_zz5gcb.png"
              alt="Fastest Delivery"
              style={{ width: "50px", height: "50px" }}
            />
            <p
              className="text-center text-xl font-medium"
              style={{
                color: "gray",
                fontFamily: "Sans-serif",
                paddingTop: 12,
              }}
            >
              Fastest Delivery
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/resello/image/upload/v1721065222/Vector_2_t5xsvb.png"
              alt="Best Quality"
              style={{ width: "50px", height: "50px" }}
            />
            <p
              className="text-center text-xl font-medium"
              style={{
                color: "gray",
                fontFamily: "Sans-serif",
                paddingTop: 12,
              }}
            >
              Best Quality
            </p>
          </div>
        </div>
      </div>

      {/* cetagoary */}

      <div className="w-full flex items-center justify-center py-[2rem]">
        <div className="w-[80%] flex  flex-col gap-10">
          <div className="">
            <span className="text-4xl font-bold">What's on your mind?</span>
          </div>
          <div className="flex w-full flex-wrap gap-5 items-center justify-start">
            <div className="w-[12rem] hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto items-center justify-center cursor-pointer">
              <img
                className="w-full h-[80%]"
                src="/src/assets/Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_12_a9jvcm-removebg-preview.png"
                alt=""
              />
              <p>
                <span className="font-bold text-xl">BOGO Combo</span>
              </p>
            </div>
            <div className="w-[12rem] hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto items-center justify-center cursor-pointer">
              <img
                className="w-full h-[80%]"
                src="/src/assets/Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_13_oupraf-removebg-preview.png"
                alt=""
              />
              <p>
                <span className="font-bold text-xl">Chicken</span>
              </p>
            </div>
            <div className="w-[12rem] hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto items-center justify-center cursor-pointer">
              <img
                className="w-full h-[80%]"
                src="/src/assets/Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_5_enzb7b-removebg-preview.png"
                alt=""
              />
              <p>
                <span className="font-bold text-xl">Wraps</span>
              </p>
            </div>
            <div className="w-[12rem] hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto items-center justify-center cursor-pointer">
              <img
                className="w-full h-[80%]"
                src="/src/assets/Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_6_qghnnc-removebg-preview.png"
                alt=""
              />
              <p>
                <span className="font-bold text-xl">Paratha Rolls</span>
              </p>
            </div>
            <div className="w-[12rem] hover:-translate-y-1 transition-transform flex flex-col gap-3 h-auto items-center justify-center cursor-pointer">
              <img
                className="w-full h-[80%]"
                src="/src/assets/Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_7_sictok-removebg-preview.png"
                alt=""
              />
              <p>
                <span className="font-bold text-xl">Shawarma</span>
              </p>
            </div>
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
      <div
        ref={comboRef}
        className="w-full flex items-center justify-center py-5"
      >
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
      <div
        ref={chickenRef}
        className="w-full flex items-center justify-center py-5"
      >
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
      <div
        ref={wrapsRef}
        className="w-full flex items-center justify-center py-5"
      >
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
      <div
        ref={parathaRollsRef}
        className="w-full flex items-center justify-center py-5"
      >
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
      <div
        ref={shawarmaRef}
        className="w-full flex items-center justify-center py-5"
      >
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
