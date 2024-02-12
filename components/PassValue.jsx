import React from "react";
import Image from "next/image";
const Table = [
  {
    index: 1,
    title: "Enter your name",
  },
  {
    index: 2,
    title: "Enter your email",
  },
  {
    index: 3,
    title: "Enter your phone number", 
  },
  {
    index: 4,
    title: "About Project",
  },
];

const PassValue = ({ id, title, publicationDate, author }) => {
  return (
    <div className="relative py-16 md:pt-28 md:pb-36">
        <img src="/Banner-22ae39b2 (1).png" className="absolute inset-0 -z-10 object-cover h-full w-full" />
      <div className="grid gap-10 lg:grid-cols-2 text-white w-[90%] mx-auto">
        <div>
          <h1 className="xl:text-[60px] lg:text-[48px] md:text-[30px] text-[30px] font-bold first-letter:text-[#f62c73] xl:!leading-[60px] lg:!leading-[48px] leading-[30px]">
            {title}
          </h1>
          <p className="xl:text-[18px] text-[#e7e5e5] text-[16px] lg:my-11 my-5 max-w-[637px] leading-8">{author}</p>
          <div className="">
            <a className="hover:bg-[#f62c73] text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
              Let's Talk
            </a>
          </div>
        </div>
        <div>
            <div className="xl:py-[60px] max-w-[687px] ml-auto py-12 sm:px-8 px-4 rounded-xl bg-[#ffffff33]">
          <h3 className="text-[30px] font-semibold">
            Get Started Lets discuss your project
          </h3>      
        <p className="pt-3 xl:pb-10 pb-5 text-[16px] text-black ">
          Submit a request and we‘ll get in touch within a day
        </p>
        <div className="[&>*:nth-child(1)]:mt-0 [&>*:nth-child(even)]:mt-5 [&>*:nth-child(3)]:mt-5">
        {Table.map((menu,index)=>{
            return <div key={index} className="">
            <input className="w-full py-5 px-4 text-[rgba(26,26,26,0.40)] placeholder:text-[rgba(26,26,26,0.40)] bg-[#f9f9ff80] rounded-lg" placeholder={menu.title}/>
            </div> })}
            <div className="w-full">
            <a className="bg-[#f62c73] gap-4 text-white border-2 border-[#f62c73] mt-5 font-[600] py-5 px-5 flex justify-center items-center">
              Get Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M22.0005 11.1L4.10045 2.09999C3.20045 1.69999 2.20045 2.49999 2.60045 3.39999L5.10045 10.1L16.5004 12L5.10045 13.9L2.60045 20.6C2.30045 21.5 3.20045 22.3 4.10045 21.8L22.0005 12.8C22.7005 12.5 22.7005 11.5 22.0005 11.1Z" fill="white"></path></svg>
            </a>
          </div></div>
      </div> </div></div>
    </div>
  );
};

export default PassValue;
