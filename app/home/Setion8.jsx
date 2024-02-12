import React from "react";
import Image from "next/image";
const Table = [
  {
    index: "1",
    h3Title: "Product Design",
    para:
      "Elevate your product's appeal and functionality with our design expertise. We create innovative and user-centric solutions that captivate and deliver results.",
  },
  {
    index: "2",
    h3Title: "Service Designt",
    para:
      "Elevate user experiences with our service design expertise. We blend creativity and strategy to craft seamless, user-centric solutions that drive succes",
  },
  {
    index: "3",
    h3Title: "Business Design",
    para:
      "Transform your business with our expert design services. We craft captivating designs that drive success, leaving a lasting impact on your brand.",
  },
];
const Setion8 = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:py-20 py-14 w-[90%] mx-auto">
      <div className="lg:max-w-[500px]">
        <div className="sticky top-[8rem]">
          <h2 className="text-[36px] text-[#272821] font-bold">
            What you get with
            <span className="text-[#f62c73] text-[36px] font-bold">
              {" "}
              WODWES{" "}
            </span>
            product and service design
          </h2>
          <p className="text-[14px] font-[400] my-5 text-[#272821] leading-8">
            With WODWES product and service design, you get a transformative
            experience that marries innovation, aesthetics, and functionality.
            We craft solutions that resonate with your audience, fuel growth,
            and elevate your brand. Expect meticulous attention to detail,
            seamless user experiences, and a creative spark that sets you apart
            in today's competitive landscape. We're your partners in turning
            ideas into tangible success stories
          </p>
          <div className="">
            <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-1  xl:grid-cols-2 grid-cols-2 max-[578px]:grid-cols-1 gap-5">
        {Table.map((menu, index) => {
          return (
            <div>
            <div className="p-5 bg-[#f8f8f8] group/item group/edit group-hover/item:bg-[rgba(39,40,33 ,1]  rounded-[10px]">
              <Image
              alt="image"
                src="/full-stack-c89c521a.png"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <h3 className="text-[18px] font-[700] my-5">{menu.h3Title}</h3>
              <p className="text-[14px] text-[#272821]">{menu.para}</p>
            </div></div>
          );
        })}
      </div>
    </div>
  );
};

export default Setion8;
