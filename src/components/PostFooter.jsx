"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { footer, heroImg } from "@/../contants/constant";
import { useTheme } from "next-themes";
import Image from "next/image";

let menuItems = [
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
  { href: "https://github.com/rkgith01", label: "github" },
  { href: "https://codepen.io/rkgith01", label: "codepen" },
];

const PostFooter = () => {
  // const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const logoToDisplay = theme === "light" ? heroImg2 : heroImg1;
  useEffect(() => {
    // Ensures theme is available after mount
    setMounted(true);
  }, []);

  if (!mounted) {
    // Or a skeleton/loader
    return null;
  }
  return (
    <div className="mx-4 px-2 mb-4 flex flex-col md:flex-row lg:flex-row gap-4 justify-normal dark:bg-gray-700 bg-yellow-600 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center w-full md:w-[100%] lg:w-1/2">
        <Image
          width={150}
          height={150}
          loading="lazy"
          src={heroImg}
          className="w-[150px] h-[150px] rounded-full border-2"
          alt="footer img"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl text-black dark:text-white font-semibold text-center md:text-left lg:text-left">
          {footer.title}
        </h1>
        <p className="text-md text-black dark:text-white mt-2 text-justify">
          {footer.intro}
        </p>
        <div className="flex justify-start mt-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className={`mr-4 text-black dark:text-white hover:font-semibold`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
