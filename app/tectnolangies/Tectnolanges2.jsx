import React from "react";
const Table = [
  {
    index: "1",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Unlock unparalleled talent and expertise with our Resource-as-a-Service. Access top-notch designers and developers to enhance your projects and accelerate growth.",
  },
  {
    index: "2",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Elevate user experiences with our Front-End Development expertise. Craft visually stunning, responsive, and intuitive interfaces that captivate and engage your audience.",
  },
  {
    index: "3",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Empower your business with our Web Application Development services. We turn ideas into robust, scalable, and user-friendly web solutions that drive success.",
  },
  {
    index: "4",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Experience end-to-end digital excellence with our Full-Stack Development services. We seamlessly blend front-end finesse with back-end robustness to bring your vision to life.",
  },
  {
    index: "5",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems tailored to streamline your digital content and operations.",
  },
  {
      index: "6",
      h3Title: "Lorem Ipsum Dollar",
      para:
        "Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems tailored to streamline your digital content and operations.",
    },
];

const Tectnolanges2 = () => {
  return (
    <div className="w-[90%] mx-auto py-20">
      <div className="flex max-md:flex-col justify-between gap-10">
        <div className="w-full h-full max-w-[654px]">
          <h2 className="text-[30px] text-[#272821] mb-7 font-[700]">
            Hire {" "}<span className="text-[#f62c73] text-[30px] font-[700]">
            Android Developers
            </span>{" "} for Innovation-Driven Services
          </h2>
          <div className="">
            <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Get Started
            </a>
          </div>
        </div>
        <div className="w-full h-full">
          <p className="xl:text-[18px] text-[#272821] font-[400] xl:leading-9 leading-7">
            WODWES has established itself to be a cutting-edge provider of React
            development solutions. Leveraging our collaborative work approach,
            we partner up with you to fully understand and analyze
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-14 sm:[&>*:nth-child(5)]:border-b-[0px] [&>*:nth-child(6)]:border-b-[0px] lg:[&>*:nth-child(even)]:border-r-[1px] sm:[&>*:nth-child(even)]:border-r-[0px] lg:[&>*:nth-child(3)]:border-b-[1px] lg:[&>*:nth-child(3)]:border-r-[0px] lg:[&>*:nth-child(6)]:!border-r-[0px] max-[630px]:[&>*:nth-child(6)]:!border-b-[0px] max-[630px]:[&>*:nth-child(even)]:!border-r-[0px] max-[630px]:[&>*:nth-child(odd)]:!border-r-[0px] max-[630px]:[&>*:nth-child(2)]:!border-b-[1px] max-[630px]:[&>*:nth-child(4)]:!border-b-[1px] max-[630px]:[&>*:nth-child(1)]:!border-b-[1px] max-[630px]:[&>*:nth-child(3)]:!border-b-[1px] border-gray-200">
    {Table.map((menu, index) => {
      return (
        <div
          key={index}
          className="pt-5 md:pr-14 pr-4 pb-12 pl-4 hover:shadow-[4px_4px_15px_6px_#f62c7326;] border-b-[1px] border-r-[1px] border-gray-200"
        >
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

export default Tectnolanges2;
