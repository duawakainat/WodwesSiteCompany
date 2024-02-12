import React from "react";
import { useState } from "react";
const Services7 = ({ paraD, h3Title, props }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <li className="border-t first:border-t-0">
        <button
          onClick={toggle}
          className="py-6 text-start borderT text-[#272821] border-gray-100 w-full flex justify-between"
        >
          <span className="md:text-[18px] text-[16px] font-semibold">
            {h3Title}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              {...props}
            >
              <path
                fill="#f62c73"
                d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
              ></path>
            </svg>
          </span>
        </button>
      </li>
      {open && (
        <div className="sm:text-[16px] text-[14px] pb-4 block">
          <p>{paraD}</p>
        </div>
      )}
    </>
  );
};

export default Services7;
