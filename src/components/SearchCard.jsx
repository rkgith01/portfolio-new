import React from "react";
import Image from "next/image";
import { RiNewspaperLine } from "react-icons/ri";
const SearchCard = ({ post }) => {
  let baseImageUrl =
    "https://raw.githubusercontent.com/rkgith01/media/refs/heads/main/All%20Folders";

  return (
    <>
      <div
        key={post.slug}
        className="bg-yellow-400 dark:bg-slate-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center items-center justify-center "
      >
        <div className="aspect-[5/3] w-full md:w-1/4  relative">
          <Image
            src={baseImageUrl + post.image}
            alt={post.title}
            loading="lazy"
            // fill
            className="rounded-lg object-cover lg:mx-2 md:mx-2 w-auto h-auto"
            width={350}
            height={350}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between mx-2 px-6 relative">
          <h2 className="text-md font-bold text-black dark:text-white mt-4">
            {post.title}
          </h2>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2 mb-4">
            {post.bio}
          </p>
          <a
            target="_blank"
            aria-label={`Read ${post.title}`}
            href={`/posts/${post.slug}`}
            className="absolute bottom-1 right-1 text-black hover:text-amber-600 font-medium hover:dark:text-white transition-all"
          >
            {/* Read more */}
            <RiNewspaperLine size={25} />
          </a>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
{
  /* <Image
  // src={post.image}
  src={baseImageUrl + post.image}
  alt={post.title}
  width={500}
  height={300}
  className="rounded-lg object-cover lg:w-[25%] lg:h-[30%] md:w-[25%] md:h-[30%] mx-2 w-[100%] h-[100%]"
/> */
}
