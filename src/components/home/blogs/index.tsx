import Image from "next/image";
import React from "react";
import { data } from "./item";
import { CgProfile } from "react-icons/cg";
import { FaComments } from "react-icons/fa";

export default function Blogs() {
  return (
    <>
      <section className="bg-siteBg h-full ">
        <div className="bg-[url('/photo/download.png')] bg-no-repeat bg-cover h-full">
          <div className=" bg-[url('/photo/download2.png')] bg-no-repeat bg-cover h-full">
            <div>
              <div className=" satisfy-regular  text-siteColor flex gap-[15px] items-center text-center my-auto pt-20 text-[24px] mb-[19px] justify-center">
                <Image
                  src={"/svg/fork.svg"}
                  alt="img"
                  width={13}
                  height={30}
                  className="Zoomİmg"
                ></Image>
                News & Blogs
              </div>
              <p className="xs:mb-[44px] text-center xs:text-[24px] md:text-[55px] leading-[69px] font-semibold text-white mb-[166px] ">
                Get Every Single Updates
              </p>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[3%] gap-10 pb-20 ">
              {data.map((item) => {
                return (
                  <>
                    <div className=" bg-[rgb(15_39_39/1)] rounded-bl-[16px] rounded-br-[16px]">
                      <div className="xs:w-full md:w-auto xs:h-[250px] group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1]  duration-[0.5s] hover:after:h-full hover:after:opacity-0 hover:after:duration-700  h-[280px] relative mb-[18px] md:mb-[35px]  overflow-hidden">
                        <Image
                          src={item.imgUrl}
                          alt="img"
                          fill
                          className="w-full h-full rounded-tl-[10px] rounded-tr-[10px] group-hover:scale-[1.1]  duration-[0.5s] ease-in-out imgAnm"
                        ></Image>
                        <div className="z-10 absolute top-[18px] right-[18px] bg-siteColor rounded-[3px] flex flex-col items-center justify-center py-[13px] px-4">
                          <span className="w-[40px] font-medium text-[18px] md:text-[20px] leading-[30px] text-white">
                            {" "}
                            <span className="flex text-center">
                              {" "}
                              {item.date}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="content px-3 md:px-[30px] pb-[20px] md:pb-[34px] border-b border-white/10 mb-5">
                        <div className=" font-medium text-base leading-[23px] text-siteColor mb-5">
                          {item.category}
                        </div>
                        <p className=" font-semibold text-[14px] lg:text-[21px] xl:text-[21px] leading-[30px] text-white">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-3 md:px-[30px] pb-[34px]">
                        <div className="cursor-pointer flex items-center justify-start gap-[7px]  font-normal text-[14px] md:text-base leading-[23px] text-white">
                          <span>
                            <CgProfile />
                          </span>
                          <span className="hover:text-siteColor duration-300">
                            {item.name}
                          </span>
                        </div>
                        <div className="cursor-pointer flex items-center justify-start gap-[7px]  font-normal text-[14px] md:text-base leading-[23px] text-white">
                          <span>
                            <FaComments />
                          </span>
                          <span className="hover:text-siteColor duration-300">
                            {item.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
