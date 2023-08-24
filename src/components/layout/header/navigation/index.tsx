import { useRouter } from "next/router";

import { ROUTE_LIST } from "../../../../configs/routes";
import { colors } from "../../../../theme/colors";

const Navigation = () => {
  const router = useRouter();

  const handleClickRouter = (href: string) => {
    router.push(href);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {ROUTE_LIST.map((route) => (
        <button
          key={route.href}
          style={{
            color:
              router.pathname === route.href ? colors.black : colors.darkGray,
            backgroundColor: colors.white,
            padding: "8px",
            fontSize: "18px",
            border: "none",
            borderBottom:
              router.pathname === route.href
                ? `2px solid ${colors.black}`
                : "none",
            fontWeight: 600,
            margin: "0 32px",
            cursor: "pointer",
          }}
          onClick={() => handleClickRouter(route.href)}
        >
          {route.title}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
