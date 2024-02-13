import React from "react";
import Image from "next/image";
const Section12 = () => {
  return (
    <div className="w-[90%] mx-auto grid lg:grid-cols-2 my-16 lg:gap-x-8">
      <Image
        src="/YourDevelopmentPartner-9a89547a.png"
        width={0}
        height={0}
        className="max-h-[625px] rounded-[.5rem] object-cover lg:sticky lg:top-[8rem]"
      />
      <div className="md:mt-8 lg:mt-4 mt-4 my-4">
        <h2 className="text-[30px] font-[700] space-x-2 ">
          Your Development{" "}
          <span className="text-[#f62c73] text-[30px] font-[700]">
            Partner!
          </span>
        </h2>
        <p className="text-[16px] mt-1 font-[400] text-[#272821] leading-[2.25rem]">
          We love hearing about how our work has helped businesses succeed and
          how WODWES became their go-to development team. Dont just take our
          word for it - read what our satisfied clients have to say!
        </p>
        <Image
          alt="image"
          src="/frontend-91b299e9.png"
          width={35}
          height={35}
          className="w-[35px] h-[35px] mt-4 mb-2"
        />
        <h2 className="text-[20px] font-[600] space-x-2 ">
          Developing feature-enriched web and software solutions for businesses
        </h2>
        <p className="text-[16px] mt-1 font-[400] text-[#272821] leading-[2.25rem]">
          At WODWES, we understand that technology is constantly evolving, and
          were committed to staying ahead of the curve. Whether you need a
          simple website or a complex web application, we have the expertise and
          experience to deliver innovative solutions that help you achieve your
          business goals.
        </p>
        <Image
          alt="image"
          src="/frontend-91b299e9.png"
          width={35}
          height={35}
          className="w-[35px] h-[35px] mt-4 mb-2"
        />
        <h2 className="text-[20px] font-[600] space-x-2 ">
          Tailored development solutions to meet your business needs!
        </h2>
        <p className="text-[16px] mt-1 font-[400] text-[#272821] leading-[2.25rem]">
          Team WODWES believes that every business is unique, and thats why we
          offer tailored development solutions to meet your specific needs. We
          work closely with our clients to identify their unique business
          requirements and develop customized solutions that help them achieve
          their goals.
        </p>
        <div className="">
          <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent sm:w-[200px] max-[427px]:w-full w-[200px] mt-4 font-[600] py-3 px-5 flex justify-center items-center">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section12;
