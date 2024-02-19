import React from "react";
import Image from "next/image";
const Technolanges1 = () => {
  return (
    <div className="relative py-14 md:pt-28 md:pb-36">
      <Image
        src="/Banner-22ae39.png"
        className="absolute inset-0 -z-10 object-cover h-full w-full"
        width={0}
        height={0}
        alt="image"
      />
      <div className="lg:grid gap-10 lg:grid-cols-2 flex flex-col-reverse text-white w-[90%] mx-auto">
        <div>
          <h1 className="xl:text-[60px]  lg:text-[48px] md:text-[36px] text-[30px] font-bold xl:!leading-[60px] lg:!leading-[48px] leading-[30px]">
            <span className="text-[#f62c73] xl:text-[60px]  lg:text-[48px] md:text-[36px] text-[30px] font-bold xl:!leading-[60px] lg:!leading-[48px] leading-[30px]">
              Lorem
            </span>{" "}
            Ipsum Dollar Sit Amet
          </h1>
          <p className="xl:text-[18px] text-[#e7e5e5] text-[16px] lg:my-11 my-5 max-w-[637px] leading-8">
            As a leading React development company, our specialized React
            developers build scalable and robust user interfaces, delivering an
            unparalleled user experience. We develop Dev solutions of As a
            leading React development company, our specialized React developers
            build scalable and robust user interfaces, delivering an
            unparalleled user experience. We develop Dev solutions of.
          </p>
          <div className="">
            <a className="hover:bg-[#f62c73] text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Let is Talk
            </a>
          </div>
        </div>
        <Image
          src="/technologiesbanner-ff17fa8e(1).png"
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Technolanges1;
