// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   RiRefreshLine,
//   RiEyeLine,
//   RiEyeOffLine,
//   RiDoubleQuotesL,
//   RiDoubleQuotesR,
// } from "react-icons/ri";
// import { Button, Alert } from "@heroui/react";
// import { useTheme } from "next-themes";
// import quotes from "@/utils/quotesData";

// // Utility: returns a random quote
// const getRandomQuote = () => {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// };

// const Quotes = () => {
//   const [quote, setQuote] = useState("");
//   const [author, setAuthor] = useState("");
//   const [isSpinning, setIsSpinning] = useState(false);
//   // const [fadeClass, setFadeClass] = useState("opacity-0");
//   const [blur, setBlur] = useState("blur-none");
//   const [requestTimestamps, setRequestTimestamps] = useState([]);
//   const [showWarning, setShowWarning] = useState(false);

//   const { theme } = useTheme();

//   const showAlertTemporarily = () => {
//     setShowWarning(true);
//     setTimeout(() => setShowWarning(false), 3000);
//   };

//   const handleQuoteChange = () => {
//     const now = Date.now();
//     const recentRequests = requestTimestamps.filter((t) => now - t < 10000); // keep only last 10s

//     if (recentRequests.length >= 5) {
//       showAlertTemporarily();
//       return;
//     }

//     setRequestTimestamps([...recentRequests, now]);
//     setIsSpinning(true);
//     // setFadeClass("opacity-0");

//     setTimeout(() => {
//       const { quote, author } = getRandomQuote();
//       setQuote(quote);
//       setAuthor(author);
//       // setFadeClass("opacity-100");
//       setIsSpinning(false);
//     }, 500);
//   };

//   useEffect(() => {
//     const { quote, author } = getRandomQuote();
//     setQuote(quote);
//     setAuthor(author);
//     // setFadeClass("opacity-100");
//   }, []);

//   const toggleBlur = () => {
//     setBlur((prev) => (prev === "blur-none" ? "blur-sm" : "blur-none"));
//   };

//   const alertColor = theme === "dark" ? "warning" : "primary";

//   return (
//     <div className="relative">
//       {showWarning && (
//         <div className="fixed top-4 left-4 md:left-1/2 md:-translate-x-1/2 z-50 w-[300px] md:w-[470px]">
//           <Alert
//             color={alertColor}
//             variant="solid"
//             title="Slow down!"
//             description="You're making requests too fast. Please wait a moment."
//           />
//         </div>
//       )}

//       <div className="flex items-center justify-center flex-col gap-2 py-2 px-2 my-4 ">
//         <div
//           className={`flex flex-col  md:flex-row items-center transition-opacity duration-500
//             ${blur}`}
//           // ${fadeClass}
//         >
//           <blockquote className="flex justify-center text-sm text-pretty italic leading-relaxed">
//             <RiDoubleQuotesL size={12} className={`mr-2 ${blur}`} />
//             <span>{quote || "Loading..."}</span>
//             <RiDoubleQuotesR size={12} className={`ml-2 ${blur}`} />
//           </blockquote>
//           <div>
//             <span className="mt-2 font-semibold text-pretty text-sm">
//               - {author}
//             </span>
//           </div>
//         </div>

//         <div className="flex items-center">
//           <Button
//             onPress={handleQuoteChange}
//             isIconOnly
//             variant="text"
//             aria-label="Refresh Quote"
//             className="flex items-center justify-center cursor-pointer"
//             isDisabled={isSpinning || showWarning}
//           >
//             <RiRefreshLine
//               className={`h-5 w-5 mx-2 hover:text-white dark:hover:text-amber-500 ${blur} ${
//                 isSpinning ? "animate-spin" : ""
//               } ${
//                 blur === "blur-sm" ? "cursor-not-allowed" : "cursor-pointer"
//               }`}
//             />
//           </Button>

//           <div className="cursor-pointer">
//             {blur === "blur-sm" ? (
//               <RiEyeOffLine
//                 onClick={toggleBlur}
//                 className="h-6 w-6 opacity-30 hover:text-white dark:hover:text-amber-500"
//               />
//             ) : (
//               <RiEyeLine
//                 onClick={toggleBlur}
//                 className="h-6 w-6 opacity-30 hover:text-white dark:hover:text-amber-500"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quotes;

"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
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

// Utility function moved outside component
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const Quotes = () => {
  const [quoteState, setQuoteState] = useState({ quote: "", author: "" });
  const [isSpinning, setIsSpinning] = useState(false);
  const [blur, setBlur] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const { theme } = useTheme();

  //  UseRef instead of state for request tracking & timeout
  const requestTimestampsRef = useRef([]);
  const timeoutRef = useRef(null);
  const alertTimeoutRef = useRef(null);

  //  UseMemo for alert color for efficiency
  const alertColor = useMemo(
    () => (theme === "dark" ? "warning" : "primary"),
    [theme]
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(alertTimeoutRef.current);
    };
  }, []);

  // Get first quote on mount
  useEffect(() => {
    setQuoteState(() => getRandomQuote());
  }, []);

  const showAlertTemporarily = useCallback(() => {
    setShowWarning(true);
    alertTimeoutRef.current = setTimeout(() => setShowWarning(false), 3000);
  }, []);

  const handleQuoteChange = useCallback(() => {
    const now = Date.now();

    //  Filter only recent requests
    requestTimestampsRef.current = requestTimestampsRef.current.filter(
      (t) => now - t < 10000
    );

    if (requestTimestampsRef.current.length >= 5) {
      showAlertTemporarily();
      return;
    }

    requestTimestampsRef.current.push(now);
    setIsSpinning(true);

    timeoutRef.current = setTimeout(() => {
      setQuoteState(() => getRandomQuote());
      setIsSpinning(false);
    }, 500);
  }, [showAlertTemporarily]);

  const toggleBlur = useCallback(() => {
    setBlur((prev) => !prev);
  }, []);
  const isBlur = blur ? "blur-sm" : "";
  return (
    <section className="relative mt-6">
      {showWarning && (
        <div
          role="alert"
          className="fixed top-4 left-4 md:left-1/2 md:-translate-x-1/2 z-50 w-[300px] md:w-[470px]"
        >
          <Alert
            color={alertColor}
            variant="solid"
            title="Slow down!"
            description="You're making requests too fast. Please wait a moment."
          />
        </div>
      )}

      <figure className="flex flex-col items-center gap-3 px-4 text-center">
        <blockquote
          className={`italic text-sm leading-relaxed flex items-center gap-1 ${isBlur}`}
        >
          <RiDoubleQuotesL size={14} />
          <span>{quoteState.quote || "Loading..."}</span>
          <RiDoubleQuotesR size={14} />
        </blockquote>

        <figcaption className={`text-sm font-semibold" ${isBlur}`}>
          – {quoteState.author || "Unknown"}
        </figcaption>

        <div className="flex items-center justify-center gap-3 ">
          <Button
            onPress={handleQuoteChange}
            isIconOnly
            variant="text"
            aria-label="Refresh Quote"
            isDisabled={isSpinning || showWarning}
          >
            <RiRefreshLine
              className={`w-5 h-5 transition-all ${
                isSpinning ? "animate-spin" : ""
              }`}
            />
          </Button>

          <Button
            onPress={toggleBlur}
            isIconOnly
            variant="text"
            aria-label={blur ? "Unblur Quote" : "Blur Quote"}
            className="text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-amber-500"
          >
            {blur ? <RiEyeOffLine size={22} /> : <RiEyeLine size={22} />}
          </Button>
        </div>
      </figure>
    </section>
  );
};

export default Quotes;
