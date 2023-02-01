import clsx from "clsx";
import React, { useCallback, useState } from "react";
import Highlight from "react-highlight";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

export interface CodeRunnerProps {
  title: string;
  code: string;
  language?: string;

  runnable?: boolean;
  running?: boolean;
  message?: string;
  error?: string;

  onRun?: () => void;
  onCopy?: () => void;
}

const CodeRunner: React.FC<CodeRunnerProps> = ({
  title,
  code = " ",
  language = "javascript",
  runnable = true,
  running,
  message = " ",
  error,
  onRun,
  onCopy,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClickCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    onCopy?.();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  }, [code]);

  return (
    <article className="px-4 pt-2 pb-4 bg-black">
      <div className="flex justify-between relative items-center mb-2">
        <h2 className="text-base font-medium text-primary-200">{title}</h2>

        <Button
          onClick={handleClickCopy}
          className="w-8 rounded-full"
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

      <Highlight className={clsx([language, "rounded-none bg-gray-dark"])}>
        {code}
      </Highlight>

      {runnable && (
        <div className="flex w-full mt-4 items-center">
          <div className="grow flex gap-2 items-center">
            {error && <ExclamationCircleIcon className="w-6 text-yellow-400" />}
            <p className="text-sm">
              {running ? (
                <span>Running...</span>
              ) : error ? (
                <span className="text-yellow-400">{error}</span>
              ) : (
                <span className="text-primary-200">{message}</span>
              )}
            </p>
          </div>

          <div className="">
            <Button
              as="button"
              className={clsx([running && "animate-pulse"])}
              disabled={running}
              onClick={onRun}
            >
              {running ? "Running..." : "Run"}
            </Button>
          </div>
        </div>
      )}
    </article>
  );
};

export default CodeRunner;
