// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonLine, RiSunFill } from "react-icons/ri";
export const ThemeSwitch = ({ open }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`flex items-center cursor-pointer p-[0.5rem] text-black dark:text-white  ${
        open === true ? "text-white" : ""
      }`}
    >
      {/* The current theme is: {theme ? <RiMoonLine /> : <RiSunFill />} */}
      {theme === "light" ? (
        <Button
          variant="bordered"
          aria-label="Toggle dark mode"
          className="text-black rounded-full dark:text-white border-black dark:border-white"
          isIconOnly
          onPress={() => setTheme("dark")}
          endContent={<RiMoonLine size={25} />}
        ></Button>
      ) : (
        <Button
          variant="bordered"
          aria-label="Toggle light mode"
          className="text-black rounded-full dark:text-white border-black dark:border-gray-600"
          isIconOnly
          onPress={() => setTheme("light")}
          endContent={<RiSunFill size={25} />}
        ></Button>
      )}
    </div>
  );
};
