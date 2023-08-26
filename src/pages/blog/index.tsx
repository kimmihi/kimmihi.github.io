import type { PostMatter } from "@/types/blog";

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import matter from "gray-matter";

import { getBlogPosts, getCategoryList } from "@/apis/blog";

import CategoryGrid from "@/components/blog/category-grid";
import GridContainer from "@/components/blog/grid-container";
import PostPreview from "@/components/blog/post-preview";

interface Props {
  posts: string[];
  categoryList: string[];
}

const Blog = ({ posts, categoryList }: Props) => {
  const [checkedCategory, setCheckedCategory] = useState<string | null>(null);
  const [postList, setPostList] = useState<PostMatter[]>([]);

  const handleClickCategoryChip = (value: string) => {
    console.log(value);
    if (checkedCategory === value) {
      setCheckedCategory(null);
      return;
    }

    setCheckedCategory(value);
  };

  useEffect(() => {
    const post_matters = posts.map((post) => {
      const data = matter(post).data;
      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    setPostList(post_matters);
  }, [posts]);

  return (
    <>
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "8px" }}>
          Search Post by Categories
        </h3>
        <CategoryGrid
          checkedCategory={checkedCategory}
          categoryList={categoryList}
          onClick={handleClickCategoryChip}
        />
      </div>
      <GridContainer>
        {postList.map((post) => (
          <PostPreview key={post.id} postMatter={post} />
        ))}
      </GridContainer>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    const posts = getBlogPosts();
    const categoryList = getCategoryList();

    return {
      props: { posts, categoryList },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}
