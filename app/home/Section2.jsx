"use client";
import React from "react";
import Image from "next/image";
const Section2 = () => {
  return (
    <div className="relative ">
      <Image
        src="/Banner-22ae39b2.png" width={0} height={0} alt="image"
        className="absolute inset-0 object-cover -z-10 bg-no-repeat h-full w-full"
      />
      <div className="w-[90%] text-center text-white max-w-[950px] mx-auto lg:pt-[109px] pt-[64px] lg:pb-[77px] pb-[64px]">
        <h1 className="xl:text-[60px] lg:text-[48px] md:text-[36px] text-[30px] font-bold ">
          We are a Full Service{" "}
          <span className="h-[1.5em] overflow-hidden inline-block align-middle text-[#f62c73]">
            <ul className="slide_Text text-left">
              <li className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">
                Design
              </li>
              <li className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">
                with ease
              </li>
              <li className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">
                Efficiency
              </li>
              <li className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">
                Design
              </li>
            </ul>
          </span>
          Development Agency
        </h1>
        <h2 className="text-[18px] py-6 md:my-8 font-[500] text-[#f62c73]">
          Empowering Businesses with Cutting-Edge Web Technologies
        </h2>
        <p className="text-[16px] mb-12">
          A web design and development agency crafting seamless web and software
          apps for startups,<br className="max-lg:hidden"></br>
          businesses, and large enterprises to help them in building a strong
          online presence
          <br className="max-lg:hidden"></br> and thrive in the digital age.
        </p>
        <div className="flex justify-center">
          <a className="bg-[#f62c73] text-white border-2 border-[#f62c73] hover:bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
            Let is Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section2;
