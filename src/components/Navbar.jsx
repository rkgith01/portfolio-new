"use client";

import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
} from "@heroui/react";
import { RiMenu4Fill } from "react-icons/ri";
import { ThemeSwitch } from "./ThemeSwitch";
import { heroImg, links } from "@/../contants/constant";
import Image from "next/image";

const NavbarPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="solid"
          size="sm"
          aria-label="Toggle Navigation Menu"
          onPress={onOpen}
          className="rounded-full shadow-md bg-yellow-600 dark:bg-[#0e0e0e] text-black dark:text-white"
        >
          <RiMenu4Fill className="w-6 h-6" />
        </Button>
      </div>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="right"
        classNames={{
          closeButton:
            "text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300",
        }}
      >
        <DrawerContent className="w-[320px] bg-yellow-600 dark:bg-[#0e0e0e] border-2 border-yellow-600 dark:border-gray-800 rounded-lg shadow-lg overflow-y-scroll">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col items-center gap-4 pt-6 pb-0">
                <div className="relative h-[100px] w-[100px] sm:h-[140px] sm:w-[140px] md:h-[180px] md:w-[180px] rounded-full overflow-hidden shadow-md">
                  <Image
                    src={heroImg}
                    alt="Developer profile avatar logo"
                    fill
                    sizes="(max-width: 768px) 100px, (max-width: 1024px) 140px, 180px"
                    className="object-cover"
                    fetchPriority="low"
                  />
                </div>
              </DrawerHeader>

              <DrawerBody className="flex flex-col gap-4 mt-6">
                {links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.title}
                    onClick={onClose}
                    className="px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors"
                  >
                    <link.icon className="inline-block mr-2" />
                    {link.title}
                  </Link>
                ))}
              </DrawerBody>

              <DrawerFooter className="flex justify-center">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-100 hover:underline">
                    <ThemeSwitch />
                  </div>
                  <Button
                    variant="flat"
                    size="sm"
                    onPress={onClose}
                    className="rounded-full bg-none text-black dark:text-white"
                  >
                    Close
                  </Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarPage;
