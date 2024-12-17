"use client";

import Image from "next/image";
import { data } from "./item";
import { TiStarFullOutline } from "react-icons/ti";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function WhatOurClientsSay() {
  return (
    <>
      <section className="bg-siteBg py-20 ">
        <div className=" bg-[url('/photo/download2.png')] bg-no-repeat bg-cover">
          <div>
            <div className=" satisfy-regular  text-siteColor flex gap-[15px] items-center text-center my-auto  text-[24px] mb-[19px] justify-center">
              <Image
                src={"/svg/fork.svg"}
                alt="img"
                width={13}
                height={30}
                className="Zoomİmg"
              ></Image>
              BEST FOOD MENU
            </div>
            <p className=" text-center xs:text-[35px] md:text-[55px] leading-[69px] font-semibold text-white mb-[166px] ">
              Choose Your Best Menus
            </p>
          </div>

          <div>
            <div className="">
              <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={2}
                autoplay={{
                  delay: 10000,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {data.map((item) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div className="grid grid-cols-12 gap-4 bg-[rgb(15_39_39/1)] h-[281px] py-5 xl:py-10 px-5 xl:px-11  gap-y-4 lg:gap-x-4 xl:gap-x-[49px] ">
                          <div className="col-span-12 md:col-span-3">
                            <div className="w-[60px] lg:w-[100px] xl:w-[100px] h-[60px] lg:h-[100px] xl:h-[100px]  ">
                              <Image
                                className="!relative rounded-full object-cover"
                                src={item.imgUrl}
                                alt="img"
                                fill
                              ></Image>
                            </div>
                            <h1 className="text-white font-semibold leading-[25px] my-6 ">
                              {item.title}
                            </h1>
                            <div className="flex gap-1">
                              <span className="bg-yellow-400  p-[2px]">
                                <TiStarFullOutline className="text-white " />
                              </span>
                              <span className="bg-yellow-400  p-[2px]">
                                <TiStarFullOutline className="text-white " />
                              </span>
                              <span className="bg-yellow-400  p-[2px]">
                                <TiStarFullOutline className="text-white " />
                              </span>
                              <span className="bg-yellow-400  p-[2px]">
                                <TiStarFullOutline className="text-white " />
                              </span>
                              <span className="bg-yellow-400  p-[2px]">
                                <TiStarFullOutline className="text-white " />
                              </span>
                            </div>
                          </div>
                          <span className=" block w-full md:w-[.5px] border border-dashed border-siteColor h-[.5px] md:h-full"></span>
                          <div className="col-span-12 md:col-span-7 my-auto">
                            <span>
                              <svg
                                width="34"
                                height="26"
                                viewBox="0 0 34 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M25.5202 25.625C20.862 25.625 17.4994 21.7793 17.4995 16.0851C17.5293 7.8118 23.7488 1.96232 32.7213 0.838982C33.5537 0.734764 33.8747 1.88791 33.1081 2.22877C29.6653 3.75964 27.9265 5.70224 27.7019 7.62503C27.5341 9.06158 28.315 10.32 29.2956 10.5556C31.8378 11.1665 33.541 14.3323 33.541 17.6042C33.541 22.034 29.95 25.625 25.5202 25.625Z"
                                  fill="#DF3F01"
                                ></path>
                                <path
                                  d="M8.0202 25.625C3.36198 25.625 -0.00063324 21.7793 -0.000520706 16.0851C0.0293121 7.8118 6.24879 1.96232 15.2213 0.838982C16.0537 0.734764 16.3747 1.88791 15.6081 2.22877C12.1653 3.75964 10.4265 5.70224 10.2019 7.62503C10.0341 9.06158 10.8151 10.32 11.7956 10.5556C14.3378 11.1665 16.041 14.3323 16.041 17.6042C16.041 22.034 12.45 25.625 8.0202 25.625Z"
                                  fill="#DF3F01"
                                ></path>
                              </svg>
                            </span>
                            <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px] leading-5 md:leading-[30px] py-2 lg:py-[15px] xl:py-[22px] text-white">
                              {item.desc}
                            </p>
                            <span className="flex justify-end">
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_1034_7624)">
                                  <path
                                    d="M9.4798 30.625C14.138 30.625 17.5006 26.7793 17.5005 21.0851C17.4707 12.8118 11.2512 6.96232 2.27871 5.83898C1.44628 5.73476 1.12531 6.88791 1.89187 7.22877C5.33469 8.75964 7.07349 10.7022 7.29808 12.625C7.46588 14.0616 6.68495 15.32 5.70436 15.5556C3.16222 16.1665 1.45896 19.3323 1.45896 22.6042C1.45896 27.034 5.05001 30.625 9.4798 30.625Z"
                                    fill="#DF3F01"
                                  ></path>
                                  <path
                                    d="M26.9798 30.625C31.638 30.625 35.0006 26.7793 35.0005 21.0851C34.9707 12.8118 28.7512 6.96232 19.7787 5.83898C18.9463 5.73476 18.6253 6.88791 19.3919 7.22877C22.8347 8.75964 24.5735 10.7022 24.7981 12.625C24.9659 14.0616 24.1849 15.32 23.2044 15.5556C20.6622 16.1665 18.959 19.3323 18.959 22.6042C18.959 27.034 22.55 30.625 26.9798 30.625Z"
                                    fill="#DF3F01"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1034_7624">
                                    <rect
                                      width="35"
                                      height="35"
                                      fill="white"
                                      transform="matrix(1 0 0 -1 0 35)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
