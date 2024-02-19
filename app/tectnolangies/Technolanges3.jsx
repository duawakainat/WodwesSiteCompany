import React from "react";
import Image from "next/image";
const Table = [
  {
    index: "1",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
  },
  {
    index: "2",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
  },
  {
    index: "3",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
  },
  {
    index: "4",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
  },
  {
    index: "5",
    h3Title: "Lorem Ipsum Dollar",
    para:
      "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
  },
];
const Technolanges3 = () => {
  return (
    <div className="bg-[#f8f8f8]">
    <div className="w-[90%] mx-auto lg:py-20 py-14">
      <div className="max-w-[896px]">
        <h2 className="text-[30px] flex flex-wrap text-[#000] mb-3 font-[700]">
          Web Design and Development
          <span className="text-[#f62c73] md:ms-2 text-[30px] font-[700]">
            Outsourcing Company
          </span>
        </h2>
        <p className="text-[18px] font-[400] text-[#000] leading-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page looking at its layout. The point of using
          Lorem Ipsum is that it
        </p>
      </div>
      <div className="grid lg:grid-cols-12 w-[90%] mx-auto mt-14 sm:grid-cols-2 max-md:[&>*:nth-child(even)]:col-span-1 max-md:[&>*:nth-child(odd)]:col-span-1  lg:[&>*:nth-child(1)]:col-span-7 lg:[&>*:nth-child(2)]:col-span-5  lg:[&>*:nth-child(3)]:col-span-4 lg:[&>*:nth-child(5)]:col-span-4 lg:[&>*:nth-child(4)]:col-span-4  gap-5">
        {Table.map((menu, index) => {
          return (
            <div key={index}>
              <div className="p-5 bg-[#f8f8f8] border-[1px] border-gray-400/50 group/item group/edit group-hover/item:bg-[rgba(39,40,33 ,1]  rounded-[10px]">
              <Image
                  alt="image"
                  src="/full-stack-c89c521a.png"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
                <h3 className="text-[18px] font-[700] my-5">{menu.h3Title}</h3>
                <p className="text-[14px] text-[#272821]">{menu.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div></div>
  );
};

export default Technolanges3;
