import React from "react";
import Image from "next/image";
const Technolanges5 = () => {
  return (
    <div className="relative lg:py-20 pb-20">
      <div className="lg:grid gap-10 lg:grid-cols-2 flex flex-col-reverse  w-[90%] mx-auto">
        <div>
          <h1 className="lg:text-[30px] text-[24px] font-bold">
            Innovation-Driven Approaches to Developing Promising{" "}
            <span className="text-[#f62c73] lg:text-[30px] text-[24px] font-bold">
              React Development
            </span>{" "}
            Solutions
          </h1>
          <p className="xl:text-[18px] text-[16px] lg:my-10 my-5 max-w-[637px] leading-8">
            At WODWES, we understand that technology is constantly evolving, and
            we're committed to staying ahead of the curve. Whether you need a
            simple website or a complex web application, we have the expertise
            and experience to deliver innovative solutions that help you achieve
            your business goals.
          </p>
          <div className="">
            <a className="hover:bg-[#f62c73] hover:text-white text-black border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Let is Talk
            </a>
          </div>
        </div>
        <Image
          src="/Innovation-09493be9.png"
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Technolanges5;
