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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedLink, setSelectedLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleHover = useCallback(
    (href) => {
      router.prefetch(href);
    },
    [router]
  );

  const handlePress = useCallback(
    (link) => {
      setSelectedLink(link);
      setLoading(true);
      setProgress(0);
      onOpen();

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
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

  const handleMouseEnter = (href) => () => handleHover(href);
  const handleClick = (link) => () => handlePress(link);
  const handleOpen = () => {
    if (selectedLink?.href) {
      window.open(selectedLink.href, "_blank", "noopener noreferrer");
    }
  };
  const handleOnLoad = () => {
    setLoading(false);
    setProgress(100);
    clearInterval(intervalRef.current);
  };

  const handleModalClose = (open) => {
    onOpenChange(open);
    if (!open) {
      setSelectedLink(null);
      setProgress(0);
      setLoading(true);
    }
  };

  return (
    <div className="absolute w-full h-[28vh] rotate-y-180 [backface-visibility:hidden] rounded-xl shadow-lg flex flex-col justify-center items-center text-center bg-yellow-700 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-white mb-6">Explore More</h2>

      <ul className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Button
              onMouseEnter={handleMouseEnter(link.href)}
              onPress={handleClick(link)}
              aria-label={`Preview ${link.label}`}
              className="text-sm font-medium bg-white text-black dark:bg-gray-800 dark:text-yellow-300 rounded-lg px-4 py-2 hover:bg-yellow-500 transition-all"
            >
              {link.label}
            </Button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isOpen}
        onOpenChange={handleModalClose}
        placement="center"
        size="5xl"
        scrollBehavior="inside"
        aria-labelledby="modal-title"
        className=" bg-yellow-700 dark:bg-[#0e0e0e] text-black dark:text-white"
        classNames={{
          closeButton: "text-black dark:text-white",
          // base: "bg-yellow-700 dark:bg-[#0e0e0e] text-black dark:text-white",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader id="modal-title">{selectedLink?.label}</ModalHeader>
              <ModalBody>
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

                {selectedLink?.href && (
                  <iframe
                    title={`${selectedLink.label} preview`}
                    src={selectedLink.href}
                    loading="eager"
                    className={`w-full h-[400px] rounded-md border transition-opacity duration-300 ${
                      loading ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
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

// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Button,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
//   Progress,
// } from "@heroui/react";
// import { RiLoader4Line } from "react-icons/ri";

// const links = [
//   {
//     href: "/about",
//     label: "About Me",
//     preview: "This is a short preview of About Me.",
//   },
//   {
//     href: "/blog",
//     label: "Blog Page",
//     preview: "Some cool readings you may like.",
//   },
//   {
//     href: "/certificate",
//     label: "Certificates",
//     preview: "Yes I do have some certifications.",
//   },
//   {
//     href: "/portfolio",
//     label: "Projects",
//     preview: "Take a look at our awesome projects!",
//   },
//   {
//     href: "/about/cv",
//     label: "Read My Resume",
//     preview: "Learn more about me.",
//   },
//   {
//     href: "/site",
//     label: "How I built this site",
//     preview: "Explore how I have built this site.",
//   },
// ];

// const BackSideCard = () => {
//   const [selectedLink, setSelectedLink] = useState(null);
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [loading, setLoading] = useState(false);
//   const [preloaded, setPreloaded] = useState({});
//   const [progress, setProgress] = useState(0);
//   const intervalRef = useRef(null);

//   const handleHover = (link) => {
//     if (!preloaded[link.href]) {
//       const iframe = document.createElement("iframe");
//       iframe.src = link.href;
//       iframe.style.display = "none";
//       document.body.appendChild(iframe);
//       setPreloaded((prev) => ({ ...prev, [link.href]: true }));
//     }
//   };

//   const handlePress = (link) => {
//     setSelectedLink(link);
//     setLoading(true);
//     setProgress(0);

//     intervalRef.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 96) return prev;
//         return prev + 1 + Math.random();
//       });
//     }, 50);

//     onOpen();
//   };

//   return (
//     <div
//       className="absolute w-full h-[28vh] rotate-y-180 [backface-visibility:hidden] rounded-xl shadow-lg flex flex-col justify-center items-center text-center bg-yellow-700 dark:bg-gray-900
//       "
//     >
//       <h2 className="text-2xl font-bold text-white mb-6">Explore More</h2>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl p-2 overflow-y-scroll">
//         {links.map((link) => (
//           <li key={link.href}>
//             <Button
//               onMouseEnter={() => handleHover(link)}
//               onPress={() => handlePress(link)}
//               className="w-auto"
//             >
//               {link.label}
//             </Button>
//           </li>
//         ))}
//       </ul>

//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         size="4xl"
//         backdrop="blur"
//         classNames={{
//           closeButton: "text-black dark:text-white",
//         }}
//       >
//         <ModalContent className="bg-yellow-700 dark:bg-gray-800 text-white">
//           {(onClose) => (
//             <>
//               <ModalHeader>{selectedLink?.label} (Preview)</ModalHeader>
//               <ModalBody className="relative">
//                 {loading && (
//                   <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-blur z-10 rounded-md text-white font-semibold px-4">
//                     <RiLoader4Line size={36} className="animate-spin" />
//                     <Progress
//                       value={Math.min(Math.floor(progress), 100)}
//                       size="md"
//                       color="success"
//                       showValueLabel={true}
//                       className="w-full max-w-sm"
//                       aria-label="Loading preview..."
//                     />
//                   </div>
//                 )}
//                 {selectedLink && (
//                   <iframe
//                     key={selectedLink.href}
//                     src={selectedLink.href}
//                     title={selectedLink.label}
//                     className="w-full h-[60vh] rounded-md border border-gray-300 dark:border-gray-700"
//                     onLoad={() => {
//                       setLoading(false);
//                       setProgress(100);
//                       clearInterval(intervalRef.current);
//                     }}
//                   />
//                 )}
//               </ModalBody>
//               <ModalFooter className="flex justify-between items-center">
//                 <Button color="primary" variant="solid" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   onClick={() => window.open(selectedLink.href, "_blank")}
//                 >
//                   Visit Full Page →
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default BackSideCard;
