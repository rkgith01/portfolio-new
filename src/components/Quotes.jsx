"use client";
import React, { useState, useEffect } from "react";
import {
  RiRefreshLine,
  RiEyeLine,
  RiEyeOffLine,
  RiDoubleQuotesL,
  RiDoubleQuotesR,
} from "react-icons/ri";
import { Button, Alert } from "@heroui/react";
import { useTheme } from "next-themes";
import quotes from "@/utils/quotesData";

// Utility: returns a random quote
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  // const [fadeClass, setFadeClass] = useState("opacity-0");
  const [blur, setBlur] = useState("blur-none");
  const [requestTimestamps, setRequestTimestamps] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const { theme } = useTheme();

  const showAlertTemporarily = () => {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  };

  const handleQuoteChange = () => {
    const now = Date.now();
    const recentRequests = requestTimestamps.filter((t) => now - t < 10000); // keep only last 10s

    if (recentRequests.length >= 5) {
      showAlertTemporarily();
      return;
    }

    setRequestTimestamps([...recentRequests, now]);
    setIsSpinning(true);
    // setFadeClass("opacity-0");

    setTimeout(() => {
      const { quote, author } = getRandomQuote();
      setQuote(quote);
      setAuthor(author);
      // setFadeClass("opacity-100");
      setIsSpinning(false);
    }, 500);
  };

  useEffect(() => {
    const { quote, author } = getRandomQuote();
    setQuote(quote);
    setAuthor(author);
    // setFadeClass("opacity-100");
  }, []);

  const toggleBlur = () => {
    setBlur((prev) => (prev === "blur-none" ? "blur-sm" : "blur-none"));
  };

  const alertColor = theme === "dark" ? "warning" : "primary";

  return (
    <div className="relative">
      {showWarning && (
        <div className="fixed top-4 left-4 md:left-1/2 md:-translate-x-1/2 z-50 w-[300px] md:w-[470px]">
          <Alert
            color={alertColor}
            variant="solid"
            title="Slow down!"
            description="You're making requests too fast. Please wait a moment."
          />
        </div>
      )}

      <div className="flex items-center justify-center flex-col gap-2 py-2 px-2 my-4 ">
        <div
          className={`flex flex-col  md:flex-row items-center transition-opacity duration-500 
            ${blur}`}
          // ${fadeClass}
        >
          <div className="flex justify-center text-sm text-pretty italic leading-relaxed">
            <RiDoubleQuotesL size={12} className={`mr-2 ${blur}`} />
            <span>{quote || "Loading..."}</span>
            <RiDoubleQuotesR size={12} className={`ml-2 ${blur}`} />
          </div>
          <div>
            <span className="mt-2 font-semibold text-pretty text-sm">
              - {author}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <Button
            onPress={handleQuoteChange}
            isIconOnly
            variant="text"
            aria-label="Refresh Quote"
            className="flex items-center justify-center cursor-pointer"
            isDisabled={isSpinning || showWarning}
          >
            <RiRefreshLine
              className={`h-5 w-5 mx-2 hover:text-white dark:hover:text-amber-500 ${blur} ${
                isSpinning ? "animate-spin" : ""
              } ${
                blur === "blur-sm" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          </Button>

          <div className="cursor-pointer">
            {blur === "blur-sm" ? (
              <RiEyeOffLine
                onClick={toggleBlur}
                className="h-6 w-6 opacity-30 hover:text-white dark:hover:text-amber-500"
              />
            ) : (
              <RiEyeLine
                onClick={toggleBlur}
                className="h-6 w-6 opacity-30 hover:text-white dark:hover:text-amber-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
