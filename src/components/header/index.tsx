import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function Header({
  title,
  prodectTitle,
  productUrl,
}: {
  title: string;
  prodectTitle?: string;
  productUrl?: any;
}) {
  return (
    <div>
      <div className="bg-[url('/photo/header-bg.png')] bg-no-repeat bg-cover relative py-[70px] md:py-[171px]">
        <div className="bg-[rgb(0_0_0_/0.5)] absolute z-20 w-full h-full top-0"></div>
        <div className="flex gap-3 items-center container mx-[140px] absolute text-white z-[30] font-bold text-lg md:text-[25px] lg:text-[32px] leading-[60px] ">
          <Link href={"/"} className="hover:text-siteColor duration-300">
            Home
          </Link>
          <span>
            <GoChevronRight />
          </span>

          <a
            href={title ? productUrl : ""}
            className="hover:text-siteColor duration-300 cursor-pointer"
          >
            {title}
          </a>
          {prodectTitle ? <GoChevronRight /> : ""}

          <span className="hover:text-siteColor duration-300 cursor-pointer">
            {prodectTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
