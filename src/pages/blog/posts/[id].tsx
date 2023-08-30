import type { PostMatter } from "@/types/blog";

import { useState, useEffect } from "react";

import dayjs from "dayjs";
import matter from "gray-matter";
import gfm from "remark-gfm";
import slug from "remark-slug";
import ReactMarkdown from "react-markdown";

import { getPostIdList, getPostItem } from "@/apis/blog";

import H1 from "@/components/blog/markdown/header/h1";
import H2 from "@/components/blog/markdown/header/h2";
import H3 from "@/components/blog/markdown/header/h3";
import Img from "@/components/blog/markdown/img";
import LiBlock from "@/components/blog/markdown/li-block";
import CodeBlock from "@/components/blog/markdown/code-block";
import Paragraph from "@/components/blog/markdown/paragraph";
import BlockquoteBlock from "@/components/blog/markdown/blockquote-block";

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
    <article style={{ margin: "0 5vw", padding: "5vw 0" }}>
      <ReactMarkdown
        remarkPlugins={[gfm, slug]}
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          img: Img,
          li: LiBlock,
          p: Paragraph,
          code: CodeBlock,
          blockquote: BlockquoteBlock,
        }}
      >
        {matter(matterPost).content}
      </ReactMarkdown>
    </article>
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
