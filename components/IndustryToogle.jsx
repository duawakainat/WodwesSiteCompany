import React from "react";
import Image from "next/image";
const Table = [
  {
    para: "Healthcare",
    para2: "Travel",
    para3: "Insurance",
  },
  {
    para: "Manufacturing",
    para2: "Transportation and Logistics",
  },
  {
    para: "Enterprise",
    para2: "EdTech",
  },
  {
    para: "Media and Entertainment",
    para2: "Telecom",
  },
];
const IndustryToogle = () => {
  return (
    <div className="lg:w-[90%] w-[100%] mx-auto lg:bg-white">
      <div className="lg:flex lg:flex-row lg:justify-between lg:bg-white bg-[#f6f6f699] mx-auto lg:absolute lg:px-[3.5rem] px-4 lg:w-[90%] flex-col lg:gap-[0.75rem] lg:py-[64px] py-6">
        {Table.map((menu, index) => {
          return (
            <div key={index} className="">
              <div className="">
                <div className="flex gap-1 mt-4">
                  <Image
                    alt="image"
                    src="/healthcare-055b1dcc.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="xl:text-[14px] tracking-[0.28px] lg:text-sm cool-link hover:text-[#f62c73]">
                    {menu.para}
                  </p>
                </div>
                <div className="flex gap-1 mt-4">
                  <Image
                    alt="image"
                    src="/healthcare-055b1dcc.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="xl:text-[14px] tracking-[0.28px] lg:text-sm cool-link hover:text-[#f62c73]">
                    {menu.para2}
                  </p>
                </div>
                <div className="flex gap-1 mt-4">
                  <Image
                    alt="image"
                    src="/healthcare-055b1dcc.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="xl:text-[14px] transition duration-[.2s] tracking-[0.28px] lg:text-sm cool-link hover:text-[#f62c73]">
                    {menu.para3}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryToogle;
