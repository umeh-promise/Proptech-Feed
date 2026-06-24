import { ComponentProps } from "react";
import { cn } from "../utils";

interface FieldsetProps extends ComponentProps<"fieldset"> {
  children: React.ReactNode;
}

export default function Fieldset({
  children,
  className,
  ...props
}: FieldsetProps) {
  return (
    <fieldset
      className={cn("relative flex w-full flex-col gap-[.8rem]", className)}
      {...props}
    >
      {children}
    </fieldset>
  );
}
