import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { User } from './User';
const Services8 = () => {

    const settings = {
        customPaging: function(i) {
          return (
            <a>
                {User.map((menu,index)=>{
                    return ( <div key={index}>
                        <h1>{menu.author}</h1>
                        {menu.slide.map((item,index)=>{
                            return ( <div key={index}>
                                <img src={`item.img${i + 1}`} />
                                </div>)
                        })}
                    </div> )
                })}
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
  return (
    <div><h2>Custom Paging</h2>
    <Slider {...settings}>
        <>
    {User.map((menu,index)=>{
                    return ( <div key={index}>
                        <h1>{menu.author}</h1>
                        <div>
                        {menu.slide.map((item,index)=>{
                            return ( <div>
                                <img src={item.img} />
                                </div>)
                        })}
                        </div>
                    </div> )
                })}</>
      {/* <div>
        <img src={baseUrl + "/abstract01.jpg"} />
      </div>
      <div>
        <img src={baseUrl + "/abstract02.jpg"} />
      </div>
      <div>
        <img src={baseUrl + "/abstract03.jpg"} />
      </div>
      <div>
        <img src={baseUrl + "/abstract04.jpg"} />
      </div> */}
    </Slider>
</div>
  )
}

export default Services8