import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

function LinkButton({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: LinkButtonProps) {
  const buttonClasses = clsx(
    "rounded-md px-4 py-2 text-white focus:outline-none",
    {
      "bg-blue-500 hover:bg-blue-600": variant === "primary",
      "bg-gray-500 hover:bg-gray-600": variant === "secondary",
      "bg-red-500 hover:bg-red-600": variant === "danger",
      "text-sm": size === "small",
      "text-lg": size === "large",
      "text-base": size === "medium",
    },
  );

  return (
    <Link className={buttonClasses} {...props}>
      {children}
    </Link>
  );
}

export default LinkButton;
