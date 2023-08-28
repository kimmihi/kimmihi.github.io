import type { ReactNode } from "react";

import { colors } from "@/theme/colors";

interface Props {
  children: ReactNode;
}

export default function Paragraph({ children }: Props) {
  return (
    <p
      style={{
        display: "block",
        lineHeight: "2rem",
        color: colors.darkGray,
        fontSize: "clamp(1rem, 0.96rem + 10vw, 1.125rem)",
        marginBottom: "2rem",
      }}
    >
      {children}
    </p>
  );
}
