import React from "react";
import Image from "next/image";
const Services4 = ({ label, para, li1, li2, li3, image }) => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
        <Image
          src={image}
          width={32}
          height={32}
          alt="image"
          className="w-8 h-8"
        />{" "}
        <h3 className="xl:text-[24px] text-[20px] max-[450px]:text-[18px] font-bold leading-6">{label}</h3>
      </div>
      <p className="text-sm leading-7 sm:my-7 my-5 text-[#272821]">{para}</p>
      <ul className="list-disc ml-6 mb-4">
        <li className="text-sm text-[#272821]">{li1}</li>
        <li className="text-sm mt-4 text-[#272821]">{li2}</li>
        <li className="text-sm mt-4 text-[#272821]">{li3}</li>
      </ul>
    </div>
  );
};

export default Services4;
