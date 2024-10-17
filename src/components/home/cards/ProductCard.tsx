"use client";
import Image from "next/image";
import { FC } from "react";

import { Product } from "@/context/CartProvider";
import Buying from "@/components/addtocart";
import Link from "next/link";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { cardItems } from "./item";

// interface Props {
//   product: Product;
// }

const ProductCard = () => {
  return (
    // <div className="w-full bg-white shadow-md rounded overflow-hidden relative">
    //   <div className="w-full aspect-square relative">
    //     <Image
    //       src={product.thumbnail}
    //       alt={product.title}
    //       className="w-full aspect-square object-cover"
    //       fill
    //     />
    //   </div>

    //   <div className="p-4 space-y-2">
    //     <h1 className="font-semibold text-2xl">{product.title}</h1>
    //     <div className="flex items-center space-x-3">
    //       <p className="line-through italic text-gray-500">
    //         MRP: ${product.mrp}
    //       </p>
    //       <p className="font-semibold">Sale Price: ${product.salePrice}</p>
    //     </div>
    //   </div>

    //   <span className="absolute top-2 right-2 font-semibold bg-orange-600 p-2 rounded-md inline-block text-sm text-white shadow-md">
    //     {product.percentOff}% Off
    //   </span>

    //   <Buying product={product} />
    // </div>
    <section className="overflow-hidden bg-siteBg  md:h-full ">
      <div className=" xs:h-full md:h-full bg-no-repeat bg-[url('/photo/download1.png')] bg-center py-[70px] md:bg-[length:102%_94%] lg:bg-[length:97%_109%]">
        <div className="">
          <div className="w-full ">
            <div>
              <div className=" satisfy-regular  text-siteColor flex gap-[15px] items-center text-center my-auto mt-20 text-[24px] mb-[19px] justify-center">
                <Image
                  src={"/svg/fork.svg"}
                  alt="img"
                  width={13}
                  height={30}
                  className="Zoomİmg"
                ></Image>
                The Best Food
              </div>
              <p className=" text-center xs:text-[35px] md:text-[55px] leading-[69px] font-semibold text-white mb-[166px] ">
                At The Best Price
              </p>
            </div>
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
                          <div className="card  bg-cardBg text-center flex items-center justify-center flex-col px-5 pb-[51px] rounded-tl-[4rem] rounded-br-[4rem]">
                            <div>
                              <div className="m-auto  relative block  ">
                                <div className="relative mt-[-6rem] mb-[2rem]">
                                  <div className="group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative  ">
                                    <Image
                                      src={item.url}
                                      alt="img"
                                      width={207}
                                      height={207}
                                      className="group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm "
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
            <div className="cards mt-[140px]  xs:gap-[7rem] md:gap-y-[7rem] md:gap-x-[4rem] ">
              <Swiper
                slidesPerView={3}
                navigation={true}
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3500,
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
                          <div className="card  bg-cardBg text-center flex items-center justify-center flex-col px-5 pb-[51px] rounded-tl-[4rem] rounded-br-[4rem]">
                            <div>
                              <div className="m-auto  relative block  ">
                                <div className="relative mt-[-6rem] mb-[2rem]">
                                  <div className="group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative  ">
                                    <Image
                                      src={item.url}
                                      alt="img"
                                      width={207}
                                      height={207}
                                      className="group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm "
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
            <div className="cards  mt-[140px] xs:gap-[7rem] md:gap-y-[7rem] md:gap-x-[4rem] ">
              <Swiper
                slidesPerView={3}
                navigation={true}
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 4000,
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
                          <div className="card  bg-cardBg text-center flex items-center justify-center flex-col px-5 pb-[51px] rounded-tl-[4rem] rounded-br-[4rem]">
                            <div>
                              <div className="m-auto  relative block  ">
                                <div className="relative mt-[-6rem] mb-[2rem]">
                                  <div className="group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative  ">
                                    <Image
                                      src={item.url}
                                      alt="img"
                                      width={207}
                                      height={207}
                                      className="group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm "
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
      </div>
    </section>
  );
};

export default ProductCard;
