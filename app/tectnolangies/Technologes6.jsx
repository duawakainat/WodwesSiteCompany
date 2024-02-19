import React from "react";
import Image from "next/image";
import Section7 from "../home/Section7";
import Section14 from "../home/Section14";
const Table = [
  {
    index: "1",
    h3Title: "Hour Based Developer",
    para:
      "Providing exceptional products and going the extra mile to support you throughout the entire process. From the moment",
  },
  {
    index: "2",
    h3Title: "Project Based Developer",
    para:
      "Providing exceptional products and going the extra mile to support you throughout the entire process. From the moment",
  },
];
const Technologes6 = () => {
  return (
    <div>
      <Section7 />
      <div className="relative">
        <Image
          src="/buildyourdream-4078f74d.png"
          width={0}
          height={0}
          alt="image"
          className="absolute inset-0 object-cover -z-10 bg-no-repeat h-full w-full"
        />
        <div className="lg:py-20 py-14 gap-10 w-[90%] mx-auto">
          <h2 className="text-[30px] text-[#fff] mb-3 font-[700]">
            Create Outstanding On-demand
            <span className="text-[#f62c73] ms-2 text-[30px] me-2 font-[700]">
              {""} Teams
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-7 md:w-5/6 mx-auto">
            {Table.map((menu, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#9d9d9d45] rounded-md mt-10"
                >
                  <div className="text-center py-9 px-10">
                    <h3 className="text-xl text-white lg:text-2xl font-[700] tracking-[0.54px]">
                      {menu.h3Title}
                    </h3>
                    <p className="lg:text-[16px] text-white text-sm mt-10">
                      {menu.para}
                    </p>
            <div className="flex justify-center">
              <a className="hover:bg-[#f62c73] text-white mt-10 hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
                Get Started
              </a>
            </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Section14/>
    </div>
  );
};

export default Technologes6;
