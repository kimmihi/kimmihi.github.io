import fs from "fs";
import matter from "gray-matter";

export const getBlogPosts = () => {
  const files = fs.readdirSync("public/posts/");
  const posts = files.map((filename) => {
    return fs.readFileSync(`public/posts/${filename}`, "utf-8");
  });

  //   const sorted_by_date_posts = posts.sort((a, b) => {
  //     const {
  //       data: { date: a_date },
  //     } = matter(a);
  //     const {
  //       data: { date: b_date },
  //     } = matter(b);

  //     const a_time = new Date(a_date).getTime();
  //     const b_time = new Date(b_date).getTime();

  //     return b_time - a_time;
  //   });

  return posts;
};

export const getLatestPosts = (count: number) => {
  const sorted_by_date_posts = getBlogPosts();
  const latest_posts = sorted_by_date_posts.slice(0, count);

  return latest_posts;
};

export const getCategoryList = () => {
  const posts = getBlogPosts();

  const categoryList = posts
    .map((post) => {
      const {
        data: { category },
      } = matter(post);
      return category;
    })
    .sort((a, b) => a - b);

  return Array.from(new Set(categoryList)).sort((a, b) => a - b);
};
