import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const H2 = ({ children }: Props) => {
  return (
    <h1
      style={{
        margin: "1rem 0",
        fontWeight: 500,
        fontSize: "clamp(1.5rem, 1.29rem + 1.07vw, 2rem)",
      }}
    >
      {children}
    </h1>
  );
};

export default H2;
