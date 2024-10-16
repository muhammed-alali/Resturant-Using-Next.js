"use client";

import Buying from "@/components/addtocart";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Metadata({ item }: any) {
  const İmagesRef = useRef<any>();

  const handle = (e: any) => {
    let target = e.target;
    İmagesRef.current.src = target.src;
  };

  useEffect(() => {
    İmagesRef.current.src = item.url;
  }, [İmagesRef]);

  return (
    <>
      <section className="bg-siteBg xs:h-[115vh] md:h-screen">
        <div className="mx-4 md:container md:mx-auto ">
          <div className="h-screen xs:grid-cols-1 grid md:grid-cols-2  pt-24">
            <div className="section1Animation m-auto  ">
              <div>
                <Image
                  ref={İmagesRef}
                  src={İmagesRef.current}
                  alt="Selected Image"
                  width={200}
                  height={200}
                  className="m-auto xs:mb-4 md:mb-7 rounded-full "
                ></Image>
              </div>
            </div>

            <div className="section2Animation m-auto text-white">
              <div className="flex ">
                <div>
                  <h1 className="xs:text-[2rem] md:text-[2.5rem] leading-10 mb-1 titleAnmation">
                    {item.title}
                  </h1>
                </div>
              </div>

              <p className="text-[.875rem] leading-[1.25rem] text-[#e8dfbf] my-4">
                {item.description}
              </p>
              <div className="flex gap-[6px] mb-4 ">
                {item.images.map((img: any, index: number) => {
                  return (
                    <>
                      <div>
                        <Image
                          onClick={handle}
                          key={index}
                          src={img}
                          alt={"img"}
                          width={90}
                          height={90}
                          className="!relative rounded-full object-none"
                        />
                      </div>
                    </>
                  );
                })}
              </div>
              {/* <div
                onClick={addToCart}
                className="flex gap-2 items-center bg-siteColor text-white w-fit p-2 rounded-md cursor-pointer"
              >
                {item.addCard}
                <span>Add to Cart</span>
              </div> */}
              <Buying product={item} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
