import React from "react";
import Image from "next/image";
const Table = [
  {
    index: "1",
    h3Title: "Resource as a service",
    para:
      "Unlock unparalleled talent and expertise with our Resource-as-a-Service. Access top-notch designers and developers to enhance your projects and accelerate growth.",
  },
  {
    index: "2",
    h3Title: "Front-End Development",
    para:
      "Elevate user experiences with our Front-End Development expertise. Craft visually stunning, responsive, and intuitive interfaces that captivate and engage your audience.",
  },
  {
    index: "3",
    h3Title: "Web Application Development",
    para:
      "Empower your business with our Web Application Development services. We turn ideas into robust, scalable, and user-friendly web solutions that drive success.",
  },
  {
    index: "4",
    h3Title: "Full-Stack Development",
    para:
      "Experience end-to-end digital excellence with our Full-Stack Development services. We seamlessly blend front-end finesse with back-end robustness to bring your vision to life.",
  },
  {
    index: "5",
    h3Title: "CMS Development",
    para:
      "Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems tailored to streamline your digital content and operations.",
  },
  {
    index: "6",
    h3Title: "DevOps",
    para:
      "Streamline development pipelines and enhance project efficiency with our DevOps solutions. Achieve seamless collaboration, rapid deployments, and optimal performance for your digital projects.",
  },
  {
    index: "7",
    h3Title: "Software Development",
    para:
      "Transform ideas into powerful solutions. Our Software Development services harness innovation and precision to create robust, scalable, and tailored software solutions for your business.",
  },
  {
    index: "8",
    h3Title: "Quality Assurance & Testing",
    para:
      "Ensure flawless performance and user satisfaction with our Quality Assurance & Testing services. We meticulously scrutinize every detail to deliver excellence.",
  },
];
const Section6 = () => {
  return (
    <div className="lg:py-20 py-14 gap-10 w-[90%] mx-auto">
      <div className="max-w-[896px]">
        <h2 className="text-[30px] flex flex-wrap text-[#000] mb-3 font-[700]">
          Web Design and Development
          <span className="text-[#f62c73] md:ms-2 text-[30px] font-[700]">
            Outsourcing Company
          </span>
        </h2>
        <p className="text-[18px] font-[400] text-[#000] leading-7">
          Your Reliable Partner for Digital Excellence - Delivering Outstanding
          Web Solutions with Precision and Expertise, On Time, Every Time.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-14 lg:[&>*:nth-child(even)]:border-r-[1px] sm:[&>*:nth-child(even)]:border-r-[0px] lg:[&>*:nth-child(3)]:border-b-[1px] lg:[&>*:nth-child(3)]:border-r-[0px] lg:[&>*:nth-child(6)]:!border-r-[0px] [&>*:nth-child(8)]:!border-b-[0px] [&>*:nth-child(7)]:!border-b-[0px] lg:[&>*:nth-child(8)]:!border-r-[0px] max-[630px]:[&>*:nth-child(even)]:!border-r-[0px] max-[630px]:[&>*:nth-child(odd)]:!border-r-[0px] max-[630px]:[&>*:nth-child(even)]:!border-b-[1px] max-[630px]:[&>*:nth-child(odd)]:!border-b-[1px] border-gray-200">
        {Table.map((menu, index) => {
          return (
            <div
              key={index}
              className="pt-5 md:pr-14 pr-4 pb-12 pl-4 hover:shadow-[4px_4px_15px_6px_#f62c7326;] border-b-[1px] border-r-[1px] border-gray-200"
            >
              <Image
                src="/full-stack-c89c521a.png"
                alt="image"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h3 className="text-[20px] flex items-center font-[700] leading-[26px] mt-3 mb-4 h-14">
                {menu.h3Title}
              </h3>
              <p className="text-[16px] mb-4 text-[#272821]">{menu.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section6;
