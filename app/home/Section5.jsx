import React from "react";
import Image from "next/image";

const Section5 = () => {
  return (
    <div className="relative">
      <img
        src="/buildyourdream-4078f74d.png"
        className="absolute inset-0 object-cover -z-10 bg-no-repeat h-full w-full"
      />
      <div className="flex max-md:flex-col justify-between md:items-center lg:py-20 py-14 gap-10 w-[90%] mx-auto">
        <div>
          <h2 className="text-[30px] text-[#fff] mb-3 font-[700]">
            Let's Build Your Dream Website
            <span className="text-[#f62c73] ms-2 text-[30px] font-[700]">
              Together!:
            </span>
          </h2>
          <p className="text-[16px] font-[400] text-[#fff] leading-7">
            Whether you need a website redesign, development from scratch, or
            any other web-related services, team WODWES got you covered. Our
            experienced team of designers and developers will work closely with
            you to create a website that truly represents your vision and
            engages your target audience.
          </p>
        </div>
        <div>
          <div className="">
            <a className="hover:bg-[#f62c73] text-white hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
