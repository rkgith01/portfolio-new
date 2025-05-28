"use client";
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "@heroui/react";
import FontSelector from "./FontSelector";
const SmoothScroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScroll && (
        <div className="flex flex-col gap-2 fixed bottom-4 right-4">
          <FontSelector />
          <Button
            isIconOnly
            variant="text"
            className="bg-amber-300 hover:bg-amber-700 text-blue-950 
             dark:bg-gray-500 dark:hover:bg-slate-600 dark:text-gray-50
             font-bold py-2 px-2 rounded-full"
            onPress={scrollToTop}
          >
            <FaArrowCircleUp size={20} />
          </Button>
        </div>
      )}
    </>
  );
};

export default SmoothScroll;
