import { useState } from "react";

import { colors } from "@/theme/colors";

interface Props {
  size?: "small" | "mid";
  value: string;
  checked: boolean;
  onClick?: (value: string) => void;
}

const Chip = ({ size = "mid", value, checked, onClick }: Props) => {
  return (
    <div
      style={{
        minWidth: "3rem",
        display: "inline-flex",
        alignItems: "cneter",
        justifyContent: "center",
        fontSize: size === "mid" ? "1rem" : "0.8125rem",
        padding: size === "mid" ? "12px 20px" : "8px 16px",
        borderRadius: "24px",
        cursor: "pointer",
        color: checked ? "#fff" : colors.black,
        backgroundColor: checked ? colors.yellow : "#fff",
      }}
      onClick={() => (onClick ? onClick(value) : null)}
    >
      <span>{value}</span>
    </div>
  );
};

export default Chip;
