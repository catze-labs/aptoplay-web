import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { uuid } from "uuidv4";

export interface TextInputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
}

const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const uniqueId = uuid();

    return (
      <div className="w-full relative">
        {props?.error && (
          <ExclamationCircleIcon
            className={clsx([
              "w-6 text-yellow-400 absolute top-1/2 -translate-y-1/2 right-4",
              props?.label && "pt-6",
            ])}
          />
        )}
        {props?.label && (
          <div className="flex justify-between pb-2">
            <label htmlFor={uniqueId} className="font-thin text-white text-xs">
              {props.label}
            </label>
            {props?.error && (
              <span className={clsx(["text-xs text-yellow-400"])}>
                {props.error}
              </span>
            )}
          </div>
        )}
        <input
          id={props?.id || uniqueId}
          className={clsx([
            "border border-gray bg-transparent px-5 py-2 text-sm font-regular outline-none placeholder:text-gray text-white focus:border-primary-100 w-full",
            props?.error && "border-yellow-400 focus:border-yellow-400",
          ])}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
