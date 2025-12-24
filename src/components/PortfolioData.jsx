// PortfolioData.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/../contants/constant";
import { NavItem } from "./ResumePage";
import { FaCode } from "react-icons/fa";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import dynamic from "next/dynamic";

const SwiperGallery = dynamic(() => import("./SwiperGallery"), {
  ssr: false,
});

const tabs = [
  { label: "Full Stack" },
  { label: "Front-End" },
  { label: "Back-End" },
  { label: "All" },
];

const PortfolioData = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  const handleTabClick = (index) => setActiveTab(index);

  const filteredCategories =
    activeTab === tabs.length - 1
      ? categories
      : categories.filter((cat) => cat.category === tabs[activeTab].label);

  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section>
        <div className="container px-6 py-10 mx-auto">
          <section className="mb-8 text-center">
            <h1 className="flex items-center justify-center gap-2 text-2xl font-semibold md:text-center text-black capitalize lg:text-3xl dark:text-white">
              <span>Latest Work</span>
              <FaCode className="w-8 h-8" /> :
            </h1>

            {/* Tabs */}
            <div className="flex py-4 mt-4 overflow-x-auto md:justify-center dark:border-gray-700">
              {tabs.map((tab, index) => (
                <p
                  key={index}
                  className={`h-12 px-8 py-2 text-sm cursor-pointer whitespace-nowrap focus:outline-none ${
                    activeTab === index
                      ? "text-orange-800 border-orange-800 dark:text-amber-300 border-b-2 dark:border-amber-400"
                      : "text-black border-b-2 border-orange-200 dark:text-white dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-300"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </p>
              ))}
            </div>

            {/* Category nav links */}
            <div className="flex items-center justify-center px-6 py-4 gap-4 flex-wrap bg-yellow-600 dark:bg-gray-600 rounded-lg">
              {filteredCategories.map((category, index) => (
                <NavItem href={"#" + category.linkTitle} key={index}>
                  <span className="text-sm capitalize text-black dark:text-white dark:border-red-100 border-b-2 border-black hover:border-orange-500 dark:hover:border-orange-400">
                    {category.title}
                  </span>
                </NavItem>
              ))}
            </div>
          </section>
          {/* Projects */}
          <section className="mt-8 space-y-8 lg:mt-12">
            {filteredCategories.map((category, index) => (
              <motion.section
                key={index}
                className="lg:flex lg:gap-4 lg:items-center"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                id={category.linkTitle}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 rounded-lg p-4">
                  <div>
                    <h2 className="mt-2 text-2xl font-semibold text-black dark:text-white uppercase">
                      {category.title}
                    </h2>
                    <p className="text-sm tracking-wider text-amber-900 dark:text-yellow-300">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {category.githubLink && (
                        <a
                          href={category.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <category.icon className="text-3xl hover:text-orange-500 dark:hover:text-orange-400" />
                        </a>
                      )}
                      {category.projectLink && (
                        <a
                          href={category.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <category.icon2 className="text-3xl hover:text-orange-500 dark:hover:text-orange-400" />
                        </a>
                      )}
                    </div>
                    <code className="bg-gray-950 rounded-lg p-2 flex gap-2 flex-wrap">
                      {category.technologies.map((tech, idx) => (
                        <li
                          key={idx}
                          className="uppercase text-xs bg-gray-500 p-2 rounded-lg list-none"
                        >
                          {tech}
                        </li>
                      ))}
                    </code>
                  </div>
                </div>

                {/* ✅ Lazy SwiperGallery */}
                <div className="mt-4 lg:w-1/2 lg:mt-0">
                  <SwiperGallery images={category.images} />
                </div>
              </motion.section>
            ))}
          </section>
        </div>

        {showScroll && <SmoothScroll />}

        <div className="flex items-center justify-center p-4">
          <p className="text-[10px] px-2 text-black dark:text-white">
            {`Total projects count: ${categories.length}, some projects are hosted on vercel and some are pens on codepen`}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioData;
