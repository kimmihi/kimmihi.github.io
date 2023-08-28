import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LiBlock({ children }: Props) {
  return (
    <li
      style={{
        display: "list-item",
        margin: "16px 0",
        fontSize: "clamp(1rem, 0.96rem + 10vw, 1.125rem)",
      }}
    >
      {children}
    </li>
  );
}
