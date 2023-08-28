import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function CodeBlock({ className, children }: Props) {
  return (
    <SyntaxHighlighter
      language={className?.replace("language-", "")}
      style={codeStyle}
      customStyle={{ padding: "24px", borderRadius: "12px" }}
    >
      {children as string}
    </SyntaxHighlighter>
  );
}
