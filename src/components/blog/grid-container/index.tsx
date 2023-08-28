import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const PostGridContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        gap: "clamp(1.375rem, 1.2rem + 0.89vw, 2rem)",
        marginTop: "32px",
        marginInline: "auto",
        paddingInline: "clamp(0, 1.2rem + 0.89vw, 2rem)",
        gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
      }}
    >
      {children}
    </div>
  );
};

export default PostGridContainer;
