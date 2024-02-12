import React from "react";
import Image from "next/image";
import ImageF from "@/public/ecommerce-4bcb686c.png";
import Image1 from "@/public/frontend-91b299e9.png";
import Image2 from "@/public/software-56e9289c.png";
import Image3 from "@/public/cms-5e08dfd2.png";
import Link from "next/link";

const navItems = [
  {
    category: "E-commerce Development",
    image: ImageF,
    links: [
      {
        label: "Laravel E-commerce Development",
        link: "Laravel%20E-commerce%20Development",
      },
      {
        label: "PHP E-commerce Development",
        link: "PHP%20E-commerce%20Development",
      },
      {
        label: "WordPress E-commerce Development",
        link: "WordPress-E-commerce-Development",
      },
      {
        label: "Shopify Development",
        link: "Shopify-Development",
      },
    ],
  },
  {
    category: "Front-end Development",
    image: Image1,
    links: [
      {
        label: "React Development",
        link: "React-Development",
      },
      {
        label: "Vue.js Development",
        link: "Vue.js-Development",
      },
      {
        label: "Angular Development",
        link: "Angular-Development",
      },
    ],
  },
  {
    category: "Software Development",
    image: Image2,
    links: [
      {
        label: "PHP Software Development",
        link: "PHP-Software-Development",
      },
      {
        label: "CodeIgniter Development",
        link: "CodeIgniter-Development",
      },
      {
        label: "Laravel Software Development",
        link: "Laravel-Software-Development",
      },
      {
        label: "MERN Software Development",
        link: "MERN-Software-Development",
      },
    ],
  },
  {
    category: "CMS Development",
    image: Image3,
    links: [
      {
        label: "Magento Development",
        link: "Magento-Development",
      },
      {
        label: "WordPress Development",
        link: "WordPress-Development",
      },
      {
        label: "Drupal Development",
        link: "Drupal-Development",
      },
      {
        label: "BigCommerce Development",
        link: "BigCommerce-Development",
      },
      {
        label: "Joomla Development",
        link: "Joomla-Development",
      },
    ],
  },
];
const NavbarToggle = () => {
  return (
    <div className="lg:w-[90%] w-[100%] lg:px-4 px-4 lg:bg-white mx-auto">
      <div className="lg:flex lg:w-[90%] mx-auto lg:absolute lg:bg-white bg-[#f6f6f699] gap-10 lg:flex-row lg:justify-between flex-col lg:gap-[0.75rem] xl:px-[3.5rem] lg:px-[12px] lg:py-[4rem] xl:py-[64px] pt-6">
        {navItems.map((menu, index) => {
          return (
            <div key={index} className="">
              <div className="space-y-4">
                <div className="flex gap-1 ">
                  <Image
                    src={menu.image}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="image"
                  />
                  <h3 className="xl:text-[18px] lg:text-[15px] font-[600]">
                    {menu.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {menu.links.map((Element, index) => {
                    return (
                      <div key={index} className="">
                        <Link
                          href={`/services/${Element.link}`}
                          className="xl:text-[14px] hover:text-[#f62c73] mt-4 tracking-[0.28px] lg:text-sm cool-link"
                        >
                          {Element.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NavbarToggle;
