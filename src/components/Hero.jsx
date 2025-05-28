// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { heroImg } from "@/../contants/constant";
// import { HeroMainText } from "./HeroMainText";
// import Quotes from "./Quotes";
// import HeroCard from "./HeroCard";
// import { Button } from "@heroui/react";

// const HeroPage = () => {
//   const [showHeroCard, setShowHeroCard] = useState(false);

//   return (
//     <>
//       <Quotes />
//       {/* <HeroCard /> */}

//       <section className="w-3/4 h-full flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 lg:px-16 py-5 gap-5">
//         {/* Hero Text */}
//         <div className="w-full md:w-1/2">
//           <HeroMainText setShowHeroCard={setShowHeroCard} />
//         </div>

//         {/* Hero Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
//             <Image
//               src={heroImg}
//               alt="Profile image of the developer with gradient border"
//               fill
//               sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 400px"
//               className="object-cover"
//               priority
//               fetchPriority="high"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Conditionally render HeroCard */}
//       {showHeroCard && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
//           <div className="relative max-w-xl w-full">
//             <Button
//               variant="text"
//               isIconOnly
//               color="primary"
//               onPress={() => setShowHeroCard(false)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
//               aria-label="Close Share Card"
//             >
//               &times;
//             </Button>
//             <HeroCard />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default HeroPage;
"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import {
  heroImg1,
  heroImg2,
  heroLogo,
  heroLogo2,
} from "@/../contants/constant";
import { HeroMainText } from "./HeroMainText";
import { Button } from "@heroui/react";
import HeroCard from "./HeroCard";
import Quotes from "./Quotes";

const HeroPage = () => {
  const imageRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showHeroCard, setShowHeroCard] = useState(false);

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark that client has mounted
  }, []);

  // Avoid hydration mismatch
  if (!mounted) return null;

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const currentLogo = activeTheme === "light" ? heroImg2 : heroImg1;
  const hoverLogo = activeTheme === "light" ? heroLogo2 : heroLogo;
  const logoToDisplay = isHovered ? hoverLogo : currentLogo;

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotation({ x, y });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <>
      <Quotes />
      <section className="h-full flex flex-col items-center justify-center">
        <div className="lg:flex items-center">
          <motion.div
            ref={imageRef}
            className="flex justify-center p-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              setIsHovered(false);
              resetRotation();
            }}
            onMouseEnter={() => setIsHovered(true)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                rotateX: rotation.y,
                rotateY: rotation.x,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="rounded-full"
            >
              <div className="h-[240px] w-[240px] md:h-[350px] md:w-[335px] lg:w-[350px] rounded-full border-2 dark:border-slate-100 border-black overflow-hidden shadow-md">
                <Image
                  src={logoToDisplay}
                  alt="hero logo"
                  width={350}
                  height={350}
                  priority
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-2/3">
            <div className="max-w-xl text-center">
              <HeroMainText setShowHeroCard={setShowHeroCard} />
              {showHeroCard && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
                  <div className="relative max-w-xl w-full">
                    <Button
                      variant="text"
                      isIconOnly
                      color="primary"
                      onPress={() => setShowHeroCard(false)}
                      className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
                      aria-label="Close Share Card"
                    >
                      &times;
                    </Button>
                    <HeroCard />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
