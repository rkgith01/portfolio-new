// "use client";

import Markdown from "markdown-to-jsx";
import React from "react";
import PostCard from "@/components/PostCard";
import { bottomBtn, calculateReadingTime } from "@/../contants/constant";
import PostFooter from "@/components/PostFooter";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";

export default function BlogPostData({ slug, post, posts }) {
  const readingTime = calculateReadingTime(post.content);
  const filteredPosts = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <main className="container mx-auto py-6 flex flex-col lg:flex-row gap-2">
        <article className="w-full mx-auto flex-2">
          <Markdown className="prose mx-auto px-4 py-8 space-y-6 text-black dark:text-white">
            {post.content}
          </Markdown>
          <div className="flex justify-between items-center mt-8 px-2">
            <p className="text-gray-900 dark:text-orange-400 text-md">
              {readingTime} min read
            </p>
            <a
              href="/blog"
              prefetch={true}
              rel="noopener noreferrer"
              // target="_blank"
              className="text-black dark:text-orange-200 flex items-center gap-1 hover:font-bold"
            >
              <RiArrowGoBackLine className="hover:font-bold" />
              back to blog
            </a>
          </div>
          <div>{bottomBtn}</div>
          <hr className="my-4" />
        </article>

        <div className="lg:mt-[10rem] md:mt-[2rem] lg:w-[40%] w-full mx-2">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="my-2 hover:scale-95 transition-all">
              <PostCard post={post} readingTime={readingTime} />
            </div>
          ))}
          <div className="mt-4">
            {posts.length >= 3 && (
              <Link
                prefetch={true}
                href="/blog"
                target="_blank"
                // className="text-center"
                className="bg-yellow-400  hover:bg-yellow-700  text-center dark:bg-amber-500 hover:dark:bg-amber-600 text-black hover:text-white dark:text-white dark:hover:text-black mt-5 p-2 rounded-lg transition-colors duration-300 shadow-lg box-border "
              >
                <span>checkout more...</span>
              </Link>
            )}
          </div>
        </div>
      </main>

      <PostFooter />
      <SmoothScroll />
      <Footer />
    </>
  );
}
