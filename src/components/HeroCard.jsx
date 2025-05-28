"use client";

import React from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { RiShareForwardLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { heroImg } from "../../contants/constant";

const HeroCard = () => {
  const router = useRouter();
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this profile!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };
  const actions = [
    {
      label: "About Me",
      route: "/about",
      variant: "solid",
      color: "success",
      iconOnly: false,
    },
    {
      label: "View Projects",
      route: "/portfolio",
      variant: "bordered",
      color: "primary",
      iconOnly: false,
    },
    {
      ariaLabel: "Share Profile",
      onPress: handleShare,
      iconOnly: true,
      icon: <RiShareForwardLine size={20} />,
      className:
        "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white",
    },
  ];

  return (
    <Card
      // shadow="lg"
      radius="lg"
      // isHoverable
      className="w-full max-w-xl mx-auto mt-10 bg-gradient-to-b from-yellow-600 to-yellow-200 dark:from-[#0e0e0e] dark:to-gray-800 border dark:border-gray-700"
    >
      {/* Avatar Section */}
      <div className="flex justify-center py-2 border-b border-yellow-700 dark:border-gray-700">
        <div className="relative h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full overflow-hidden py-2 ">
          <Image
            src={heroImg}
            alt="Developer profile avatar"
            fill
            sizes="(max-width: 768px) 100px, (max-width: 1024px) 140px, 180px"
            className="object-cover"
            fetchPriority="low"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-6 py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Hello, I’m Raj Kapadia
        </h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">
          A full-stack developer who crafts elegant and efficient software
          solutions.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 px-6 py-6 border-t border-yellow-700 dark:border-gray-700">
        {actions.map((action, index) =>
          action.iconOnly ? (
            <Button
              key={index}
              isIconOnly
              aria-label={action.ariaLabel}
              onPress={action.onPress}
              className={action.className}
              endContent={action.icon}
            />
          ) : (
            <Button
              key={index}
              onPress={() => router.push(action.route)}
              variant={action.variant}
              color={action.color}
            >
              {action.label}
            </Button>
          )
        )}
      </div>
    </Card>
  );
};

export default HeroCard;
