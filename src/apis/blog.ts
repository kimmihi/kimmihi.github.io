import fs from "fs";
import matter from "gray-matter";

export const getPostList = () => {
  const files = fs.readdirSync("public/posts/");
  const postList = files.map((filename) => {
    return fs.readFileSync(`public/posts/${filename}`, "utf-8");
  });

  return postList;
};

export const getPostListByCategory = (category: string) => {
  const postList = getPostList();
  return postList.filter((post) => {
    const { data } = matter(post);
    return data.category === category;
  });
};
export const getLatestPostList = (count: number) => {
  const sortedPostListByDate = getPostList();
  const latestPostList = sortedPostListByDate.slice(0, count);

  return latestPostList;
};

export const getCategoryList = () => {
  const postList = getPostList();

  const categoryList = postList
    .map((post) => {
      const {
        data: { category },
      } = matter(post);
      return category;
    })
    .sort((a, b) => a - b);

  return Array.from(new Set(categoryList)).sort((a, b) => a - b);
};
