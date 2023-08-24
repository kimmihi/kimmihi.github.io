import { useRouter } from "next/router";

import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import { colors } from "../../../theme/colors";

import Navigation from "./navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header
      style={{
        padding: "2rem 4vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
        role="button"
      >
        MHK
      </h1>
      <Navigation />
      <IconButton>
        <GitHubIcon sx={{ fontSize: "32px", color: colors.black }} />
      </IconButton>
    </header>
  );
};

export default Header;
