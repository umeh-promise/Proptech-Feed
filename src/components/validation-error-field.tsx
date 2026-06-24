import { FieldError } from "react-hook-form";
import { cn } from "../utils";

export default function ValidationErrorField({
  errors,
  className,
}: {
  errors: FieldError | undefined;
  className?: string;
}) {
  return (
    !!errors && (
      <span
        className={cn(
          "mt-[-.2rem] inline-flex w-full items-start gap-[.7rem] text-xs font-normal leading-[1.6rem] text-red-100 [&>svg]:mt-[.16rem]",
          className,
        )}
      >
        {errors.message}
      </span>
    )
  );
}
