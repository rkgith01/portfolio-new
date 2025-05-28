/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from "react";
import {
  FaSass,
  FaCcStripe,
  FaNode,
  FaGitAlt,
  FaAws,
  FaArrowUpRightDots,
} from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { Accordion, AccordionItem } from "@heroui/react";

import {
  RiHtml5Fill,
  RiSunFill,
  RiSunLine,
  RiEyeLine,
  RiEyeCloseLine,
  RiCss3Fill,
  RiReactjsFill,
  RiBootstrapFill,
  RiOpenaiFill,
  RiGithubFill,
  RiFlutterFill,
  RiSupabaseFill,
} from "react-icons/ri";
import {
  SiNextdotjs,
  SiStrapi,
  SiPrisma,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiVite,
  SiTailwindcss,
  SiNextui,
  SiRedux,
  SiVercel,
  SiFramer,
  SiMui,
  SiPostman,
  SiInsomnia,
  SiFigma,
  SiWebflow,
} from "react-icons/si";
import { baseImageUrl } from "../../contants/constant";

const images = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&",
];

const skillsToshow = [
  {
    link: SiNextdotjs,
    title: "Nextjs",
  },
  {
    link: SiStrapi,
    title: "Strapi",
  },
  {
    link: SiPrisma,
    title: "Prisma",
  },
  {
    link: SiExpress,
    title: "Express",
  },
  {
    link: SiTypescript,
    title: "TypeScript",
  },
  {
    link: SiJavascript,
    title: "JavaScript",
  },
  {
    link: SiPython,
    title: "Python",
  },
  {
    link: SiMongodb,
    title: "MongoDB",
  },
  {
    link: SiVite,
    title: "Vite",
  },
  {
    link: SiTailwindcss,
    title: "Tailwind CSS",
  },
  {
    link: SiNextui,
    title: "NextUI",
  },
  {
    link: SiRedux,
    title: "Redux",
  },
  {
    link: SiVercel,
    title: "Vercel",
  },
  {
    link: SiFramer,
    title: "Framer",
  },
  {
    link: SiMui,
    title: "Meraki UI",
  },
  {
    link: SiPostman,
    title: "Postman",
  },
  {
    link: SiInsomnia,
    title: "Insomnia",
  },
  {
    link: SiFigma,
    title: "Figma",
  },
  {
    link: SiWebflow,
    title: "Webflow",
  },
  {
    link: RiHtml5Fill,
    title: "HTML5",
  },
  {
    link: RiCss3Fill,
    title: "CSS3",
  },
  {
    link: RiBootstrapFill,
    title: "Bootstrap",
  },
  {
    link: RiReactjsFill,
    title: "React",
  },
  {
    link: RiOpenaiFill,
    title: "OpenAI",
  },
  {
    link: RiGithubFill,
    title: "Github",
  },
  {
    link: RiFlutterFill,
    title: "Flutter",
  },
  {
    link: RiSupabaseFill,
    title: "Supabase",
  },
  {
    link: FaSass,
    title: "Sass",
  },
  {
    link: FaCcStripe,
    title: "Stripe",
  },
  {
    link: FaNode,
    title: "NodeJS",
  },
  {
    link: FaGitAlt,
    title: "Git",
  },
  {
    link: FaAws,
    title: "AWS",
  },
  {
    link: TbBrandVscode,
    title: "VSCode",
  },
  {
    url: `${baseImageUrl}aboutImg/shadcn.jpg`,
    title: "shadcn",
  },
  {
    url: `${baseImageUrl}aboutImg/neondb.png`,
    title: "NeonDB",
  },
  {
    url: `${baseImageUrl}aboutImg/drizzle.png`,
    title: "Drizzle ORM",
  },
  {
    url: `${baseImageUrl}aboutImg/langchain.jpg`,
    title: "Langchain",
  },
];

const AnimateImage = () => {
  return (
    <div className="border flex items-center w-full p-4 rounded flex-wrap justify-center gap-1">
      {skillsToshow.map((item, index) => {
        return (
          <div key={index} className="relative group p-4 m-1">
            {item.link ? (
              <span className="group-hover:opacity-100">
                <item.link className="w-12 h-12" />
              </span>
            ) : (
              <img
                src={item.url}
                className="w-12 h-12 object-cover rounded-lg"
                alt=""
              />
            )}
            <p className="transition-all w-full absolute right-0 left-0 text-nowrap text-xs bg-blue-700 text-white dark:bg-orange-500 rounded-lg p-1 mt-1 text-center opacity-0 group-hover:opacity-100">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AnimateImage;

export const AccAnimateImage = () => {
  // using a ref
  const accordionContentRef = useRef(null);

  const handleScrollIntoView = () => {
    if (accordionContentRef.current) {
      accordionContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const itemClasses = {
    base: "py-0 w-full",
    title: "text-black dark:text-white text-2xl font-semibold",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-yellow-700 dark:data-[hover=true]:bg-gray-600 rounded-lg h-14 flex items-center transition-colors",
    indicator: "text-bold data-[open=true]:rotate-180",
    content: "text-small px-2",
  };

  return (
    <Accordion
      itemClasses={itemClasses}
      variant="contained"
      defaultExpandedKeys={["sun"]}
    >
      <AccordionItem
        key="sun"
        isOpen={true}
        aria-label="Sun"
        indicator={({ isOpen }) =>
          isOpen ? <RiEyeCloseLine /> : <RiEyeLine />
        }
        title="My skills"
        startContent={<FaArrowUpRightDots className="w-6 h-6" />}
        onPress={handleScrollIntoView}
      >
        <div ref={accordionContentRef}>
          <AnimateImage />
        </div>
      </AccordionItem>
    </Accordion>
  );
};
