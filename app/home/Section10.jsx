"use client";
import React, { useState } from "react";
import Image from "next/image";
//Front End Image
import ImageF1 from "@/public/frontEnd/angular-454a43b3.png";
import ImageF2 from "@/public/frontEnd/download.png";
import ImageF3 from "@/public/frontEnd/javascript-27c748c5.png";
import ImageF4 from "@/public/frontEnd/reactjs-4d7e3d05.png";
import ImageF5 from "@/public/frontEnd/shopify-6c626e8b.png";
import ImageF6 from "@/public/frontEnd/vuejs-f7f5008f.png";
import ImageF7 from "@/public/frontEnd/wordpress-1d5620e2.png";
//Back End Image
import BackI1 from "@/public/BackEnd/angular-454a43b3.png";
import BackI2 from "@/public/BackEnd/codeigniter-32ca51e5.svg";
import BackI3 from "@/public/BackEnd/firebase-a50605e6.png";
import BackI4 from "@/public/BackEnd/laravel-99219d75.png";
import BackI5 from "@/public/BackEnd/mongodb-3d8cb3d2.png";
import BackI6 from "@/public/BackEnd/nodejs-9c3d9739.png";
import BackI7 from "@/public/BackEnd/nodejs-9c3d9739.png";
//CMS End Image
import CMSI1 from "@/public/CMSImage/download(1).png";
import CMSI2 from "@/public/CMSImage/download.png";
import CMSI3 from "@/public/CMSImage/drupal-0247e3b7.png";
import CMSI4 from "@/public/CMSImage/magento-7bbc04b4.png";
import CMSI5 from "@/public/CMSImage/shopify-6c626e8b.png";
import CMSI6 from "@/public/CMSImage/woocommerce-840e7255.png";
import CMSI7 from "@/public/CMSImage/wordpress-1d5620e2.png";
const Table = [
  {
    index: "1",
    Image1: ImageF1,
    Image2: ImageF2,
    Image3: ImageF3,
    Image4: ImageF4,
    Image5: ImageF5,
    Image7: ImageF6,
    Image6: ImageF7,
    active: true,
  },
  {
    index: "2",
    Image1: BackI1,
    Image2: BackI2,
    Image3: BackI3,
    Image4: BackI4,
    Image5: BackI5,
    Image7: BackI6,
    Image6: BackI7,
    active: true,
  },
  {
    index: "3",
    Image1: CMSI1,
    Image2: CMSI2,
    Image3: CMSI3,
    Image4: CMSI4,
    Image5: CMSI5,
    Image7: CMSI6,
    Image6: CMSI7,
    active: true,
  },
];

const Section10 = () => {
  const [active, setActive] = useState(1);
  console.log(active);
  const Toogle = (active) => {
    setActive(active);
  };
  const getActiveClass = (index, className) => {
    if (active === index) {
      console.log(active);
      return className;
    } else {
      ("");
    }
  };
  return (
    <div className="py-20">
      <div className=" gap-10 w-[90%] mx-auto">
        <div className="max-w-[896px]">
          <div className="flex flex-wrap">
            <span className="text-[#f62c73] text-[30px] font-[700]">
              Technologie
            </span>{" "}
            <h2 className="text-[30px] font-[700] flex space-x-2 ">We Use</h2>
          </div>
          <p className="text-[18px] mt-5 font-[400] leading-7">
            We leverage cutting-edge technologies to create innovative
            solutions, ensuring your digital projects remain at the forefront of
            industry standards.
          </p>
        </div>
        <div></div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="max-w-[950px] mx-auto">
          <div className="flex justify-between md:my-14 my-10 gap-4 max-[343px]:gap-1">
            <button
              className={`text-[20px] max-[578px]:text-sm font-[600] duration-[300] hover:text-[#f62c73] ${getActiveClass(
                1,
                "activeBtn"
              )}`}
              id="1"
              onClick={() => Toogle(1)}
            >
              Frontend Technologies
            </button>
            <button
              className={`text-[20px] max-[578px]:text-sm font-[600] duration-[300] hover:text-[#f62c73] ${getActiveClass(
                2,
                "activeBtn"
              )}`}
              id="2"
              onClick={() => Toogle(2)}
            >
              Back-end Technologies
            </button>
            <button
              className={`text-[20px] max-[578px]:text-sm font-[600] duration-[300] hover:text-[#f62c73] ${getActiveClass(
                3,
                "activeBtn"
              )}`}
              id="3"
              onClick={() => Toogle(3)}
            >
              CMS technologies
            </button>
          </div>
          {active && (
            <div className="flex flex-wrap justify-center lg:max-w-[896px] max-w-[700px] lg:gap-x-40 gap-10 md:gap-x-20 lg:gap-y-20 md:gap-y-14 mx-auto">
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                {" "}
                <Image
                  src={Table[active].Image1}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />
              </div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                <Image
                  src={Table[active].Image2}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />{" "}
              </div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                <Image
                  src={Table[active].Image3}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />{" "}
              </div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                <Image
                  src={Table[active].Image7}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />{" "}
              </div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                <Image
                  src={Table[active].Image4}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />{" "}
              </div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                <Image
                  src={Table[active].Image5}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />{" "}
              </div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-[0px_4px_6px_rgba(39,40,33,.19)]">
                <Image
                  src={Table[active].Image6}
                  width={56}
                  height={56}
                  className=" w-14 h-14"
                  alt="filter_image"
                />
              </div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section10;
