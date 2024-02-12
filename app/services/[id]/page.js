"use client";
import { React, Component } from "react";
import Image from "next/image";
import { User } from "@/components/User";
import Section4 from "@/app/home/Section4";
import PassValue from "@/components/PassValue";
import Services3 from "@/components/Services3";
import Services4 from "@/components/Services4";
import Sub_Services5 from "@/components/Sub_Services5";
import Services5 from "@/components/Services5";
import Section5 from "@/app/home/Section5";
import Services6 from "@/components/Services6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section7 from "@/app/home/Section7";
import Services7 from "@/components/Services7";
import { useState } from "react";
const ImgSlect = User.map((menu) => menu.SlideImage);
const page = ({ params }) => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-prev_2" onClick={onClick}>
        <svg
          data-v-c0be6fb4=""
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-arrow-right-filled h-10 w-10 duration-300 lg:w-10 xl:h-11 xl:w-11"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#272821"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            data-v-c0be6fb4=""
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path
            data-v-c0be6fb4=""
            d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>{" "}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-prev_1"
        // style={{
        //   color: "black",
        // }}
        onClick={onClick}
      >
        <svg
          data-v-c0be6fb4=""
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-arrow-left-filled h-10 w-10 duration-300 lg:w-10 xl:h-11 xl:w-11"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#272821"
          fill="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            data-v-c0be6fb4=""
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path
            data-v-c0be6fb4=""
            d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  }
  
  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },],
  
  };
  const settings2 = {
    dots: false,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      {User.map((menu, index) => {
        if (menu.index == params.id)
          return (
            <div key={index}>
              <h1>{menu.title}</h1>

              <PassValue
                title={menu.title}
                author={menu.author}
                publicationDate={menu.publicationDate}
              />
              <Section4 />
              <Services3 choosePara={menu.choosePara} choose={menu.choose} />
              <div className="w-[90%] mx-auto mt-[5rem] pb-[80px]">
                <div className="grid lg:grid-cols-3 rounded-[.5rem] border-b-[6px] border-[#f62c73] md:grid-cols-2 w-[90%]  md:[&>*:nth-child(1)]:border-r [&>*:nth-child(3)]:border-r-0 lg:[&>*:nth-child(2)]:border-r [&>*:nth-child(2)]:border-r-0 lg:[&>*:nth-child(even)]:border-b-0 lg:[&>*:nth-child(odd)]:border-b-0 [&>*:nth-child(1)]:border-b [&>*:nth-child(2)]:border-b [&>*:nth-child(3)]:border-b-0 mx-auto shadow-[2px_2px_21px_0px_rgba(0,0,0,.1)]">
                  {menu.links.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="lg:border-b-0 md:border-r border-b border-gray-400"
                      >
                        <Services4
                          label={item.label}
                          para={item.para}
                          li1={item.li1}
                          li2={item.li2}
                          li3={item.li3}
                          image={item.img}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                {" "}
                <div className="flex max-lg:flex-col justify-between gap-10 lg:py-20 py-14 w-[90%] mx-auto">
                  <div className="w-full h-full lg:sticky top-[8rem]">
                    <Sub_Services5
                      Development_H={menu.Development_head}
                      Development_Para={menu.Development_Para}
                    />
                  </div>
                  <div className="w-full h-full">
                    <div className="">
                      <div className="grid lg:grid-cols-1  xl:grid-cols-2 grid-cols-2 max-[578px]:grid-cols-1 gap-5">
                        {menu.Development.map((item, index) => {
                          return (
                            <div key={index}>
                              <Services5
                                Development_H={item.Development_H}
                                image={item.img}
                                Development_Para={item.Development_P}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Section5 />
              <div className="bg-[#f9f9f9] mt-20">
                <div className="lg:py-20 py-14 gap-10 w-[90%] mx-auto">
                  <Services6 Audience={menu.Audience} />
                  <div className="">
                    <Slider {...settings}>
                      {menu.slide.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="p-4 mx-1 rounded-lg bg-[#272821]">
                              <Image
                                src={item.img}
                                width={20}
                                height={20}
                                alt="image"
                                className="w-5 h-5 mb-1"
                              />
                              <h1 className="flex min-h-[41px] text-white text-sm items-center -tracking-[0.32px]">
                                {item.Development_H}
                              </h1>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
              <Section7 />
              <div className="w-[90%] mx-auto">
                <div className="lg:my-16 my-12 md:max-w-[1000px] mx-auto">
                  <ul className="faqs-main-ul">
                    {menu.Table.map((menu, index) => {
                      return (
                        <Services7
                          key={index}
                          h3Title={menu.h3Title}
                          paraD={menu.paraD}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* <div> */}
              {menu.navItems && (
                <Slider
                  asNavFor={nav2}
                  ref={(slider1) => setNav1(slider1)}
                  {...settings2}
                >
                  {menu.navItems.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="w-[90%] mx-auto">
                          <div className="flex max-md:flex-col pb-10 items-center gap-10 justify-center w-[90%] mx-auto grid-cols-[300px_auto] order-2 xl:gap-[160px]">
                            <div className="md:flex flex-col grid grid-cols-2 order-2 md:order-none max-sm:order-2 w-full h-full gap-10 md:max-w-[300px]">
                              {item.links.map((items, index) => {
                                return (
                                  <div key={index} className="">
                                    <div className="block">
                                      <h3 className="text-[20px] md:max-w-[300px] font-bold pl-3 border-l-2 border-[#f62c73] rounded-sm">
                                        {items.h3Title}
                                      </h3>
                                      <p className="text-sm mt-2 pl-[18px] text-[#272821]">
                                        {items.paraD}
                                      </p>
                                      <div className="flex flex-wrap items-center gap-4">
                                        {" "}
                                        {items.img && (
                                          <Image
                                            src={items.img}
                                            width={0}
                                            alt="image"
                                            height={0}
                                            className="w-10 h-10 object-contain"
                                          />
                                        )}
                                        {items.img2 && (
                                          <Image
                                            src={items.img2}
                                            width={0}
                                            height={0}
                                            alt="image"
                                            className="w-10 h-10 object-contain"
                                          />
                                        )}
                                        {items.img1 && (
                                          <Image
                                            src={items.img1}
                                            width={0}
                                            alt="image"
                                            height={0}
                                            className="w-10 h-10 object-cover"
                                          />
                                        )}
                                      </div>
                                    </div>{" "}
                                  </div>
                                );
                              })}
                            </div>
                            <div className="w-full h-full">
                              <Image
                                src={item.image}
                                width={0}
                                height={0}
                                alt="image"
                                className="w-100 md:h-[480px] h-[300px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              )}
              {menu.SlideImage && (
                <div className="w-[90%] mx-auto">
                  <div className="w-[90%] mx-auto">
                    <ul className="border-t-2 faqs-main-ul pb-12">
                      <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings3}
                      >
                        {menu.SlideImage.map((items, index) => {
                          return (
                            <>
                              <li key={index} className="px-5 py-2 md:p-5 lg:p-7 xl:p-10 border-r">
                                <Image
                                  src={items.img}
                                  width={0}
                                  height={0}
                                  alt="image"
                                  className="w-[270px] h-[90px] object-contain"
                                />
                              </li>
                            </>
                          );
                        })}
                      </Slider>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
      })}
    </>
  );
};

export default page;
