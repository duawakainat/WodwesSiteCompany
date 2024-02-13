"use client";
import React, { useState } from "react";
const Table = [
  {
    index: "1",
    h3Title: "What is Wodwes?",
    paraD:
      "WODWES (Women-Driven Web Solutions) is a well-recognized US-based agency offering a wide range of services including website design and development, CMS development, ERP development, custom Ecommerce development, and UI/UX design. We house a professional team of designers, developers, consultants, and engineers, who are dedicatedly available to help businesses in achieving digital goals.",
  },
  {
    index: "2",
    h3Title: "How long does it take to develop a website or web application?",
    paraD:
      "The time it takes to develop a website or web application varies depending on the complexity of the project, the number of features and pages, and the level of customization required. We typically provide an estimated timeline during the discovery phase based on our assessment of the project requirements. To get a free quote, email us at sales@wodwes.com",
  },
  {
    index: "3",
    h3Title: "What programming languages and frameworks do you use?",
    paraD:
      "We use a variety of programming languages and frameworks depending on the project requirements. Some of the languages and frameworks we commonly use include PHP, JavaScript, React, Angular, Vue, Node.js, Python, and Django.",
  },
  {
    index: "4",
    h3Title: "Do you provide website hosting and maintenance services?",
    paraD:
      "Yes, we offer website hosting and maintenance services to ensure that our client's websites are secure, up-to-date, and performing optimally. Our hosting services include server maintenance, security updates, and backups. Our maintenance services include content updates, bug fixes, and feature enhancements.",
  },
  {
    index: "5",
    h3Title: "What is your web development process?",
    paraD:
      "Our web development process typically involves the following steps: discovery, design, development, testing, and launch. During the discovery phase, we gather requirements, define the project scope, and create a project plan. The design phase involves creating wireframes, mockups, and visual designs. The development phase involves coding, integrating with third-party services, and setting up databases. The testing phase involves conducting functional testing, usability testing, and performance testing. Finally, we launch the website or application and provide ongoing support. To get started with our web development services, please email us at sales@wodwes.com.",
  },
];
const Para = ({ h3Title, paraD, props }) => {
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
const Section14 = () => {
  return (
    <div className="w-[90%] mx-auto lg:my-16 my-12">
      <h2 className="lg:text-[30px] text-[24px] lg:w-[505px] font-[700] space-x-2 ">
        {" "}
        Frequently Asked{" "}
        <span className="text-[#f62c73] lg:text-[30px] text-[24px] font-[700]">
          Questions!
        </span>{" "}
      </h2>
      <p className="text-[16px] mt-4 mb-7 font-[400] text-[#272821] leading-7">
        We love hearing about how our work has helped businesses succeed and how
        WODWES became
      </p>
      <div className="md:max-w-[1000px] mx-auto">
        <ul className="faqs-main-ul">
          {Table.map((menu, index) => {
            return (
              <Para key={index} h3Title={menu.h3Title} paraD={menu.paraD} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Section14;
