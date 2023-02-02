import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useCallback, useState } from "react";
import Button from "./Button";

export interface CodeBlockProps {
  title?: string;
  code: string;
  onCopy?: () => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, code = " ", onCopy }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    onCopy?.();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  }, [code]);

  return (
    <div className="relative">
      <pre
        className={clsx([
          "block pb-2 px-4 overflow-x-auto",
          !title ? "pt-2" : "pt-10",
        ])}
      >
        {code}
      </pre>
      {title && (
        <p className="text-white absolute top-2 left-3 font-mono font-bold">
          {title}
        </p>
      )}
      <Button
        className="w-8 absolute top-0.5 right-0.5 rounded-full"
        onClick={handleClick}
        variant="icon"
        icon={
          <>
            {!copied && (
              <ClipboardDocumentIcon className="w-6 text-primary-100" />
            )}
            {copied && <CheckCircleIcon className="w-6 text-primary-100" />}
          </>
        }
      />
    </div>
  );
};

export default CodeBlock;
