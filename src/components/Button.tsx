import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

import { LoaderIcon } from "@icons";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export default function Button({
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={clsx(
        "bg-primary hover:bg-primary-dark hover:cursor-pointer transition-all font-montserrat font-base px-3 py-2 rounded uppercase text-white flex justify-center items-center disabled:bg-primary-light disabled:hover:bg-primary-light disabled:hover:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {loading ? <LoaderIcon className="animate-spin" /> : children}
    </button>
  );
}
