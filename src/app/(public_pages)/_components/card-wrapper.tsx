import { cn } from "@/src/utils";
import { ReactNode } from "react";

export default function CardWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex rounded-[1.2rem] border border-light-grey-100/[6%] bg-dark-100 p-[.8rem]",
        className,
      )}
    >
      {children}
    </article>
  );
}
