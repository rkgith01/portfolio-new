// /* eslint-disable @next/next/no-img-element */
// import Link from "next/link";
// import Image from "next/image";

// const BlogCard = (props) => {
//   const { post, readingTime } = props;
//   let baseImageUrl =
//     "https://raw.githubusercontent.com/rkgith01/media/refs/heads/main/All%20Folders";

//   //   const postInfo = getPostMetadata("blogposts");
//   // console.log(baseImageUrl + post.image);
//   return (
//     <>
//       <div className="flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center items-start justify-center bg-yellow-600 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 mx-4 my-2 p-2 md:border-r-2 lg:border-r-2 border-b-2 dark:border-slate-600 border-yellow-800 ">
//         <Link
//           href={`/posts/${post.slug}`}
//           aria-label={`Read ${post.title}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="md:w-1/2 cursor-pointer"
//         >
//           <Image
//             width={500}
//             height={500}
//             loading="lazy"
//             className="object-cover rounded-lg w-full lg:h-50 md:h-[40%] "
//             // src={post.image}
//             src={baseImageUrl + post.image}
//             alt="post Image"
//           />
//         </Link>
//         <div className="p-4 md:w-1/2 flex flex-col justify-between">
//           <p
//             // href={`/posts/${post.slug}`}
//             // target="_blank"
//             className="text-lg font-semibold text-black dark:text-white cursor-pointer"
//           >
//             {post.title}
//           </p>
//           <span className="text-sm dark:text-gray-300 text-black mt-1">
//             On: {post.date}
//           </span>
//           <span className="text-sm dark:text-orange-300 text-black mt-1">
//             {readingTime} min read
//           </span>

//           <div className="md:w-[70%]">
//             <Link
//               href={`/posts/${post.slug}`}
//               aria-label={`Read ${post.title}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span className="hover:bg-yellow-700 bg-yellow-500 text-black hover:text-gray-100 dark:text-amber-200 dark:bg-slate-500 dark:hover:bg-gray-600  font-bold py-2 px-4 rounded-full mt-4 absolute bottom-2 right-2 ">
//                 View Post
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogCard;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post, readingTime }) => {
  const baseImageUrl =
    "https://raw.githubusercontent.com/rkgith01/media/refs/heads/main/All%20Folders";

  const fullImageUrl = `${baseImageUrl}${post.image}`;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl shadow-md bg-yellow-600 dark:bg-gray-800 transition-transform hover:scale-[1.02] border border-yellow-700 dark:border-gray-700">
      {/* Image Section */}
      <Link
        href={`/posts/${post.slug}`}
        aria-label={`Open full post: ${post.title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:w-1/2 cursor-pointer"
        // className="relative w-full md:w-1/2 h-60 md:h-48 lg:h-64 overflow-hidden rounded-lg"
      >
        <Image
          src={fullImageUrl}
          alt={`Cover image for ${post.title}`}
          // fill
          priority
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </Link>

      {/* Text Section */}
      <div className="flex flex-col justify-between w-full md:w-1/2 gap-2 text-black dark:text-white">
        <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
        <p className="text-sm text-black dark:text-gray-300">On: {post.date}</p>
        <p className="text-sm text-black dark:text-orange-300">
          {readingTime} min read
        </p>

        <div className="mt-2">
          <Link
            href={`/posts/${post.slug}`}
            aria-label={`Read more about ${post.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-block text-sm font-semibold bg-yellow-100 dark:bg-slate-700 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-700 hover:text-white dark:hover:bg-gray-600 transition-all px-4 py-2 rounded-full">
              View Post
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
