import React from "react";
import Image from "next/image";
import Image1 from '@/public/experience-55c90447.png'
import Image2 from '@/public/transparency-91a70a3e.png'
import Image3 from '@/public/flexible-6edac2a2.png'
const Table = [
  {
    index: "1",
    image: Image1,
    h3Title: "Pool of Experience and Expertise",
    para:
      "With a diverse team of professionals with expertise in various areas of web development, including front-end and back-end development, database design, user interface design, and e-commerce solutions, we can handle all aspects of your web development project efficiently and effectively.",
  },
  {
    index: "2",
    image: Image3,
    h3Title: "Transparency and Quality",
    para:
      "We have an in-house rigorous quality assurance process in place to ensure that our development solutions are of the highest quality. We conduct thorough testing and debugging to identify and fix any issues before delivering the final product to you",
  },
  {
    index: "3",
    image: Image3,
    h3Title: "Flexible Hiring Models",
    para:
      "We have flexible hiring models for our partners. Whether you need to hire on an hourly basis, a project basis, or a dedicated team for a project, team WODWES got you covered with the flexibility and efficiency.",
  },
];
const Section11 = () => {
  return (
    <div className="relative">
      {" "}
      <img src="/chooseusbg-1b15bf14.png" className="absolute inset-0 -z-10 object-cover bg-no-repeat h-full w-full"/>
      <div className="py-20">
        <div className="gap-10 w-[90%] mx-auto">
          <div className="flex max-lg:flex-col gap-10 justify-between">
            <div className="lg:!w-[505px] lg:sticky lg:top-[8rem] w-full h-full">
              <h2 className="text-[30px] lg:w-[505px] text-white font-[700] space-x-2 ">
                {" "}
                Why Choose WODWES for{" "}
                <span className="text-[#f62c73] text-[30px] font-[700]">
                  Website
                </span>{" "}
                Design and Development Services?
              </h2>
              <p className="text-[18px] mt-5 font-[400] text-white leading-7">
                We’re not a typical development agency — We’re
                <br className="max-lg:hidden" /> your technology partner
                striving <br className="max-lg:hidden" />
                to achieve your specific goals.
              </p>
            </div>
            <div className="lg:max-w-[699px] lg:mt-24">
                <div className=" lg:space-y-20 space-y-10">{Table.map((menu,index)=>{
        return <div className="">
           <Image src={menu.image} alt="image" width={36} height={36} className="w-9 h-9"/>
            <h3 className="lg:text-[28px] text-white font-[700] my-2">{menu.h3Title}</h3>
            <p className="text-[16px] leading-[2.25rem] text-white">{menu.para}</p>
        </div>
      })}</div>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
