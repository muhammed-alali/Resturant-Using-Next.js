import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-navBg h-full py-10 text-white">
        <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 mx-auto  lg:max-w-[74rem] md:px-8">
          <div className="xs:mb-4 md:mb-0">
            <Image
              className="mb-4 "
              src={"/photo/logo.png"}
              alt="img"
              width={190}
              height={110}
            ></Image>
            <div className="w-52">
              Lorem ipsum dolor, sit amet consectetur adipisicing elits
            </div>
          </div>
          <div className="xs:mb-4 md:mb-0">
            <h1 className="mb-4 text-lg font-bold border-b-2 border-siteColor w-fit">
              Quick Link
            </h1>
            <ul>
              <li className="mb-2 hover:text-siteColor duration-500 cursor-pointer">
                Fast Delivery
              </li>
              <li className="w-[200px] mb-2 hover:text-siteColor duration-500 cursor-pointer">
                Vegan Cuisine Fresh Products
              </li>
              <li className="mb-2 hover:text-siteColor duration-500 cursor-pointer">
                Skilled Chefs
              </li>
            </ul>
          </div>
          <div className="xs:mb-4 md:mb-0">
            <h1 className="mb-4 text-lg font-bold border-b-2 border-siteColor w-fit ">
              Information
            </h1>
            <ul>
              <li className="mb-2 hover:text-siteColor duration-500 cursor-pointer">
                About us
              </li>
              <li className="mb-2 hover:text-siteColor duration-500 cursor-pointer">
                Delivery Information
              </li>
              <li className="mb-2 hover:text-siteColor duration-500 cursor-pointer">
                Sitemap
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="mb-4 text-lg font-bold border-b-2 border-siteColor w-fit">
              Get in touch
            </h1>
            <ul>
              <li className="mb-2 hover:text-siteColor duration-500 cursor-pointer">
                (+123) 486 789 163
              </li>
              <li className="mb-3 hover:text-siteColor duration-500 cursor-pointer">
                example@mail.com
              </li>
              <li className="flex gap-4 mb-2">
                <Link
                  href={"https://www.facebook.com"}
                  className="hover:bg-siteColor duration-500 bg-footerBg rounded text-white p-2"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href={"https://www.twitter.com"}
                  className="hover:bg-siteColor duration-500 bg-footerBg rounded text-white p-2"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href={"https://www.instagram.com"}
                  className="hover:bg-siteColor duration-500 bg-footerBg rounded text-white p-2"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
