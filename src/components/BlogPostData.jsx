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
      <main className="container mx-auto py-6 flex flex-col lg:flex-row gap-8 px-4 max-w-7xl">
        {/* Main Article */}
        <article className="flex-1 max-w-full lg:max-w-[60%] mx-auto">
          <Markdown className="prose prose-lg dark:prose-invert max-w-none text-black dark:text-white">
            {post.content}
          </Markdown>

          {/* Reading time and back link */}
          <div className="flex justify-between items-center mt-10 px-2">
            <p className="text-gray-900 dark:text-orange-400 text-md font-medium">
              {readingTime} min read
            </p>
            <Link
              href="/blog"
              aria-label="Back to blog"
              className="flex items-center gap-1 text-black dark:text-orange-200 hover:font-semibold transition"
            >
              <RiArrowGoBackLine size={20} />
              <span>Back to blog</span>
            </Link>
          </div>

          {/* Additional bottom button */}
          <div className="mt-6">{bottomBtn}</div>

          <hr className="my-8 border-gray-300 dark:border-gray-700" />
        </article>

        {/* Sidebar with filtered posts */}
        <aside className="lg:w-[35%] w-full mx-auto lg:mt-[10rem] md:mt-[2rem] space-y-6">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="transform transition-transform hover:scale-95"
            >
              <PostCard
                post={post}
                readingTime={calculateReadingTime(post.content)}
              />
            </div>
          ))}

          {/* More posts link */}
          {posts.length >= 3 && (
            <div className="mt-8 flex justify-start">
              <Link
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-1/2 text-center bg-yellow-400 hover:bg-yellow-700  dark:bg-amber-500 hover:dark:bg-amber-600 text-black dark:text-white hover:text-white dark:hover:text-black rounded-lg py-3 font-semibold shadow-lg transition-colors duration-300"
                aria-label="Check out more blog posts"
              >
                Checkout more...
              </Link>
            </div>
          )}
        </aside>
      </main>

      <PostFooter />
      <SmoothScroll />
      <Footer />
    </>
  );
}
