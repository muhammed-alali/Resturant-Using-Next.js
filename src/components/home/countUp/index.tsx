"use client";
import React, { useState } from "react";
import CountUp from "react-countup";

export default function CountUpCom() {
  return (
    <section className="bg-[#102b2a]  py-20">
      <div className=" flex mx-[3%] items-center justify-between flex-col md:flex-row">
        <CountUp start={0} end={25} delay={0}>
          {({ countUpRef }) => (
            <div className="">
              <div className="text-center font-[Jakarta] font-bold text-[45px] lg:text-[96px] leading-[120px] text-white mb-5 lg:mb-[47px]">
                <span ref={countUpRef} />
              </div>
              <div className=" font-medium text-sm lg:text-base leading-[32px] text-white">
                Years Of Experience
              </div>
            </div>
          )}
        </CountUp>

        <p className="relative before:dashed-border w-[49px] before:absolute before:top-[50%] before:left-0 before:border before:w-full before:border-dashed before:border-siteColor"></p>
        <CountUp start={0} end={3} delay={0}>
          {({ countUpRef }) => (
            <div>
              <div className="text-center font-bold font-[Jakarta] text-[45px] lg:text-[96px] leading-[120px] text-transparent menusTitle mb-5 lg:mb-[47px]">
                <span ref={countUpRef} />
                <span>K</span>
              </div>

              <div className="font-medium text-sm lg:text-base leading-[32px] text-siteColor">
                Project’s Complete
              </div>
            </div>
          )}
        </CountUp>
        <p className="relative before:dashed-border w-[49px] before:absolute before:top-[50%] before:left-0 before:border before:w-full before:border-dashed before:border-siteColor"></p>

        <CountUp start={0} end={48} delay={0}>
          {({ countUpRef }) => (
            <div>
              <div className="text-center font-bold font-[Jakarta] text-[45px] lg:text-[96px] leading-[120px] text-white mb-5 lg:mb-[47px]">
                <span
                  className=" font-bold text-[45px] lg:text-[96px] leading-[120px] text-white mb-5 lg:mb-[47px]"
                  ref={countUpRef}
                />
              </div>
              <div className="font-medium text-sm lg:text-base leading-[32px] text-white">
                Professionals Team Member
              </div>
            </div>
          )}
        </CountUp>
        <p className="relative before:dashed-border w-[49px] before:absolute before:top-[50%] before:left-0 before:border before:w-full before:border-dashed before:border-siteColor"></p>

        <CountUp start={0} end={92} delay={0}>
          {({ countUpRef }) => (
            <div>
              <div className="text-center font-bold font-[Jakarta] text-[45px] lg:text-[96px] leading-[120px] text-white mb-5 lg:mb-[47px]">
                <span
                  className=" font-bold text-[45px] lg:text-[96px] leading-[120px] text-transparent menusTitle mb-5 lg:mb-[47px]"
                  ref={countUpRef}
                />
              </div>
              <div className="font-medium text-sm lg:text-base leading-[32px] text-siteColor">
                Awards Winning
              </div>
            </div>
          )}
        </CountUp>
      </div>
    </section>
  );
}
