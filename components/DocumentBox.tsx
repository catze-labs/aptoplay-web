import clsx from "clsx";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

export interface DocumentBoxProps extends React.ComponentProps<"div"> {}

const DocumentBox: React.FC<DocumentBoxProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx([
        "markdown-document bg-[rgba(255,255,255,0.1)] px-6 py-6",
        className,
      ])}
      {...props}
    >
      <Markdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            return !inline ? (
              <CodeBlock code={String(children)} />
            ) : (
              <code>{children}</code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {String(children)}
      </Markdown>
    </div>
  );
};

export default DocumentBox;
