"use client";

import TypewriterComponent from "typewriter-effect";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { stringToRead } from "@/../contants/constant";
import { FiShare } from "react-icons/fi";
const NavButton = ({
  href,
  variant = "filled",
  children,
  ariaLabel,
  onPress,
  className = "",
  borderColor = null,
}) => {
  const router = useRouter();

  // Base classes for light/dark theme backgrounds
  const baseClasses =
    variant === "filled"
      ? "bg-sky-600 hover:bg-sky-700 dark:hover:bg-amber-600  dark:bg-amber-500  text-white"
      : "bg-transparent";

  // Border color override if variant is bordered
  const borderOverrideClass = borderColor
    ? `border-[${borderColor}] text-white `
    : "";
  // e.g. border-red-500 or any valid tailwind class

  const handleClick = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(href);
    }
    // router.push(href);
  };

  return (
    <Button
      variant={variant === "filled" ? undefined : "bordered"}
      color="primary"
      // className="px-6 py-2 text-base"
      className={`px-6 py-2 text-base ${baseClasses} ${borderOverrideClass} ${className}`}
      aria-label={ariaLabel}
      onPress={handleClick}
    >
      {children}
    </Button>
  );
};

export const HeroMainText = ({ setShowHeroCard }) => {
  return (
    <section
      aria-label="Introduction"
      className="text-center md:text-left max-w-3xl mx-auto md:mx-0"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Hello! I&apos;m <br />
        <span
          className="block  py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text"
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="additions"
        >
          <TypewriterComponent
            options={{
              strings: stringToRead,
              autoStart: true,
              loop: true,
              delay: 15,
              deleteSpeed: 20,
            }}
          />
        </span>
      </h1>

      {/* <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
        I'm a passionate developer crafting scalable, beautiful experiences on
        the web and beyond.
      </p> */}
      {/* <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
        Driven by a deep curiosity and persistent growth mindset, I build clean,
        maintainable code to solve real-world problems and enhance user
        experiences on the web and beyond.
      </p> */}
      <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
        With years of dedicated development and continuous learning, I create
        efficient, elegant solutions that deliver seamless digital experiences
        across platforms.
      </p>

      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
        <NavButton
          href="/portfolio"
          ariaLabel="View my projects"
          className="rounded-xl shadow-lg"
        >
          View Projects
        </NavButton>
        <NavButton
          href="/about"
          variant="bordered"
          ariaLabel="Learn more about me"
          className="border-sky-500 text-black dark:text-amber-500 dark:border-amber-500  rounded-xl shadow-lg"
        >
          About Me
        </NavButton>

        <NavButton
          // href={setShowHeroCard(true)}
          onPress={() => setShowHeroCard(true)}
          variant="bordered"
          ariaLabel="Learn more about me"
          className="border-sky-500 text-black dark:text-amber-500  dark:border-amber-500 rounded-xl shadow-lg"
        >
          <FiShare size={25} />
        </NavButton>
      </div>
    </section>
  );
};

// "use client";

// import TypewriterComponent from "typewriter-effect";
// import { Button } from "@heroui/react";
// import Link from "next/link";
// import { stringToRead } from "@/../contants/constant";

// export const HeroMainText = () => {
//   return (
//     <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
//       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
//         Hello! I&apos;m <br />
//         <span className="block py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
//           <TypewriterComponent
//             options={{
//               strings: stringToRead,
//               autoStart: true,
//               loop: true,
//               delay: 15,
//               deleteSpeed: 20,
//             }}
//           />
//         </span>
//       </h1>
//       <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
//         I'm a passionate developer crafting scalable, beautiful experiences on
//         the web and beyond.
//       </p>
//       <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
//         <Link href="/portfolio" rel="prerender">
//           <Button color="primary" className="px-6 py-2 text-base">
//             View Projects
//           </Button>
//         </Link>
//         <Link href="/about" rel="prerender">
//           <Button variant="bordered" className="px-6 py-2 text-base">
//             About Me
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };
