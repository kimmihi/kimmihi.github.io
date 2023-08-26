import type { PostMatter } from "@/types/blog";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import dayjs from "dayjs";
import matter from "gray-matter";

import { colors } from "@/theme/colors";
import { getCategoryList, getPostListByCategory } from "@/apis/blog";

import CategoryGrid from "@/components/blog/category-grid";
import GridContainer from "@/components/blog/grid-container";
import PostPreview from "@/components/blog/post-preview";

interface Props {
  category: string;
  matterPostList: string[];
  categoryList: string[];
}

const PostListByCategory = ({
  category,
  matterPostList,
  categoryList,
}: Props) => {
  const router = useRouter();
  const [postList, setPostList] = useState<PostMatter[]>([]);
  const [checkedCategory, setCheckedCategory] = useState<string | null>(
    category
  );

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

  console.log(postList);
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

export async function getStaticPaths() {
  const categoryList = getCategoryList();

  const paths = categoryList.map((category) => ({
    params: {
      category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const matterPostList = getPostListByCategory(params.category);
    const categoryList = getCategoryList();

    return {
      props: { category: params.category, matterPostList, categoryList },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}
export default PostListByCategory;
