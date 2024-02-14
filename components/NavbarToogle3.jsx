import React from "react";
import Services from "@/app/services/page";
import IndustryToogle from "./IndustryToogle";
import { useState } from "react";
const NavbarToogle3 = () => {
  const [toogle, setToogle] = useState(false);
  const [industrytoogle, setIndustryToogle] = useState(false);
  const [tectnogiestoogle, settectnogiesToogle] = useState(false);
  return (
    <div className="w-[100%] h-screen lg:hidden block overflow-y-auto pb-48 mx-auto z-10">
      {" "}
      <ul className="flex w-[90%] mx-auto flex-col gap-[1.5rem] pt-[2.5rem] list-none">
        <li className="text-[16px]">Home</li>
        <li
          className={
            toogle
              ? "bg-[#f6f6f699] text-[16px] cursor-pointer "
              : "bg-white text-[16px] cursor-pointer"
          }
          onClick={() => setToogle(!toogle)}
        >
          <div className="flex justify-between gap-2 items-center">
            {" "}
            <span className={toogle ? "text-[#f62c73] " : "text-[#000]"}>
              {" "}
              Services
            </span>
            <svg
              data-v-44cf1d57=""
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              className="h-3 w-3 duration-300 rotate-180 text-[#808080]"
            >
              <path
                d="M1.04518 9.38393C1.27959 9.61827 1.59748 9.74992 1.92893 9.74992C2.26039 9.74992 2.57827 9.61827 2.81268 9.38393L9.00018 3.19643L15.1877 9.38393C15.4234 9.61163 15.7392 9.73762 16.0669 9.73477C16.3947 9.73193 16.7082 9.60047 16.94 9.36871C17.1717 9.13695 17.3032 8.82343 17.306 8.49568C17.3089 8.16794 17.1829 7.85219 16.9552 7.61643L9.88393 0.545182C9.64952 0.310843 9.33164 0.179199 9.00018 0.179199C8.66873 0.179199 8.35084 0.310843 8.11643 0.545182L1.04518 7.61643C0.810843 7.85084 0.679199 8.16873 0.679199 8.50018C0.679199 8.83164 0.810843 9.14952 1.04518 9.38393Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {toogle && <Services />}
        </li>

        <li
          className={
            industrytoogle
              ? "bg-[#f6f6f699] text-[16px] cursor-pointer "
              : "bg-white text-[16px] cursor-pointer"
          }
          onClick={() => setIndustryToogle(!industrytoogle)}
        >
          <div className="flex justify-between gap-2 items-center">
            <span
              className={industrytoogle ? "text-[#f62c73] " : "text-[#000]"}
            >
              {" "}
              Industry{" "}
            </span>
            <svg
              data-v-44cf1d57=""
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              className="h-3 w-3 duration-300 rotate-180 text-[#808080]"
            >
              <path
                d="M1.04518 9.38393C1.27959 9.61827 1.59748 9.74992 1.92893 9.74992C2.26039 9.74992 2.57827 9.61827 2.81268 9.38393L9.00018 3.19643L15.1877 9.38393C15.4234 9.61163 15.7392 9.73762 16.0669 9.73477C16.3947 9.73193 16.7082 9.60047 16.94 9.36871C17.1717 9.13695 17.3032 8.82343 17.306 8.49568C17.3089 8.16794 17.1829 7.85219 16.9552 7.61643L9.88393 0.545182C9.64952 0.310843 9.33164 0.179199 9.00018 0.179199C8.66873 0.179199 8.35084 0.310843 8.11643 0.545182L1.04518 7.61643C0.810843 7.85084 0.679199 8.16873 0.679199 8.50018C0.679199 8.83164 0.810843 9.14952 1.04518 9.38393Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {industrytoogle && <IndustryToogle />}
        </li>
        <li
          className={
            industrytoogle
              ? "bg-[#f6f6f699] text-[16px] cursor-pointer "
              : "bg-white text-[16px] cursor-pointer"
          }
          onClick={() => settectnogiesToogle(!tectnogiestoogle)}
        >
          <div className="flex justify-between gap-2 items-center">
            <span
              className={industrytoogle ? "text-[#f62c73] " : "text-[#000]"}
            >
              {" "}
              Technologies{" "}
            </span>
            <svg
              data-v-44cf1d57=""
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              className="h-3 w-3 duration-300 rotate-180 text-[#808080]"
            >
              <path
                d="M1.04518 9.38393C1.27959 9.61827 1.59748 9.74992 1.92893 9.74992C2.26039 9.74992 2.57827 9.61827 2.81268 9.38393L9.00018 3.19643L15.1877 9.38393C15.4234 9.61163 15.7392 9.73762 16.0669 9.73477C16.3947 9.73193 16.7082 9.60047 16.94 9.36871C17.1717 9.13695 17.3032 8.82343 17.306 8.49568C17.3089 8.16794 17.1829 7.85219 16.9552 7.61643L9.88393 0.545182C9.64952 0.310843 9.33164 0.179199 9.00018 0.179199C8.66873 0.179199 8.35084 0.310843 8.11643 0.545182L1.04518 7.61643C0.810843 7.85084 0.679199 8.16873 0.679199 8.50018C0.679199 8.83164 0.810843 9.14952 1.04518 9.38393Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {tectnogiestoogle && <IndustryToogle />}
        </li>
        <li className="text-[16px]">Portfulio</li>
      </ul>
    </div>
  );
};

export default NavbarToogle3;
