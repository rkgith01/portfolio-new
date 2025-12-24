"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
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
  Inter: "var(--font-inter), sans-serif",
  Montserrat: "var(--font-montserrat), sans-serif",
  Merriweather: "var(--font-merriweather), serif",
  geistMono: "var(--font-geist-mono), monospace",
};

const STORAGE_KEY = "selectedFont";
const DEFAULT_FONT = "Inter";

const FontSelector = () => {
  const [selectedFont, setSelectedFont] = useState(DEFAULT_FONT);
  const docFun = (font) => {
    document.documentElement.style.setProperty("--font-family", fontMap[font]);
  };
  // Apply saved font on initial mount
  useEffect(() => {
    const savedFont = localStorage.getItem(STORAGE_KEY) || DEFAULT_FONT;
    setSelectedFont(savedFont);
    docFun(savedFont);
  }, []);

  const applyFont = useCallback((font) => {
    docFun(font);
    localStorage.setItem(STORAGE_KEY, font);
    addToast({
      title: "Font Changed",
      description: `${font} applied successfully.`,
      timeout: 2000,
      type: "success",
    });
  }, []);

  const handleFontChange = useCallback(
    (keys) => {
      const font = Array.from(keys)[0];
      if (!font || font === selectedFont) return;

      // Set state first (this will re-render once)
      setSelectedFont(font);
      applyFont(font);
    },
    [selectedFont, applyFont]
  );

  // Memoize selected/disabled keys so they're stable
  const selectedKeys = useMemo(() => new Set([selectedFont]), [selectedFont]);
  const disabledKeys = useMemo(() => [selectedFont], [selectedFont]);

  return (
    <div className="relative inline-block">
      <Dropdown className="z-50 bg-yellow-500 border-2 border-black dark:bg-gray-900 dark:border-gray-700 rounded-md shadow-lg">
        <DropdownTrigger>
          <Button
            isIconOnly
            variant="bordered"
            aria-label="Font Selector"
            className="p-2 rounded-full hover:bg-yellow-500 dark:hover:bg-gray-700 transition-colors border-black dark:border-gray-400"
          >
            <FaFonticonsFi size={20} />
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Font Selection Dropdown"
          selectionMode="single"
          selectedKeys={selectedKeys}
          disabledKeys={disabledKeys}
          onSelectionChange={handleFontChange}
          className="max-h-[300px] overflow-y-auto"
        >
          {Object.keys(fontMap).map((font) => (
            <DropdownItem
              key={font}
              className={`capitalize transition-all ${
                font === selectedFont
                  ? "italic text-white bg-black dark:text-yellow-400"
                  : "hover:text-indigo-500 dark:hover:text-yellow-300"
              }`}
              aria-selected={font === selectedFont}
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
