/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { solinks } from "../../contants/constant";
import { ThemeSwitch } from "./ThemeSwitch";
import Logo from "./Logo";
import FontSelector from "./FontSelector";
import VersionSelector from "./VersionSelector";

const Footer = () => {
  // the final sentence
  const buildInfo = <p>All rights Reserved &copy; by Raj Kapadia 💚</p>;

  return (
    <>
      <div className="flex items-center w-full justify-around text-sm  ">
        {/* Developer Logo */}
        <div className="flex items-center justify-center  md:mb-0 text-black dark:text-white">
          <Logo />

          <div className="">
            <ThemeSwitch />
          </div>
          <FontSelector />
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-2 ">
          {solinks.map((link) => (
            <Link
              href={link.url}
              aria-label={link.title}
              key={link.title}
              target="_blank"
              className="flex items-center justify-center"
            >
              <link.icon className="w-8 h-8 hover:text-white transition-colors dark:hover:text-amber-400 text-black dark:text-white" />
            </Link>
          ))}
        </div>
      </div>
      {/* Build Information */}
      <div className="flex items-center justify-center gap-4 text-black dark:text-white text-xs my-2">
        <VersionSelector />
        {buildInfo}
      </div>
    </>
  );
};

export default Footer;
