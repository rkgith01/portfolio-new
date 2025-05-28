"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { certificateData } from "@/../contants/constant";
import { TiArrowBack } from "react-icons/ti";
import { PiCertificate } from "react-icons/pi";

import PostFooter from "@/components/PostFooter";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const CertificatePage = () => {
  // Get unique certificate titles
  const uniqueTags = [
    ...new Set(certificateData.map((certificate) => certificate.title)),
  ];

  // Function to handle smooth scrolling
  const handleSmoothScroll = (event, tag) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const element = document.getElementById(tag);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section>
      {/* Header */}
      <div className="flex justify-center items-center my-4">
        <h1 className="text-3xl font-bold text-center dark:text-gray-200 text-black p-6">
          Certificates
        </h1>

        <PiCertificate className="text-black dark:text-gray-200  w-9 h-9" />
      </div>

      {/* Tag Links */}
      <div className="lg:w-[100%] flex flex-wrap md:flex-row lg:flex-row items-center rounded-lg p-4 mx-4 z-50 gap-2 bg-yellow-600 dark:bg-gray-700">
        {uniqueTags.map((tag, index) => (
          <span className="font-medium text-lg" key={index}>
            <a
              // Replace spaces with dashes for IDs
              href={`#${tag.replace(/\s+/g, "-")}`}
              // Handle smooth scroll
              onClick={(e) => handleSmoothScroll(e, tag.replace(/\s+/g, "-"))}
              className="text-xs lg:text-sm hover:bg-yellow-300 dark:hover:bg-gray-800 text-black dark:text-amber-500 dark:bg-stone-600 bg-amber-500 p-2 rounded-full transition-colors"
            >
              {tag}
            </a>
          </span>
        ))}
      </div>

      {/* Certificate Details */}
      <div className="mx-auto py-8 flex flex-wrap justify-center items-center flex-col gap-4">
        {certificateData.map((certificate, index) => (
          <div key={index} className="w-full px-4 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4 text-center">
              {/* Set ID for scrolling */}
              <a
                href={certificate.link}
                id={certificate.title.replace(/\s+/g, "-")} // Assign the ID dynamically
                rel="noopener noreferrer"
                className="lg:text-xl md:text-lg sm:text-md font-light text-black dark:text-amber-400 hover:font-bold cursor-pointer"
              >
                <span className="line-clamp-2">{certificate.title}</span>
              </a>
              <a
                href={certificate.link}
                className="text-2xl flex items-center text-black dark:text-amber-400 hover:font-bold"
              >
                <button className="p-2">
                  <TiArrowBack className="w-10 h-10" />
                </button>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.src}
                  alt={certificate.title}
                  className="w-full h-auto object-contain max-w-xs sm:max-w-none"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <PostFooter />
      <Footer />
      <SmoothScroll />
    </section>
  );
};

export default CertificatePage;
