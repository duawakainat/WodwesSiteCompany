import React from "react";

const Section13 = () => {
  return (
    <div className="flex max-lg:flex-col h-full lg:w-full w-[90%] mx-auto justify-between gap-10">
      <div className="w-full h-full lg:ml-[10%] lg:pt-40 max-w-md lg:sticky top-0">
        <h2 className="xl:text-[48px] text-[30px] font-bold mb-5">
          Get in Touch
        </h2>
        <p className="">
          We love hearing about how our work has helped businesses succeed and
          how WODWES became their go-to development team.
        </p>
      </div>
      <div className="h-full w-full bg-[#272821]">
        <div className="grid grid-cols-2 max-w-[42rem] gap-10 h-full rounded-[10px] xl:p-20 sm:p-14 max-[635px]:p-10 max-[427px]:pt-10 max-[427px]:px-4">
          <input
            placeholder="Enter your name"
            className="pb-1 bg-transparent col-span-2 placeholder:text-[#9c9c9c] border-b-[1px] text-[#9c9c9c] outline-none w-full border-[#9c9c9c]"
          />
          <input
            placeholder="Enter your name"
            className="pb-1 bg-transparent placeholder:text-[#9c9c9c] text-[#9c9c9c] border-b-[1px] w-full outline-none border-[#9c9c9c]"
          />

          <input
            placeholder="Enter your name"
            className="pb-1 bg-transparent placeholder:text-[#9c9c9c] border-b-[1px] w-full outline-none text-[#9c9c9c] border-[#9c9c9c]"
          />
          <textarea
            rows={10}
            placeholder="Your massage here..."
            className="col-span-2 bg-transparent rounded-[10px] resize-y p-2 border-[1px] border-[#9c9c9c] outline-none text-[#9c9c9c] placeholder:text-[#9c9c9c]"
          ></textarea>
          <div className="">
            <a className="hover:bg-[#f62c73] text-white hover:text-white border-2 border-[#f62c73] bg-transparent sm:w-[200px] max-[427px]:w-full w-[200px] mt-4 font-[600] py-3 px-5 flex justify-center items-center">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section13;
