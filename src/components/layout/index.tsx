import React from "react";

import { ROUTE_LIST } from "../../configs/routes";
import { colors } from "../../theme/colors";

import Header from "./header";
import Main from "./main";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <Main>{children}</Main>
    </main>
  );
};

export default Layout;
