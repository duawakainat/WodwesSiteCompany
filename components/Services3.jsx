import React from "react";

const Services3 = ({ choose,choosePara }) => {
  return (
      <div className="w-[90%] mx-auto">
    <div className="flex max-md:flex-col justify-between gap-10">
    
        <div className="w-full h-full max-w-[522px]">
        <h2 className="text-[30px] text-[#272821] mb-7 font-[700]">{choose}</h2>
        <div className="">
          <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <p className="xl:text-[18px] text-[#272821] font-[400] xl:leading-9 leading-7">
         {choosePara}
        </p>
      </div>
    </div></div>
  );
};

export default Services3;
