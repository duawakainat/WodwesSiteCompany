"use client";
import { logging } from "@/next.config";
import React, { useState, useEffect } from "react";

const Section3 = () => {
  const [counterState, setCounter] = useState(0);
  const [counterState2, setCounter2] = useState(0);
  let timer;
  let counter = 0;
  useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (counterState === 60) {
        clearInterval(timer);
        return;
      }
      setCounter((prev) => prev + 1);
      counter++;
    }, 10);

    return () => clearInterval(timer);
  }, [counterState]);
  let timerT;
  let counterT = 0;
  useEffect(() => {
    clearInterval(timerT);
    timerT = setInterval(() => {
      if (counterState2 === 90) {
        clearInterval(timerT);
        return;
      }
      setCounter2((prev) => prev + 1);
      counterT++;
    }, 10);

    return () => clearInterval(timerT);
  }, [counterState2]);
  return (
    <div className="grid lg:grid-cols-2 w-[90%] mx-auto lg:pt-[109px] pt-[64px] lg:pb-[77px] pb-[64px]">
      <div className="lg:max-w-[690px] pr-8">
        <h2 className="text-[30px] max-[630px]:text-[22px] font-[700]">
          <span className="text-[#f62c73] text-[30px] max-[630px]:text-[22px] font-[700]">
            Empowering Digital Dreams:
          </span>
          Our Commitment to Crafting Exceptional Designs and Solutions for a
          Connected World.
        </h2>
        <p className="text-[16px] font-[400] text-[#272821] mt-[22px] mb-9 leading-[2.25rem]">
          At our design and development agency, we are dedicated to empowering
          your digital dreams. Our mission is to create exceptional designs and
          innovative solutions that resonate with your audience, drive growth,
          and leave a lasting impact. We blend creativity and technology to
          build digital experiences that bridge the gap between vision and
          reality. We believe in collaboration, quality, and exceeding
          expectations. With us, you ll find a partner committed to transforming
          your ideas into digital success stories and helping you thrive in
          todays interconnected world.
        </p>
        <div className="">
          <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
            Let is Talk
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 max-[415px]:grid-cols-1 gap-4 max-lg:mt-12">
        <div className="flex flex-col items-center rounded-[10px] py-6 justify-center border-[1px] border-gray-200 hover:shadow-[4px_4px_15px_#f62c7326;]">
          <h2 className="text-[45px] text-[#f62c73] font-[700]">
            {counterState}
            <span className="text-[45px] text-[#f62c73] font-[700]">+</span>
          </h2>
          <p className="text-[18px] text-[#272821]">Clients</p>
        </div>
        <div className="flex flex-col items-center rounded-[10px] py-6 justify-center border-[1px] border-gray-200 hover:shadow-[4px_4px_15px_#f62c7326;]">
          <h2 className="text-[45px] text-[#f62c73] font-[700]">6</h2>
          <p className="text-[18px] text-[#272821]">Years Experience</p>
        </div>
        <div className="flex flex-col items-center rounded-[10px] py-6 justify-center border-[1px] border-gray-200 hover:shadow-[4px_4px_15px_#f62c7326;]">
          <h2 className="text-[45px] text-[#f62c73] font-[700]">
            {counterState2}
            <span className="text-[45px] text-[#f62c73] font-[700]">+</span>
          </h2>
          <p className="text-[18px] text-[#272821]">Completed Projects</p>
        </div>
        <div className="flex flex-col items-center rounded-[10px] py-6 justify-center border-[1px] border-gray-200 hover:shadow-[4px_4px_15px_#f62c7326;]">
          <h2 className="text-[45px] text-[#f62c73] font-[700]">3</h2>
          <p className="text-[18px] text-[#272821]">Achievements</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
