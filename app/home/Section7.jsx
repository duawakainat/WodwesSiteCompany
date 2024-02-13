import React from "react";
import Image from "next/image";
const Section7 = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/buildyourdream-4078f74d.png"
          width={0}
          height={0}
          className="absolute inset-0 object-cover -z-10 bg-no-repeat h-full w-full"
        />
        <div className="flex max-md:flex-col justify-between md:items-center lg:py-20 py-14 gap-10 w-[90%] mx-auto">
          <div>
            <h2 className="text-[30px] text-[#fff] mb-3 font-[700]">
              <span className="text-[#f62c73] ms-2 text-[30px] me-2 font-[700]">
                Hire Remote & Project
              </span>
              Based Developers for Wodwes
            </h2>
            <p className="text-[16px] font-[400] text-[#fff] leading-7">
              Power up your projects with WODWES remote developers. Boost
              productivity and achieve exceptional results. Get started today to
              unlock your projects full potential!
            </p>
          </div>
          <div>
            <div className="">
              <a className="hover:bg-[#f62c73] text-white hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
