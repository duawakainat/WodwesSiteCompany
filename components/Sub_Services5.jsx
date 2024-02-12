import React from "react";

const Sub_Services5 = ({ Development_H, Development_Para }) => {
  return (
    <div className="">
      <div className="lg:max-w-[500px]">
        <div className="">
          <h2 className="text-[36px] leading-tight text-[#272821] font-bold">
            {Development_H}
          </h2>
          <p className="text-[14px] font-[400] my-5 text-[#272821] leading-8">
            {Development_Para}
          </p>
          <div className="">
            <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub_Services5;
