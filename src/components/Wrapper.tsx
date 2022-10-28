import { ReactNode } from "react";
import clsx from "clsx";

interface WrapperProps {
  className?: string;
  title: string;
  children: ReactNode;
}

export default function Wrapper({ className, title, children }: WrapperProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 min-w-[500px] bg-secondary bg-opacity-90",
        className
      )}
    >
      <div className="mb-6 text-center border-b border-white">
        <h1 className="uppercase text-white text-3xl mb-6 font-montserrat">
          {title}
        </h1>
      </div>

      {children}

      <div className="text-center text-white text-sm mt-6">
        <p>This page is for single Fitter to meet and date each other!</p>
        <p>
          Type in your personal information and wait for the Fit.Love to begin!
        </p>
        <p>Thank you for using our site.</p>
      </div>
    </div>
  );
}
