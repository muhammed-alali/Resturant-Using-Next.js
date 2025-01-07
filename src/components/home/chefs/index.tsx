"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChefsData } from "./item";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Span } from "next/dist/trace";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Chefs() {
  const [open, setOpen] = useState(false);
  /**
 *   const [openFacebook, setOpenFacebook] = useState(false);
  const [openInstagram, setOpenInstagram] = useState(false);
  const [openTwitter, setOpenTwitter] = useState(false);
  const [openYoutube, setOpenYoutube] = useState(false);
 */
  return (
    <section className="bg-siteBg">
      <div className="bg-[url('/photo/download.png')] bg-no-repeat bg-cover ">
        <div>
          <div className=" satisfy-regular  text-siteColor flex gap-[15px] items-center text-center my-auto pt-20 text-[24px] mb-[19px] justify-center">
            <Image
              src={"/svg/fork.svg"}
              alt="img"
              width={13}
              height={30}
              className="Zoomİmg"
            ></Image>
            Meet Our Exclusive
          </div>
          <p className=" text-center xs:text-[24px] md:text-[55px] leading-[69px] font-semibold text-white mb-[30px] ">
            Exclusive & Master Chefs
          </p>
        </div>
        <div className="xs:pt-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-[3%] grid  gap-6 py-28 ">
          {ChefsData.map((item: any, index: number) => {
            return (
              <>
                <div className="relative">
                  <div className=" xs:max-h-[320px] max-h-[290px] md:max-h-[354px] w-full h-full mb-[25px] relative overflow-hidden">
                    <Image
                      src={item.imgUrl}
                      alt=""
                      fill
                      className="!relative hover:scale-[1.1]  duration-[0.4s] ease-in-out i"
                    />
                    {open && (
                      <div className="">
                        <div className="absolute bottom-0 right-0">
                          <div className="py-3 px-3 bg-siteColor text-white flex items-center justify-center hover:bg-siteBg transition-all ease-linear duration-300">
                            <FaFacebookF />
                          </div>
                          <div className="py-3 px-3 bg-siteColor text-white flex items-center justify-center hover:bg-siteBg transition-all ease-linear duration-300">
                            <FaInstagram />
                          </div>
                          <div className="py-3 px-3 bg-siteColor text-white flex items-center justify-center hover:bg-siteBg transition-all ease-linear duration-300">
                            <FaYoutube />
                          </div>
                          <div className="py-3 px-3 bg-siteColor text-white flex items-center justify-center hover:bg-siteBg transition-all ease-linear duration-300">
                            <FaTwitter />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="block font-semibold text-[22px] mb-[10px] text-white ">
                        {item.title}
                      </h1>
                      <span className="text-[16px] font-medium text-siteColor ">
                        {item.chefs}
                      </span>
                    </div>
                    <div
                      onClick={(index) => {
                        setOpen(!open);
                      }}
                      className="cursor-pointer w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center s "
                    >
                      {!open ? (
                        <HiOutlinePlusSm className="text-white text-[20px]" />
                      ) : (
                        <IoClose className="text-white text-[20px] rotate-90	" />
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
