import { calculateReadingTime } from "@/../contants/constant";
import Link from "next/link";

const FrontCard = ({ postInfo, postToShow }) => {
  const postsToDisplay = postInfo.slice(0, postToShow);

  return (
    <div className="space-y-6 ">
      {postsToDisplay.map((post, index) => {
        const readingTime = calculateReadingTime(post.content);
        return (
          <div
            key={index}
            className="bg-yellow-600 dark:bg-[#1e1e1e] rounded-xl shadow border border-black dark:border-gray-700 transition hover:shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {post.title}
            </h3>
            {/* {console.log(post)} */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
              {post.bio}
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-black dark:text-gray-400">
              <span>📅{post.date}</span>
              <span>⏲️{readingTime} min read</span>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-black dark:text-gray-400">
              <span className="cursor-default text-xs lg:text-sm hover:dark:bg-slate-500 text-black dark:text-amber-500 dark:bg-stone-600 bg-amber-500 p-2 rounded-lg hover:bg-yellow-400 transition-all">
                {post.tags[0]}
              </span>
              <Link
                href={`/posts/${post.slug}`}
                aria-label={`Read ${post.title}`}
                prefetch
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-700 dark:bg-gray-500 p-2 rounded-lg text-gray-200 hover:text-yellow-200 dark:text-yellow-400 dark:hover:text-yellow-300 font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FrontCard;
