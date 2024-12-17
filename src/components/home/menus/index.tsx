import Image from "next/image";
import React from "react";
import { Menusİtem } from "./item";

export default function Menus() {
  return (
    <section className="bg-siteBg">
      <div className="py-20  bg-[url('/photo/download2.png')] bg-no-repeat bg-cover">
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
        <div className="grid grid-cols-12 gap-x-4 lg:gap-x-[60px] xl:gap-x-[60px] mx-[3%]">
          <div className="col-span-3 ">
            {/* overlay-anim  fadeInUpİmg */}
            <div className="mb-[30px]  lg:max-h-[420px] xl:max-h-[500px] overflow-hidden group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative">
              <Image
                src={"/photo/best-food-menu-1.png"}
                alt={"img"}
                fill
                className="w-full h-full group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm"
              ></Image>
            </div>
            <span className=" font-medium lg:text-[24px] xl:text-[24px] leading-[30px] text-siteColor text-center underline block">
              VIEW ALL MENU
            </span>
          </div>
          <div className="col-span-6">
            {Menusİtem.map((item) => {
              return (
                <>
                  <div className="mb-[1.5rem]">
                    <h1 className="  font-semibold lg:text-[24px] xl:text-[24px] leading-[30px] text-white lg:mb-[10px] xl:mb-[15px]">
                      {item.title}
                    </h1>
                    <p className=" font-normal text-base leading-[20px] text-white mb-[5px]">
                      {item.desc}
                    </p>

                    <div className="  font-semibold lg:text-[24px] xl:text-[24px] leading-[30px] text-siteColor text-right  flex  ">
                      {/* <div className=""></div> */}
                      <div className=" relative w-full before:border before:border-siteColor before:border-dashed before:absolute before:top-[50%] before:left-0 before:w-full "></div>
                      <span className="pl-2 "> ${item.price}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-span-3">
            <span className=" font-normal lg:text-[24px] xl:text-[24px] leading-[30px] text-transparent  menusTitle ">
              Available: 07.00pm to 11.00pm
            </span>
            <div className="mt-[30px] lg:max-h-[420px] xl:max-h-[500px] overflow-hidden group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative">
              <Image
                src={"/photo/best-food-menu-2.png"}
                alt="img"
                fill
                className="group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm"
              ></Image>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
