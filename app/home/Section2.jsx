"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Text=["hello", "hello2","hello3"]
const Section2 = () => {
const [index, SetIndex]=useState(0)
  return (
    <div className="relative ">
       <img src='/Banner-22ae39b2.png' className="absolute inset-0 object-cover -z-10 bg-no-repeat h-full w-full"/>
      <div className="w-[90%] text-center text-white max-w-[950px] mx-auto lg:pt-[109px] pt-[64px] lg:pb-[77px] pb-[64px]">
        <h1 className="xl:text-[60px] lg:text-[48px] md:text-[36px] text-[30px] font-bold ">
          We’re a Full Service
          <span className="h-[1.5em] overflow-hidden inline-block mx-3 align-middle text-[#f62c73]">
          <ul className="slide_Text text-left">
          <li data-v-b3b5a19 className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">Design</li>
          <li data-v-b3b5a19 className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">with ease</li>
          <li data-v-b3b5a19 className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">Efficiency</li>
          <li data-v-b3b5a19 className="h-[1.4em] xl:text-[60px] lg:text-[48px] md:text-[36px] sm:text-[30px] font-bold">Design</li>
          </ul></span>
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
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section2;
