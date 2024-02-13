import React from "react";
import Image from "next/image";
const Section9 = () => {
  return (
    <div className="relative ">
      <Image
        src="/productbg-4898e321.png"
        className="absolute inset-0 object-cover -z-10 bg-no-repeat h-full w-full"
        width={0}
        height={0}
      />
      <div className="py-20 gap-10 w-[90%] mx-auto">
        <div className="flex max-md:flex-col justify-between md:items-center gap-10">
          <div className="max-w-[572px]">
            <h2 className="text-[30px] text-[#fff] font-[700]">
              <span className="text-[#f62c73] ms-2 text-[30px] font-[700]">
                Product
              </span>
              We Develop
            </h2>
            <p className="text-[16px] mt-5 font-[400] text-[#fff] leading-7">
              Hire testers and QA experts to perform end-to-end testing of your
              existing product, website, or software solution
            </p>
          </div>
          <div>
            <div className="">
              <a className="hover:bg-[#f62c73] text-white hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
                Let is Talk
              </a>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-3 mt-10">
          <div>
            <Image src="/cvmakerhub-2467481a.png" width={0} height={0} />
          </div>
          <div>
            <Image src="/cvmakerhub2-cbfb7ecb.png" width={0} height={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
