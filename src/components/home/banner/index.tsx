"use client";
import { Bannerİtem } from "./item";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "@/app/animation/animation.css";

export default function Banner() {
  const handleScroll = () => {
    console.log("scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper "
      >
        {Bannerİtem.map((item) => {
          return (
            <>
              <SwiperSlide className="relative">
                <div className="xs:h-[300px] h-screen w-full">
                  <Image src={item.ImgUrl} alt={item.title} fill></Image>
                </div>

                <div className="xs:w-[60%] xs:top-[36%] md:w-[80%] lg:w-[60%] xl:w-[45%] moveFromTop absolute z-20 text-orange-600 top-[42%] left-[16%]">
                  <p className="xs:gap-2 flex items-center gap-[30px] satisfy-regular text-[14px] md:text-[18px] xl:text-[24px] lg:text-[20px] xl:leading-[32px] lg:leading-[25px] mb-4">
                    <svg
                      className="xs:!w-[50px]"
                      width="67"
                      height="12"
                      viewBox="0 0 67 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.7735 6L61 0.226497L55.2265 6L61 11.7735L66.7735 6ZM61 5L8.74228e-08 4.99999L-8.74228e-08 6.99999L61 7L61 5Z"
                        fill="#DF3F01"
                      ></path>
                    </svg>

                    {item.firstTitle}
                  </p>
                  <h1 className=" font-bold  text-[20px] sm:text-[40px] md:text-[60px] xl:text-[130px] lg:text-[60px] xl:leading-[145px] lg:leading-[65px] text-white ">
                    {item.title}
                  </h1>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
