// import React from "react";
// import Footer from "@/components/Footer";
// import getPostMetadata from "@/utils/getData";
// import BlogSearch from "@/components/BlogSearch";
// import BlogData from "@/components/BlogData";
// import PostFooter from "@/components/PostFooter";
// const BlogPage = async () => {
//   // Fetchd data using getPostMetadata on the server side
//   const posts = getPostMetadata("src/blogposts");

//   return (
//     <div className="">
//       {/* Pass posts as a prop to the SearchComponent */}
//       <BlogSearch posts={posts} />
//       <BlogData />
//       <PostFooter />
//       <Footer />
//     </div>
//   );
// };

// export default BlogPage;
import React from "react";
import getPostMetadata from "@/utils/getData";
import BlogSearch from "@/components/BlogSearch";
import BlogData from "@/components/BlogData";
import PostFooter from "@/components/PostFooter";
import Footer from "@/components/Footer";

const BlogPage = async () => {
  const posts = getPostMetadata("src/blogposts");

  return (
    <div>
      <BlogSearch posts={posts} />
      <BlogData posts={posts} />
      <PostFooter />
      <Footer />
    </div>
  );
};

export default BlogPage;
