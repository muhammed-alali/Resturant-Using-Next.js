import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div>
      <div className="bg-siteBg h-full">
        <div className="xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[120px] overflow-hidden grid grid-cols-3 mx-[3%] gap-5">
          <div>
            <div className=" bg-[url('/photo/download.png')] bg-no-repeat bg-cover bg-center py-[42px] px-8 relative  after:absolute contactBg after:top-0 after:left-0 after:w-full after:h-[116px] after:bg-[#0d2221] hover:after:bg-siteColor text-center transition-all ease-linear duration-300 after:transition-all after:ease-linear after:duration-300">
              <div className="relative icon w-[120px] h-[120px] rounded-full border-[2px] border-siteColor  bg-white flex items-center justify-center mx-auto z-10  mb-5">
                <Image
                  src={"/photo/phone.svg"}
                  alt="svg"
                  width={35}
                  height={45}
                ></Image>
              </div>
              <div className=" font-semibold text-[22px] leading-[32px] text-white mb-2">
                Any Questions
              </div>
              <div>
                <div className=" font-normal text-[18px] leading-[28px] text-white block">
                  012-345-6789
                </div>
                <div className=" font-normal text-[18px] leading-[28px] text-white block">
                  539-737-1380
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div className=" bg-[url('/photo/download.png')] bg-no-repeat bg-cover bg-center py-[42px] px-8 relative  after:absolute contactBg after:top-0 after:left-0 after:w-full after:h-[116px] after:bg-[#0d2221] hover:after:bg-siteColor text-center transition-all ease-linear duration-300 after:transition-all after:ease-linear after:duration-300">
              <div className="relative icon w-[120px] h-[120px] rounded-full border-[2px] border-siteColor  bg-white flex items-center justify-center mx-auto z-10  mb-5">
                <Image
                  src={"/photo/email.svg"}
                  alt="svg"
                  width={35}
                  height={45}
                ></Image>
              </div>
              <div className=" font-semibold text-[22px] leading-[32px] text-white mb-2">
                Email Address
              </div>
              <div>
                <div className=" font-normal text-[18px] leading-[28px] text-white block">
                  ratter2025@gmail.com
                </div>
                <div className=" font-normal text-[18px] leading-[28px] text-white block">
                  rattercontact@gmail.com
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div className=" bg-[url('/photo/download.png')] bg-no-repeat bg-cover bg-center py-[42px] px-8 relative  after:absolute contactBg after:top-0 after:left-0 after:w-full after:h-[116px] after:bg-[#0d2221] hover:after:bg-siteColor text-center transition-all ease-linear duration-300 after:transition-all after:ease-linear after:duration-300">
              <div className="relative icon w-[120px] h-[120px] rounded-full border-[2px] border-siteColor  bg-white flex items-center justify-center mx-auto z-10  mb-5">
                <Image
                  src={"/photo/phone.svg"}
                  alt="svg"
                  width={35}
                  height={45}
                ></Image>
              </div>
              <div className=" font-semibold text-[22px] leading-[32px] text-white mb-2">
                Office Location
              </div>
              <div>
                <div className=" font-normal text-[18px] leading-[28px] text-white block">
                  62 Arlington St. Suite 100
                </div>
                <div className=" font-normal text-[18px] leading-[28px] text-white block">
                  Boston, CA 01117, USA
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84916.1582814322!2d38.743423162511185!3d37.16724582340418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153471ebdc619091%3A0x8e788516b709466c!2zxZ5hbmzEsXVyZmE!5e1!3m2!1str!2str!4v1734372811927!5m2!1str!2str"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="">
            <div className="xs:mx-[3%] md:mx-8 lg:mx-20 ">
              <div className="xs:px-3 md:px-[75px] lg:px-[105px] bg-[url('/photo/download.png')] bg-no-repeat bg-cover bg-center py-[82px] ">
                <div className="xs:text-[25px] xs:leading-[40px] font-semibold text-[45px] leading-[55px] text-white text-center mb-[60px]">
                  Have be any question? <div>feel free to Contact</div>
                </div>
                <form>
                  <div className="xs:grid-cols-1 grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="block pb-2.5 pt-4 pl-5 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0  peer  font-normal text-[15px] leading-[26px] text-white"
                      />
                      <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                        First Name
                      </label>
                    </div>
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="block pb-2.5 pt-4 pl-5 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0  peer  font-normal text-[15px] leading-[26px] text-white"
                      />
                      <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                        Last Name
                      </label>
                    </div>
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="block pb-2.5 pt-4 pl-5 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0  peer  font-normal text-[15px] leading-[26px] text-white"
                      />
                      <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                        Phone
                      </label>
                    </div>
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="block pb-2.5 pt-4 pl-5 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0  peer  font-normal text-[15px] leading-[26px] text-white"
                      />
                      <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="block pb-2.5 pt-4 pl-5 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0  peer  font-normal text-[15px] leading-[26px] text-white"
                      />
                      <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                        Subject
                      </label>
                    </div>
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="block pb-2.5 pt-4 pl-5 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0  peer  font-normal text-[15px] leading-[26px] text-white"
                      />
                      <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                        Address
                      </label>
                    </div>
                  </div>
                  <div className="relative mt-5">
                    {" "}
                    <textarea className="h-[190px] block pb-2.5 pt-4 w-full bg-transparent border border-white/30 focus:border-siteColor appearance-none focus:outline-none focus:ring-0 peer  font-normal text-[15px] leading-[26px] text-white"></textarea>
                    <label className="pl-5 font-normal text-[14px] md:text-[18px] leading-[26px] text-white absolute duration-300 transform -translate-y-4 scale-75 top-[1.8rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:bg-siteColor peer-focus:text-white er-placeholder-shown:pl-5  peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-1 peer-focus:py-1 start-1">
                      Address
                    </label>
                  </div>
                </form>
                <div className="mt-8 mx-auto flex justify-center">
                  <div className=" relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-siteColor rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Send Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
