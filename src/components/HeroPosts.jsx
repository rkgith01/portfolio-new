import getPostMetadata from "@/utils/getData";
import Posts from "./Posts";

const HeroPosts = () => {
  const posts = getPostMetadata("src/blogposts");

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-2xl">
      <Posts posts={posts} />
    </section>
  );
};

export default HeroPosts;
