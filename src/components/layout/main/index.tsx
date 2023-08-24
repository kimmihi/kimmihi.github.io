import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Main = ({ children }: Props) => {
  return <main style={{ margin: "0 10vw" }}>{children}</main>;
};

export default Main;
