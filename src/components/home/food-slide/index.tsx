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

export default function FoodSlide() {
  return (
    <>
      <section className=" ">
        <div className="">
          <Swiper
            spaceBetween={0}
            loop={true}
            centeredSlides={true}
            slidesPerView={4}
            autoplay={{
              delay: 10000,
            }}
            breakpoints={{
              200: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className=""
          >
            {data.map((item) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1]  duration-[0.5s] hover:after:h-full hover:after:opacity-0 hover:after:duration-700  relative  overflow-hidden">
                      {" "}
                      <Image
                        className="xs:w-[400px] xs:h-[200px] group-hover:scale-[1.1]  duration-[0.5s] ease-in-out "
                        src={item.imgUrl}
                        alt="img"
                        width={600}
                        height={390}
                      ></Image>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
