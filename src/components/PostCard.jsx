import Link from "next/link";

const PostCard = ({ post, readingTime }) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read post: ${post.title}`}
    >
      <article
        className="px-2 py-2 rounded-lg flex flex-col items-start border-b-2 border-r-2 border-black dark:border-slate-600 hover:border-yellow-400 dark:hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        tabIndex={0}
      >
        <h2 className="text-black dark:text-amber-500 font-semibold group-hover:font-extrabold">
          {post.title}
        </h2>
        <p className="text-clip line-clamp-1 text-sm text-gray-700 dark:text-gray-300">
          {post.bio}
        </p>
        <p className="text-orange-700 hero-readTime dark:text-orange-200 text-sm">
          {readingTime} min read
        </p>
      </article>
    </Link>
  );
};

export default PostCard;
