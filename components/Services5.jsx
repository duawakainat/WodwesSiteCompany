import React from "react";
import Image from "next/image";
const Services5 = ({ Development_H, Development_Para, image }) => {
  return (
    <div className="p-5 group/item bg-[#f8f8f8] group/item hover:bg-[#272821] rounded-[10px]">
      <div className="group/edit">
        <Image
          alt="image"
          src={image}
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <h3 className="text-[18px] group-hover/edit:text-white font-[700] my-5">{Development_H}</h3>
        <p className="text-[14px] group-hover/edit:text-white text-[#272821]">{Development_Para}</p>
      </div>
    </div>
  );
};

export default Services5;
