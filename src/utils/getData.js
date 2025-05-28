import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    // Ensure tags is always an array
    const tags = Array.isArray(matterResult.data.tag)
      ? matterResult.data.tag
      : [matterResult.data.tag];

    return {
      title: matterResult.data.title,
      bio: matterResult.data.description,
      tags: tags,
      image: matterResult.data.image,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      content: matterResult.content,
    };
  });

  return posts;
}
