import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className,
  ...props
}: InputProps) {
  return (
    <div className={clsx("w-full flex items-center", className)}>
      {label ? (
        <label className="w-1/3 text-white" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className="w-2/3 rounded py-2 px-3 outline-none"
        id={id}
        {...props}
      />
    </div>
  );
}
