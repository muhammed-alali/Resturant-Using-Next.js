import { Autoplay, Navigation } from "swiper/modules";
import { cardItems } from "../home/cards/item";
import Link from "next/link";
import Image from "next/image";
import Buying from "../addtocart";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function İlgiliCategory() {
  return (
    <section className="overflow-hidden  ">
      <h1 className="xs:text-[23px] md:text-[30px] mx-12 xs:mt-12 md:pb-12 md:pt-0 text-center text-siteColor">
        <div className="pb-2">Related Products</div>
        <div className="border border-gray-200 mx-auto w-[45px]"></div>
      </h1>

      <div className=" xs:h-full md:h-full xs:pt-0 py-10  ">
        <div className="w-full ">
          <div className="cards mt-[140px]  xs:gap-[7rem] md:gap-y-[7rem] md:gap-x-[4rem] ">
            <Swiper
              slidesPerView={3}
              navigation={true}
              loop={true}
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 60,
                },

                "@1.00": {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },

                "@1.50": {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper  !overflow-visible xs:!px-7 md:!px-12"
            >
              {cardItems.map((item) => {
                return (
                  <>
                    <SwiperSlide>
                      <Link href={`/shop-detail/${item.id}`} key={item.id}>
                        <div className="card h-[391px] bg-cardBg text-center flex items-center justify-center flex-col px-5 pb-[51px] rounded-tl-[4rem] rounded-br-[4rem]">
                          <div>
                            <div className="m-auto  relative block  ">
                              <div className="relative mt-[-6rem] mb-[2rem]">
                                <div className="group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative  ">
                                  <Image
                                    src={item.url}
                                    alt="img"
                                    width={207}
                                    height={207}
                                    className="rounded-full group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm "
                                  />
                                </div>
                              </div>
                              <div className="imgAnm bg-siteColor rounded-full w-[54px] h-[54px]  text-white  absolute top-[3rem] left-[160px]  flex items-center justify-center  font-bold">
                                {item.price}$
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <h1 className="mb-[15px] text-[20px] font-bold text-white">
                              {item.title}
                            </h1>
                            <p className="mb-5 text-[15px] leading-[26px] font-normal text-white line-clamp-3">
                              {item.description}
                            </p>
                            <div className="justify-center flex ">
                              <Buying product={item} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
