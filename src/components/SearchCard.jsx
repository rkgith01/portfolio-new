import React from "react";
import Image from "next/image";
import { RiNewspaperLine } from "react-icons/ri";

const SearchCard = ({ post }) => {
  const baseImageUrl =
    "https://raw.githubusercontent.com/rkgith01/media/refs/heads/main/All%20Folders";
  const fullImageUrl = baseImageUrl + post.image;
  return (
    <article
      key={post.slug}
      className="flex flex-col md:flex-row items-center md:items-center gap-4 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-yellow-400 dark:bg-slate-700"
      aria-label={`Blog preview card for ${post.title}`}
    >
      <div className="relative w-full md:w-1/3 aspect-[5/3] overflow-hidden rounded-lg">
        <Image
          src={fullImageUrl}
          alt={post.title}
          loading="lazy"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
      </div>

      <div className="flex flex-col justify-between w-full relative px-1 md:px-2">
        <h2 className="text-lg font-bold text-black dark:text-white mb-1">
          {post.title}
        </h2>
        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-4 text-clip line-clamp-2 ">
          {post.bio}
        </p>
        <a
          href={`/posts/${post.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read full blog post: ${post.title}`}
          className="absolute bottom-2 right-2 text-black dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          <RiNewspaperLine size={24} />
        </a>
      </div>
    </article>
  );
};

export default SearchCard;
