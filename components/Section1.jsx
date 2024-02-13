import React from "react";
import "@/app/globals.css";
const Section1 = (props) => {
  return (
    <div className="flex flex-wrap justify-center items-center py-2.5 px-2 gap-x-12 gap-y-2">
      <div className="flex gap-x-2">
        <span className="underline underline-offset-4 decoration-white text-[13px] font-[400] text-white leading-[1rem]">
          {" "}
          Get a Quote{" "}
        </span>
        <p className="text-[13px] gap-x-2  font-[400] text-white leading-[1rem]">
          today to claim $200 free credit.
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="#fff"
            d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"
          ></path>
        </svg>

        <p className="text-[13px] gap-x-1.5 text-white leading-[1rem]">
          + 92 306 1070 678
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="#fff"
            d="M2 20V4h20v16zm10-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
          ></path>
        </svg>

        <p className="text-[13px] gap-x-1.5 text-white leading-[1rem]">
          sales@wodwes.com
        </p>
      </div>
    </div>
  );
};

export default Section1;
