import type { ReactNode } from "react";

import { colors } from "@/theme/colors";

interface Props {
  children: ReactNode;
}

const H1 = ({ children }: Props) => {
  return (
    <h1
      style={{
        color: colors.darkGray,
        margin: "1rem 0",
        fontWeight: 600,
        fontSize: "clamp(1.75rem, 1.39rem + 1.79vw, 2.6rem)",
      }}
    >
      {children}
    </h1>
  );
};

export default H1;
