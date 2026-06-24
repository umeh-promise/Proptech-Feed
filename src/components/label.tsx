import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils";

interface LabelProps extends ComponentProps<"label"> {
  children?: ReactNode;
  id?: string;
  required?: boolean;
}

export default function Label({
  children: title,
  id,
  className,
  required,
  ...props
}: LabelProps) {
  return (
    title && (
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-normal leading-[1.6rem] tracking-[-0.05px] text-dark-100",
          className,
        )}
        {...props}
      >
        {title} {required && <span className="text-red-100">*</span>}
      </label>
    )
  );
}
