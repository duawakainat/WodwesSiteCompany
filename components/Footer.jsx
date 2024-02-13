import React from "react";
const Table = [
  {
    index: "1",
    h3Title: "Laravel E-commerce Development",
  },
  {
    index: "2",
    h3Title: "PHP E-commerce Development",
  },
  {
    index: "3",
    h3Title: "WordPress E-commerce Development",
  },
  {
    index: "4",
    h3Title: "Shopify Development",
  },
  {
    index: "5",
    h3Title: "React Development",
  },
  {
    index: "6",
    h3Title: "Vue.js Development",
  },
  {
    index: "7",
    h3Title: "Angular Development",
  },
  {
    index: "8",
    h3Title: "PHP Software Development",
  },
  {
    index: "9",
    h3Title: "CodeIgniter Software Development",
  },
  {
    index: "10",
    h3Title: "Laravel Software Development",
  },
  {
    index: "11",
    h3Title: "MERN Software Development",
  },
  {
    index: "12",
    h3Title: "WordPress Development",
  },
  {
    index: "13",
    h3Title: "Magento Development",
  },
  {
    index: "14",
    h3Title: "Drupal Development",
  },
  {
    index: "15",
    h3Title: "BigCommerce Development",
  },
  {
    index: "16",
    h3Title: "Joomla Development",
  },
  {
    index: "17",
    h3Title: "Social Media Creatives",
  },
  {
    index: "18",
    h3Title: "Website UI/UX",
  },
  {
    index: "19",
    h3Title: "Mobile App UI/UX",
  },
];
const Footer = (props) => {
  return (
    <div className=" bg-[#272821] text-white ">
      <div className="">
        <div className="grid xl:grid-cols-2 py-12 w-[90%] mx-auto">
          <div className="">
            <h3 className="text-[18px] font-bold text-[#f62c73]">Services</h3>
            <ul className="sm:columns-2">
              {Table.map((menu, index) => {
                return (
                  <div key={index}>
                    <p className="text-[16px] cursor-pointer hover:!text-[#f62c73] leading-[2.25rem]">
                      {menu.h3Title}
                    </p>
                  </div>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="grid sm:grid-cols-2">
              <div className="mt-4 w-full h-full">
                <h3 className="text-[18px] font-bold text-[#f62c73]">
                  Quick Links
                </h3>
                <p className="text-[16px] leading-[2.25rem] hover:!text-[#f62c73] cursor-pointer">
                  Contact US
                </p>
              </div>
              <div className="mt-4 w-full h-full">
                <h3 className="text-[18px] font-bold text-[#f62c73] cursor-pointer">
                  Contact US
                </h3>
                <p className="mt-4 text-[16px] leading-[2.25rem] cursor-pointer hover:!text-[#f62c73]">
                  Info@wodwes.com
                </p>
                <p className="text-[16px] leading-[2.25rem] hover:!text-[#f62c73] cursor-pointer">
                  sales@wodwes.com
                </p>
                <p className="text-[16px] leading-[2.25rem] hover:!text-[#f62c73] cursor-pointer">
                  +1 917 000 3956
                </p>
              </div>
              <div className="mt-4 w-full h-full">
                <h3 className="text-[18px] font-bold text-[#f62c73]">
                  NEWSLETTER
                </h3>
                <input
                  className="py-[14px] w-full mt-[8px] pl-4 bg-white"
                  placeholder="
Enter your email address
"
                />
                <div className="flex justify-center">
                  <a className="bg-[#f62c73] text-white border-2 mt-2 border-[#f62c73] hover:bg-transparent w-full font-[600] py-3 px-5 flex justify-center items-center">
                    Let is Talk
                  </a>
                </div>
              </div>
              <div className="w-full sm:pt-14 mt-6 h-full">
                <div className="flex flex-col justify-end items-end text-right">
                  <h3 className="text-[18px] font-bold text-[#f62c73]">
                    Follow Us
                  </h3>
                  <div className="flex gap-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[43px] h-[43px] hover:!text-[#f62c73]"
                      viewBox="0 0 24 24"
                      {...props}
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 1 1 9 7.938V14h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 1 1-1h.5a1 1 0 1 0 0-2H14a3 3 0 0 0-3 3v2H9a1 1 0 1 0 0 2h2v5.938A8.001 8.001 0 0 1 4 12m8 10c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
                        ></path>
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[43px] h-[43px] hover:!text-[#f62c73]"
                      viewBox="-2 -2 24 24"
                      {...props}
                    >
                      <g fill="currentColor">
                        <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z"></path>
                        <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-center py-4 text-[#aaaaab]">
          © Copyright 2023 All right reserved by Wodwes
        </p>
      </div>
    </div>
  );
};

export default Footer;
