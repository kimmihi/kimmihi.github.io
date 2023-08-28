import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const H3 = ({ children }: Props) => {
  return (
    <h1
      style={{
        margin: "1rem 0",
        fontWeight: 500,
        fontSize: "clamp(1.25rem, 1.25rem + 0.5vw, 1.75rem)",
      }}
    >
      {children}
    </h1>
  );
};

export default H3;
