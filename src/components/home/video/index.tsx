import Link from "next/link";
import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Video() {
  return (
    <div className=" relative bg-[url('/photo/download3.png')] bg-cover bg-center h-[300px] md:h-[555px] flex items-center justify-center overflow-hidden">
      <div className="video-play-btn ripple">
        <Link
          target="_blank"
          className=" w-[100px] md:w-[148px] h-[100px] md:h-[148px] !rounded-full duration-500 bg-siteColor hover:bg-[rgb(227_78_20)] flex items-center justify-center flex-col font-plus-jakarta-sans font-medium md:font-semibold text-xs md:text-base leading-[20px] text-white"
          href="https://www.youtube.com/watch?v=pGbIOC83-So"
        >
          <MdOutlineSlowMotionVideo className="text-[24px]" />
          play video
        </Link>
      </div>
    </div>
  );
}
