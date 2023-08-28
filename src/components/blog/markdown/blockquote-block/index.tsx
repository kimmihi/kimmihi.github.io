import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BlockquoteBlock({ children }: Props) {
  return (
    <blockquote
      style={{
        padding: "16px",
        margin: "0 auto",
        borderRadius: "12px",
      }}
    >
      {children}
    </blockquote>
  );
}
