import type { PostMatter } from "@/types/blog";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import dayjs from "dayjs";
import matter from "gray-matter";

import { getPostIdList, getPostItem } from "@/apis/blog";

interface Props {
  matterPost: string;
}

const DetailPost = ({ matterPost }: Props) => {
  const [post, setPost] = useState<PostMatter | null>(null);

  useEffect(() => {
    const data = matter(matterPost).data;
    setPost({
      ...data,
      date: dayjs(data.ate).format("YYYY-MM-DD"),
    } as PostMatter);
  }, [matterPost]);
  return (
    <>
      <h1>{post?.title}</h1>
    </>
  );
};

export async function getStaticPaths() {
  const idList = getPostIdList();

  const paths = idList.map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const matterPost = getPostItem(params.id);

    return {
      props: { matterPost },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}

export default DetailPost;
