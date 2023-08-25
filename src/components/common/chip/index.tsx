import { useState } from "react";

import { colors } from "@/theme/colors";

interface Props {
  value: string;
  checked: boolean;
  onClick: (value: string) => void;
}

const Chip = ({ value, checked, onClick }: Props) => {
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "inline-flex",
        alignItems: "cneter",
        justifyContent: "center",
        fontSize: "1rem",
        padding: "12px 20px",
        borderRadius: "24px",
        cursor: "pointer",
        color: checked ? "#fff" : colors.black,
        backgroundColor: checked ? "#ffcc00" : "#fff",
      }}
      onClick={() => onClick(value)}
    >
      <span>{value}</span>
    </div>
  );
};

export default Chip;
