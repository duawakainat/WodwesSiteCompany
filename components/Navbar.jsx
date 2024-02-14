"use client";
import React, { useState } from "react";
import Image from "next/image";
import Services from "@/app/services/page";

import IndustryToogle from "./IndustryToogle";
import NavbarToogle1 from "./NavbarToogle3";
import Link from "next/link";
const Navbar = (props) => {
  const [navToogle, setNavToogle] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [industrytoogle, setIndustryToogle] = useState(false);
 const ToogleIndustry=()=>{
  setIndustryToogle(!industrytoogle);
  setToogle(false);
 }
 const ToogleServices=()=>{
  setToogle(!toogle);
  setIndustryToogle(false);
 }
  return (
    <div className="z-50 sticky top-0 shadow-lg bg-white">
      <div className=" bg-white">
        <div className="flex justify-between items-center mx-auto w-[90%] max-[335px]:w-[93%] lg:min-w-[992px]">
          <div className="py-4 ">
            <Image
              alt="image"
              src="/Wodwes_logo-f91da705.png"
              className="xl:w-48 md:w-40 w-32"
              width={192}
              height={66}
            />
          </div>
          <div className="flex items-center xl:gap-[3rem] sm:gap-[1.5rem]">
            <ul className="lg:flex hidden items-center justify-center gap-[3rem] list-none">
              <li className="text-[16px]">
                <Link href="/">Home</Link>{" "}
              </li>
              <li
                className="text-[16px] flex justify-between gap-2 items-center"
                onClick={ToogleServices}
              >
                Services
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
                </svg>{" "}
              </li>
              <li
                className="text-[16px] cursor-pointer flex justify-between gap-2 items-center"
                onClick={ToogleIndustry}
              >
                <Link href="">Industry</Link>
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
                </svg>{" "}
              </li>
              <li
                className="text-[16px] cursor-pointer flex justify-between gap-2 items-center"
                onClick={ToogleIndustry}
              >
                Technologies
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
                </svg>{" "}
              </li>

              <li className="text-[16px]">Portfulio</li>
            </ul>
            <div className="flex sm:gap-6 gap-3">
              {" "}
              <div className="flex justify-center">
                <a className="bg-[#f62c73] text-white hover:text-black border-2 border-[#f62c73] hover:bg-transparent font-[600] sm:py-3 py-2 sm:px-5 px-4 flex justify-center items-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="lg:hidden" onClick={() => setNavToogle(!navToogle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-11 w-10 sm:h-11 h-10"
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 6h14M5 12h14M5 18h14"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {navToogle && (
          <div className="">
            {" "}
            <NavbarToogle1 />{" "}
          </div>
        )}
        {industrytoogle && (
          <div className="lg:block hidden">
            {" "}
            <IndustryToogle />
          </div>
        )}
        {toogle && (
          <div className="lg:block hidden">
            {" "}
            <Services />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
