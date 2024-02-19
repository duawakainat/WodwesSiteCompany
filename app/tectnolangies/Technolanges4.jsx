import React from "react";
const Table = [
  {
    index: "1",
    h3Title: "Provide Project Requirements",
    para:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    index: "2",
    h3Title: "Provide Project Requirements",
    para:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    index: "3",
    h3Title: "Provide Project Requirements",
    para:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    index: "4",
    h3Title: "Provide Project Requirements",
    para:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    index: "5",
    h3Title: "Provide Project Requirements",
    para:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const Technolanges4 = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="relative mt-10 pb-20">
        <div className="flex max-md:flex-col justify-between md:items-center gap-10">
          <div className="max-w-[904px]">
            <h2 className="text-[30px] mb-3 font-[700]">
              Seamless Hiring Process For A Successful{" "}
              <span className="text-[#f62c73] ms-2 text-[30px] me-2 font-[700]">
                React Development
              </span>{" "}
              Project
            </h2>
            <p className="text-[18px] font-[400] leading-9">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to
            </p>
          </div>
          <div>
            <div className="">
              <a className="hover:bg-[#f62c73] hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="grid lg:grid-cols-5">
          {Table.map((menu, index) => {
            return (
              <div key={index} className="max-lg:flex gap-10 lg:max-w-[218px]">
                <div className="">
                <div className="flex lg:justify-center lg:items-end">
                  <p className="text-sm text-[#fff] bg-black flex justify-center items-center rounded-full w-[2.75rem] h-[2.75rem]">
                    {menu.index}
                  </p>
                </div>
                <div
                  className={
                   ( menu.index === "5" || menu.index === "4" || menu.index === "3")
                      ? "lg:w-0"
                      : "lg:h-[3px] h-full lg:w-[91.5%] w-[3px] max-lg:mt-[5%] lg:-translate-y-9 max-lg:-translate-x-[-20px] -z-10 relative timeline lg:ml-[60%] bg-gray-300"
                  }
                ></div></div>
                <div className="lg:text-center max-lg:pb-9 lg:pl-0 sm:pl-10">
                  <h3 className="xl:text-xl text-lg font-[700] mb-2.5">
                    {menu.h3Title}
                  </h3>
                  <p className="xl:text-[14px] lg:text-xs text-sm max-lg:pb-10 text-[#272821]">{menu.para}</p>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Technolanges4;
