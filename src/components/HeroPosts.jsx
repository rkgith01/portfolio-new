import getPostMetadata from "@/utils/getData";
import Posts from "./Posts";

const HeroPosts = () => {
  const posts = getPostMetadata("src/blogposts");

  return (
    <div className="flex flex-col items-center justify-center xl:w-[42%] lg:w-[42%] md:w-[62%] sm:w-[75%] w-full">
      <Posts posts={posts} />
    </div>
  );
};

export default HeroPosts;
