import React from "react";
import { cn } from "../utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "tertiary"
  | "outline"
  | "ghost";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "small" | "medium";
}

const Button = ({
  children,
  type = "button",
  size = "medium",
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-white hover:bg-opacity-75 disabled:bg-grey-100 hover:scale-[1.02]",
    secondary: "bg-grey-700  text-white",
    destructive: "bg-red-100 text-white disabled:bg-grey-100",
    tertiary:
      "bg-gradient-to-br from-green-500 to-green-600 to-100% hover:from-green-600 hover:to-green-500 ",
    ghost: "bg-transparent rounded-none border-b ghost-button ",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:to-100% hover:text-white ",
  };

  const sizes = {
    small: "py-[0.8rem] leading-[2.1rem] text-sm px-[1.94rem] ",
    medium: "py-[1.2rem] leading-[2rem] text-base px-[2.8rem] ",
  };

  return (
    <button
      type={type}
      className={cn(
        "flex items-center justify-center gap-[1rem] rounded-[10rem] text-center font-medium tracking-[1%] text-white transition-all duration-300",
        sizes[size as keyof typeof sizes],
        variants[variant as keyof typeof variants],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
