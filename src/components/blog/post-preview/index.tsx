import type { PostMatter } from "@/types/blog";

import Link from "next/link";
import { colors } from "@/theme/colors";

import Chip from "@/components/common/chip";

interface Props {
  postMatter: PostMatter;
}

const PostPreview = ({ postMatter }: Props) => {
  return (
    <Link
      href={`/blog/posts/${postMatter.id}`}
      style={{
        width: "100%",
        maxWidth: "37rem",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          minHeight: "24rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
          borderRadius: "16px",
          padding: "1.25rem",
          backgroundColor: "#fff",
          border: "1px solid #e6e6e6",
          cursor: "pointer",
        }}
      >
        <div>
          <Chip size="small" value={postMatter.category} checked />
          <h1 style={{ fontSize: "1.5rem", fontWeight: 500, marginTop: "8px" }}>
            {postMatter.title}
          </h1>
        </div>
        <div style={{ margin: "32px 0" }}>
          <p
            style={{
              color: colors.gray,
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "clamp(1.25rem, 1rem + 1.5vw, 1.8rem)",
              fontSize: "clamp(0.92rem, 1.5vw, 1rem)",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
            }}
          >
            {postMatter.summary}
          </p>
        </div>
        <p style={{ color: colors.darkGray }}>{postMatter.date}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
