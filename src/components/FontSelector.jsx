"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  addToast,
} from "@heroui/react";
import { FaFonticonsFi } from "react-icons/fa";

const fontMap = {
  Arial: "Arial, sans-serif",
  "Times New Roman": "'Times New Roman', serif",
  Roboto: "var(--font-roboto), sans-serif",
  Poppins: "var(--font-poppins), sans-serif",
  Inter: "var(--font-inter), sans-serif",
  Montserrat: "var(--font-montserrat), sans-serif",
  Merriweather: "var(--font-merriweather), serif",
  "Open Sans": "var(--font-open-sans), sans-serif",
  Lobster: "var(--font-lobster)",
  geistMono: "var(--font-geist-mono), monospace",
  geistSans: "var(--font-geist-sans), sans-serif",
};

const STORAGE_KEY = "selectedFont";
const DEFAULT_FONT = "Poppins";

const FontSelector = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([DEFAULT_FONT]));

  const selectedFont = useMemo(() => {
    return Array.from(selectedKeys)[0] || DEFAULT_FONT;
  }, [selectedKeys]);

  useEffect(() => {
    const savedFont =
      typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    const fontToApply = savedFont || DEFAULT_FONT;
    setSelectedKeys(new Set([fontToApply]));
    applyFont(fontToApply);
  }, []);

  const applyFont = (font) => {
    const fontValue = fontMap[font] || fontMap[DEFAULT_FONT];
    document.documentElement.style.setProperty("--font-family", fontValue);
  };

  const handleFontChange = (keys) => {
    const font = Array.from(keys)[0];
    if (font === selectedFont) return; // prevent redundant change
    setSelectedKeys(new Set([font]));
    applyFont(font);
    localStorage.setItem(STORAGE_KEY, font);

    addToast({
      title: `Font Changed`,
      description: `${font} applied successfully.`,
      timeout: 2000,
    });
  };

  return (
    <div className="relative inline-block">
      <Dropdown className="bg-yellow-500 dark:bg-gray-950 border-2 border-black dark:border-gray-500 rounded-lg shadow-lg">
        <DropdownTrigger>
          <Button
            isIconOnly
            variant="bordered"
            className="p-2 rounded-full hover:bg-yellow-600 dark:hover:bg-gray-700 transition border-black dark:border-gray-500"
            aria-label="Font Selector"
          >
            <FaFonticonsFi size={22} />
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Font Selection"
          selectionMode="single"
          selectedKeys={selectedKeys}
          disabledKeys={[selectedFont]}
          onSelectionChange={handleFontChange}
          className="max-h-[300px] overflow-y-auto"
        >
          {Object.keys(fontMap).map((font) => (
            <DropdownItem
              key={font}
              className={`capitalize ${
                font === selectedFont
                  ? "font-bold text-indigo-700 dark:text-yellow-600"
                  : ""
              }`}
            >
              {font}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FontSelector;
