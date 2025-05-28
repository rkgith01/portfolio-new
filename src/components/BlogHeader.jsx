"use client";
import React from "react";
import { User, Link } from "@heroui/react";
import { heroImg1, heroImg2 } from "@/../contants/constant";
import { useTheme } from "next-themes";

const BlogHeader = () => {
  const { theme } = useTheme();

  // Update the avatarProps object to use the appropriate image based on the theme
  const avatarProps = {
    name: (
      <span className="text-black dark:text-white font-bold">Raj Kapadia</span>
    ),
    description: (
      <>
        <Link
          href="https://github.com/rkgith01"
          size="sm"
          isExternal
          className="text-white dark:text-amber-600 hover:font-semibold"
        >
          @rkgith01
        </Link>
        <p className="text-black dark:text-white">
          There are always ways to keep improving and keep moving forward.
        </p>
      </>
    ),
    avatarProps: {
      src: theme === "light" ? heroImg2 : heroImg1,
      alt: "user image",
      className: "w-[80px] h-[80px] border-2",
    },
    para: "It is great to learn something new and expand your knowledge, I share my learnings here.",
    portfolio: {
      link: "/portfolio",
      link2: "/contact",
      text: "You can checkout my projects ",
      text2: "Reach out to me ",
      refer: (
        <Link
          href={"/portfolio"}
          size="sm"
          isExternal
          className="text-white dark:text-amber-600 hover:font-semibold"
        >
          here
        </Link>
      ),
    },
  };

  return (
    <>
      <div className="flex items-center justify-center py-6 px-3 my-6 border-4 border-dashed rounded-lg mx-6">
        <div className="">
          <User
            name={avatarProps.name}
            description={avatarProps.description}
            avatarProps={avatarProps.avatarProps}
          />
          <div className="text-md">
            <p className="p-2 text-black dark:text-white">{avatarProps.para}</p>
            <p className="p-2 text-black dark:text-white">
              {avatarProps.portfolio.text}{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={avatarProps.portfolio.link}
                className="text-white dark:text-amber-600 hover:font-semibold"
              >
                here.
              </a>{" "}
            </p>
            <p className="p-2 text-black dark:text-white">
              {avatarProps.portfolio.text2}{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={avatarProps.portfolio.link2}
                className="text-white dark:text-amber-600 hover:font-semibold"
              >
                here.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
