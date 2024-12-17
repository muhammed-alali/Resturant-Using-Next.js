import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { LuPizza } from "react-icons/lu";
import { MdRoomService } from "react-icons/md";

export default function About() {
  return (
    <>
      <section className="bg-siteBg">
        <div className="py-20  bg-[url('/photo/download2.png')] bg-no-repeat bg-cover">
          <div className="grid grid-cols-12 gap-32 mx-[3%] ">
            <div className="relative col-span-5">
              <div className="max-w-[516px] h-[640px]">
                <Image
                  src={"/photo/our-resturent-1.png"}
                  alt=""
                  fill
                  className="rounded-[10px] rounded-tl-[100px] rounded-br-[100px] !relative"
                ></Image>
                <span className="text-white bg-siteColor w-[130px] h-[130px] absolute top-0 right-0 rounded-[7px] gap-[5px] flex justify-center items-center flex-col">
                  <IoIosStar className="text-[30px]" />5 Star Rating
                </span>
              </div>
              <div className="w-[304px] h-[304px] absolute bottom-[5rem] right-[-7rem] ">
                <Image src={"/photo/our-resturent-2.png"} alt="" fill></Image>
              </div>
            </div>
            <div className="col-span-6">
              <div className=" satisfy-regular  text-siteColor flex gap-[15px] text-[24px] mb-[19px] ">
                <Image
                  src={"/svg/fork.svg"}
                  alt="img"
                  width={13}
                  height={30}
                  className="Zoomİmg"
                ></Image>
                Our Restaurant
              </div>
              <h1 className="fontTitle text-[50px] font-semibold text-white mb-4 lg:mb-[20px] xl:mb-[33px]">
                Enjoy Your Eating Time With Chefmaster
              </h1>
              <p className="font-manrope font-medium lg:text-[18px] xl:text-[18px] lg:leading-[25px] xl:leading-[31px] text-white lg:mb-[20px] xl:mb-[35px]">
                It has stood the test of time and proceeds Elevate your brand
                with the Agencyo Agency – everything from strategy to
                advertising & scale.
              </p>
              <div className="flex gap-8 mt-[30px] mb-[60px]">
                <div>
                  <span className="w-[50px] h-[50px] bg-siteColor rounded-full flex items-center justify-center mb-4 lg:mb-[25px] xl:mb-[30px]">
                    <MdRoomService className="text-white text-[27px]" />
                  </span>
                  <h1 className=" font-bold lg:text-[20px] xl:text-[20px] leading-[25px] text-white lg:mb-[18px] xl:mb-[21px]">
                    Experience Chefs
                  </h1>
                  <p className="font-manrope font-normal lg:text-[18px] xl:text-[18px] leading-[32px] text-[#dddddd]">
                    Our mission is to empower busi with cutting-edge digital
                    solu
                  </p>
                </div>
                <div>
                  <span className="w-[50px] h-[50px] bg-siteColor rounded-full flex items-center justify-center mb-4 lg:mb-[25px] xl:mb-[30px]">
                    <LuPizza className="text-white text-[27px]" />
                  </span>
                  <h1 className=" font-bold lg:text-[20px] xl:text-[20px] leading-[25px] text-white lg:mb-[18px] xl:mb-[21px]">
                    Fresh & Organic Foods
                  </h1>
                  <p className="font-manrope font-normal lg:text-[18px] xl:text-[18px] leading-[32px] text-[#dddddd]">
                    We are dedicated to crafting digi experiences that
                    seamlessly
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-siteColor rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
