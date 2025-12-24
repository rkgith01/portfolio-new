"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Progress,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { RiLoader4Line } from "react-icons/ri";

// Navigation links with label and preview info
const links = [
  {
    href: "/about",
    label: "About Me",
    preview: "This is a short preview of About Me.",
  },
  {
    href: "/blog",
    label: "Blog Page",
    preview: "Some cool readings you may like.",
  },
  {
    href: "/certificate",
    label: "Certificates",
    preview: "Yes I do have some certifications.",
  },
  {
    href: "/portfolio",
    label: "Projects",
    preview: "Take a look at our awesome projects!",
  },
  {
    href: "/about/cv",
    label: "Read My Resume",
    preview: "Learn more about me.",
  },
  {
    href: "/site",
    label: "How I built this site",
    preview: "Explore how I have built this site.",
  },
];

const BackSideCard = () => {
  const router = useRouter();

  // Modal open state management
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Currently selected link for preview
  const [selectedLink, setSelectedLink] = useState(null);

  // Loading state and progress for iframe preview
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // To hold interval for progress animation
  const intervalRef = useRef(null);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Prefetch page on hover for better UX
  const handleHover = useCallback(
    (href) => {
      router.prefetch(href);
    },
    [router]
  );

  // When user clicks a link: open modal, start loading progress
  const handlePress = useCallback(
    (link) => {
      setSelectedLink(link);
      setLoading(true);
      setProgress(0);
      onOpen();

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          // Cap progress at 98% while loading iframe
          if (prev >= 98) {
            clearInterval(intervalRef.current);
            return 98;
          }
          return prev + Math.random() * 3 + 1;
        });
      }, 60);
    },
    [onOpen]
  );

  // Handler to create stable callbacks for mouse events
  const handleMouseEnter = (href) => () => handleHover(href);
  const handleClick = (link) => () => handlePress(link);

  // Open preview link in a new tab
  const handleOpen = () => {
    if (selectedLink?.href) {
      window.open(selectedLink.href, "_blank", "noopener noreferrer");
    }
  };

  // When iframe finishes loading, mark progress as 100% and stop interval
  const handleOnLoad = () => {
    setLoading(false);
    setProgress(100);
    clearInterval(intervalRef.current);
  };

  // Reset state when modal closes
  const handleModalClose = (open) => {
    onOpenChange(open);
    if (!open) {
      setSelectedLink(null);
      setProgress(0);
      setLoading(true);
    }
  };

  return (
    <div
      className="
        absolute w-full h-[25vh] rotate-y-180 backface-hidden
        rounded-xl shadow-lg flex flex-col justify-center items-center text-center
        bg-yellow-700 dark:bg-gray-900
      "
    >
      <h2 className="text-2xl font-bold text-white mb-6">Explore More</h2>

      {/* Navigation buttons */}
      <ul className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Button
              onMouseEnter={handleMouseEnter(link.href)}
              onPress={handleClick(link)}
              aria-label={`Preview ${link.label}`}
              className="
                text-sm font-medium bg-white text-black
                dark:bg-gray-800 dark:text-yellow-300
                rounded-lg px-4 py-2 hover:bg-yellow-500 transition-all
              "
            >
              {link.label}
            </Button>
          </li>
        ))}
      </ul>

      {/* Modal showing iframe preview */}
      <Modal
        isOpen={isOpen}
        onOpenChange={handleModalClose}
        placement="center"
        size="5xl"
        scrollBehavior="inside"
        aria-labelledby="modal-title"
        className="bg-yellow-700 dark:bg-[#0e0e0e] text-black dark:text-white"
        classNames={{
          closeButton: "text-black dark:text-white",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader id="modal-title">{selectedLink?.label}</ModalHeader>
              <ModalBody>
                {/* Loading progress bar and spinner */}
                {loading && (
                  <>
                    <Progress
                      value={progress}
                      classNames={{
                        track: "drop-shadow-md border border-default",
                        label:
                          "tracking-wide font-medium text-white dark:text-gray-300",
                        value: "text-white dark:text-yellow-400 font-semibold",
                      }}
                      label="Loading preview"
                      radius="md"
                      showValueLabel={true}
                      size="md"
                      aria-label="Loading preview"
                    />
                    <div className="flex justify-center py-4 text-gray-300 dark:text-gray-300">
                      <RiLoader4Line className="animate-spin text-2xl" />
                    </div>
                  </>
                )}

                {/* Preview iframe */}
                {selectedLink?.href && (
                  <iframe
                    title={`${selectedLink.label} preview`}
                    src={selectedLink.href}
                    loading="eager"
                    className={`
                      w-full h-[400px] rounded-md border transition-opacity duration-300
                      ${
                        loading
                          ? "opacity-0 pointer-events-none"
                          : "opacity-100"
                      }
                    `}
                    onLoad={handleOnLoad}
                  />
                )}
              </ModalBody>

              <ModalFooter>
                <Button
                  type="button"
                  color="primary"
                  onPress={handleOpen}
                  aria-label="Open full page"
                >
                  Open
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BackSideCard;
