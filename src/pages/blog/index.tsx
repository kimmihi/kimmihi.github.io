import type { PostMatter } from "@/types/blog";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import dayjs from "dayjs";
import matter from "gray-matter";

import { colors } from "@/theme/colors";
import { getPostList, getCategoryList } from "@/apis/blog";

import CategoryGrid from "@/components/blog/category-grid";
import GridContainer from "@/components/blog/grid-container";
import PostPreview from "@/components/blog/post-preview";

interface Props {
  matterPostList: string[];
  categoryList: string[];
}

const Blog = ({ matterPostList, categoryList }: Props) => {
  const router = useRouter();
  const [checkedCategory, setCheckedCategory] = useState<string | null>(null);
  const [postList, setPostList] = useState<PostMatter[]>([]);

  const handleClickCategoryChip = (value: string) => {
    if (checkedCategory === value) {
      setCheckedCategory(null);
      router.push("/blog");
      return;
    }

    setCheckedCategory(value);
    router.push(`/blog/${value}`);
  };

  useEffect(() => {
    const post_matters = matterPostList.map((post) => {
      const data = matter(post).data;
      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    setPostList(post_matters);
  }, [matterPostList]);

  return (
    <>
      <div>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            marginBottom: "8px",
            color: colors.darkGray,
          }}
        >
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
    const matterPostList = getPostList();
    const categoryList = getCategoryList();

    return {
      props: { matterPostList, categoryList },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}
