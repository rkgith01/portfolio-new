"use client";
import React, { useState } from "react";
import PostCard from "./PostCard";
import { calculateReadingTime } from "@/../contants/constant";
import { Button } from "@heroui/react";
import BackSideCard from "./BackSideCard";
import {
  RiExchangeLine,
  RiExchangeFill,
  RiArrowRightLine,
} from "react-icons/ri";
// import { useRouter } from "next/navigation";

const Posts = ({ posts }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const postToShow = Math.min(posts.length, 2);
  // const router = useRouter();

  const handleClick = () => {
    // router.push("/blog");
    window.open("/blog", "_blank", "noopener noreferrer");
  };

  return (
    <div className="w-full text-gray-100 px-3">
      {/* Flip Toggle Button */}
      <div className="justify-center m-1">
        <Button
          className="bg-yellow-600 text-black rounded-lg dark:bg-gray-700 dark:text-white hover:bg-yellow-700 dark:hover:bg-gray-500"
          onPress={() => setIsFlipped(!isFlipped)}
          isIconOnly
          type="button"
          aria-label="Flip Card"
        >
          {isFlipped ? (
            <RiExchangeLine size={28} />
          ) : (
            <RiExchangeFill size={28} />
          )}
        </Button>
      </div>

      <div className="relative w-full h-full min-h-72 [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-transparent space-y-4">
            {posts.slice(0, postToShow).map((post, i) => (
              <div
                key={i}
                className="flex gap-2 flex-col hover:scale-105 transition-transform duration-300"
              >
                <PostCard
                  post={post}
                  readingTime={calculateReadingTime(post.content)}
                />
              </div>
            ))}
            {posts.length >= postToShow && (
              <div className="flex items-center justify-center w-full mt-4">
                <Button
                  type="button"
                  variant="bordered"
                  aria-label="All Posts"
                  onPress={handleClick}
                  endContent={<RiArrowRightLine size={20} />}
                  className="hover:animate-appearance-in w-[40%] bg-yellow-500 hover:bg-yellow-700 hover:text-amber-400 dark:bg-[#0E0E0E] dark:hover:bg-[#3c3c3c] font-light hover:font-semibold rounded-full text-black dark:text-yellow-200 dark:hover:text-yellow-300"
                >
                  All posts
                </Button>
              </div>
            )}
          </div>

          {/* Back side */}
          <BackSideCard />
        </div>
      </div>
    </div>
  );
};

export default Posts;
