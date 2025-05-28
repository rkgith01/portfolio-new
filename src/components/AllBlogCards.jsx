"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import { calculateReadingTime } from "@/../contants/constant";
// import ScrollInView from "./ScrollInView";

const AllBlogCards = ({ posts }) => {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];

  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <>
      {/* <ScrollInView /> */}

      {/* Tag Selection */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap justify-center items-center gap-3 p-4 my-4 rounded-xl bg-yellow-600 dark:bg-gray-800 shadow-md"
      >
        {allTags.map((tag, index) => (
          <motion.button
            key={index}
            onClick={() => handleTagClick(tag)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className={`text-sm px-4 py-2 font-medium rounded-full transition-all
              ${
                activeTag === tag
                  ? "bg-blue-500 dark:bg-amber-500 text-white"
                  : "bg-amber-400 dark:bg-stone-700 text-black dark:text-amber-400 hover:bg-yellow-500 dark:hover:bg-gray-600"
              }`}
          >
            #{tag}
          </motion.button>
        ))}
      </motion.div>

      {/* Header */}
      <motion.div
        key={activeTag || "all-posts"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-center text-black dark:text-amber-400 mb-6 border-b pb-2 border-black dark:border-amber-500 capitalize">
          {activeTag
            ? `Posts in #${activeTag} (${filteredPosts.length})`
            : `All Blog Posts (${posts.length})`}
        </h2>
      </motion.div>

      {/* Cards Area */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-6xl mx-auto px-4 mb-12"
      >
        <AnimatePresence>
          {filteredPosts.map((post, index) => {
            const readingTime = calculateReadingTime(post.content);
            return (
              <motion.div
                key={post.slug || index}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1], // smoother, springy
                }}
              >
                <BlogCard post={post} readingTime={readingTime} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default AllBlogCards;
