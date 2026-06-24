import React from "react";
import { cn } from "../utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: string;
  id?: string;
  fluid?: boolean;
}

export default function Wrapper({
  children,
  className = "",
  id,
  fluid = true,
  as = "section",
}: WrapperProps) {
  return React.createElement(
    as,
    {
      className: cn(
        "max-w-default mx-auto w-full",
        {
          "w-full px-[2.4rem]": !fluid,
        },
        className,
      ),
      id,
    },
    children,
  );
}
