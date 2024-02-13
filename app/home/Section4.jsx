import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Section4 = () => {
  return (
    <div className="w-[90%] my-16">
      <Marquee className="flex" speed={140}>
        <Image
          src="/CJS-8ac9abfb.png"
          alt="image"
          width={90}
          height={90}
          className="mr-[200px]"
        />
        <Image
          src="/cpay-0883817c.png"
          alt="image"
          width={90}
          height={90}
          className="mr-[200px]"
        />
        <Image
          src="/de_ella-80a64bb6.png"
          alt="image"
          width={90}
          height={90}
          className="mr-[200px]"
        />
        <Image
          src="/download.png"
          alt="image"
          width={90}
          height={90}
          className="mr-[200px]"
        />
        <Image
          src="/Farris_Design-fc72f2ef.png"
          alt="image"
          width={90}
          height={90}
          className="mr-[200px]"
        />
      </Marquee>
    </div>
  );
};

export default Section4;
