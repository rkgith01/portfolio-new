"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { mainLogo, mainLogo2 } from "../../contants/constant";

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [currentLogo, setCurrentLogo] = useState(mainLogo);

  //  to update the logo based on the theme
  useEffect(() => {
    const activeTheme = theme === "system" ? resolvedTheme : theme;
    setCurrentLogo(activeTheme === "light" ? mainLogo : mainLogo2);
  }, [theme, resolvedTheme]);
  return (
    <>
      <Link
        href="/"
        aria-label="Home"
        className="relative group"
        prefetch={true}
      >
        <Image
          src={currentLogo}
          alt="Developer Logo"
          className="w-[5rem] h-[5rem] hover:scale-110 hover:animate-pulse object-cover"
          width={350}
          height={350}
        />
      </Link>
    </>
  );
};

export default Logo;
