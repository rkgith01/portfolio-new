import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getData";
import BlogPostData from "@/components/BlogPostData";

function getPostContent(slug) {
  const file = `src/blogposts/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const { data, content: markdownContent } = matter(content);

  return {
    data,
    content: markdownContent,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  // plain object
  const post = getPostContent(slug);
  // has been already serializable
  const posts = getPostMetadata("src/blogposts");

  return <BlogPostData slug={slug} post={post} posts={posts} />;
}

// export async function generateStaticParams() {
//   const posts = getPostMetadata("src/blogposts");
//   return posts.map((post) => ({ slug: post.slug }));
// }

// export default function Page({ params }) {
//   const post = getPostContent(params.slug);
//   const posts = getPostMetadata("src/blogposts");
//   return <BlogPostData slug={params.slug} post={post} posts={posts} />;
// }
