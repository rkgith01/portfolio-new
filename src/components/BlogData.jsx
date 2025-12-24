// working with framer motion
"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import AllBlogCards from "./AllBlogCards";
import FrontCard from "./FrontCard";
import SmoothScroll from "./SmoothScroll";
import { Button } from "@heroui/react";
import { RiLayoutGridFill, RiListUnordered } from "react-icons/ri";

const BlogData = ({ posts }) => {
  const [isListView, setIsListView] = useState(false);
  const postNumber = 20;

  const handleToggleView = () => setIsListView((prev) => !prev);

  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between overflow-hidden w-full mx-auto px-4">
          <h2 className="text-center text-2xl w-full font-semibold text-gray-800 dark:text-gray-100 border rounded-lg mx-4 py-2 dark:border-gray-600 border-black">
            {isListView
              ? `All Posts (${posts.length})`
              : "You can Select the Tags to View Posts"}
          </h2>
          <Button
            variant="ghost"
            aria-label="Toggle View"
            onPress={handleToggleView}
            className="flex items-center gap-2 px-3 py-2 bg-yellow-400 hover:bg-yellow-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-lg"
          >
            {isListView ? (
              <>
                <RiLayoutGridFill size={25} />{" "}
              </>
            ) : (
              <>
                <RiListUnordered size={25} />{" "}
              </>
            )}
          </Button>
        </div>

        {/* Animate View Switch */}
        <AnimatePresence>
          {isListView ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full max-w-7xl px-4 py-6 space-y-8"
            >
              <FrontCard postInfo={posts} postToShow={postNumber} />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="container px-4 py-4 mx-auto"
            >
              <AllBlogCards posts={posts} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Post Count */}
        <div className="text-center text-xs py-6 my-2">
          <p className="text-black dark:text-amber-500">
            There are total of {posts.length} posts by Raj Kapadia
          </p>
        </div>
      </div>

      <SmoothScroll />
    </section>
  );
};
export default BlogData;

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState } from "react";
// import AllBlogCards from "./AllBlogCards";
// import FrontCard from "./FrontCard";
// import SmoothScroll from "./SmoothScroll";
// import { Button } from "@heroui/react";
// import { RiLayoutGridFill, RiListUnordered } from "react-icons/ri";

// const BlogData = ({ posts }) => {
//   const [isListView, setIsListView] = useState(false);
//   const postNumber = 20;

//   const handleToggleView = () => setIsListView((prev) => !prev);

//   return (
//     <section className="w-full flex flex-col items-center justify-center px-4 py-6 max-w-7xl mx-auto">
//       {/* Header with toggle */}
//       <div className="flex items-center justify-between w-full mb-6 gap-4">
//         <h2
//           className="flex-1 text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-gray-100 border rounded-lg py-3 dark:border-gray-600 border-black bg-yellow-100 dark:bg-gray-800"
//           aria-live="polite"
//         >
//           {isListView
//             ? `All Posts (${posts.length})`
//             : "You can Select the Tags to View Posts"}
//         </h2>

//         <Button
//           variant="ghost"
//           aria-label={`Switch to ${isListView ? "grid" : "list"} view`}
//           onPress={handleToggleView}
//           className="flex items-center gap-2 px-3 py-2 bg-yellow-400 hover:bg-yellow-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-lg"
//         >
//           {isListView ? (
//             <>
//               <RiLayoutGridFill size={24} />
//               <span className="hidden sm:inline">Grid View</span>
//             </>
//           ) : (
//             <>
//               <RiListUnordered size={24} />
//               <span className="hidden sm:inline">List View</span>
//             </>
//           )}
//         </Button>
//       </div>

//       {/* Animate layout switch */}
//       <AnimatePresence mode="wait">
//         {isListView ? (
//           <motion.div
//             key="list"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="w-full space-y-8"
//           >
//             <FrontCard postInfo={posts} postToShow={postNumber} />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="grid"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="w-full"
//           >
//             <AllBlogCards posts={posts} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Footer Info */}
//       <div className="text-center mt-10 text-sm text-black dark:text-amber-500">
//         Total posts by <strong>Raj Kapadia</strong>: {posts.length}
//       </div>

//       {/* SmoothScroll (optional UX polish) */}
//       <SmoothScroll />
//     </section>
//   );
// };

// export default BlogData;
