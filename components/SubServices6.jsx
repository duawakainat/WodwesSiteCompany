"use client";
import React from "react";

import Image from "next/image";
import { User } from "./User";
const SubServices6 = ({Development_P,Development_H,image}) => {
  var settings = {
    dots: false,
    infinite: false,
    arrows:false,
    // cols: 3,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div >
      <Slider {...settings}>
       <div> <h1>{Development_P}</h1>
        <h1>{Development_H}</h1>
        <h1>hello1</h1></div>
        <div> <h1>{Development_P}</h1>
        <h1>{Development_H}</h1>
        <h1>hello1</h1></div>
        
        {/* {User.map((menu,index)=>{
          return ( <div key={index}>
        <div>    <h1 className="mb-5">{menu.author}</h1></div>
        <div>    <h1 className="mb-5">{menu.author}</h1></div>
        <div>    <h1 className="mb-5">{menu.author}</h1></div>
        <div>    <h1 className="mb-5">{menu.author}</h1></div>
          </div>)
        })} */}
      
      
      </Slider>
    </div>
  );
};

export default SubServices6;
