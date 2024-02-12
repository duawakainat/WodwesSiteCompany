import React from 'react'
import Image from 'next/image'
const Services5 = ({Development_H,Development_Para,image}) => {
  return (
   
    <div className="">
    
          <div className="p-5 bg-[#f8f8f8] group/item group/edit group-hover/item:bg-[rgba(39,40,33 ,1]  rounded-[10px]">
            <Image
            alt="image"
              src={image}
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <h3 className="text-[18px] font-[700] my-5">{Development_H}</h3>
            <p className="text-[14px] text-[#272821]">{Development_Para}</p>
          </div>
          </div>
      
  )
}

export default Services5