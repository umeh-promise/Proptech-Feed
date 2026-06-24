import { cn } from "../utils";
import { FieldError } from "react-hook-form";
import ValidationErrorField from "./validation-error-field";
import Fieldset from "./fieldset";
import Label from "./label";

interface TextareaProps extends Omit<
  React.ComponentProps<"textarea">,
  "className"
> {
  errors?: FieldError | undefined;
  id?: string;
  label?: string;
  variant?: "primary" | "secondary" | "tertiary";
  required?: boolean;
  className?: Partial<{ root: string; input: string }>;
}

function Textarea({
  className,
  id,
  errors,
  label,
  variant = "primary",
  required = false,
  ...props
}: TextareaProps) {
  return (
    <Fieldset className={className?.root}>
      <Label id={id} required={required}>
        {label}
      </Label>
      <textarea
        data-slot="textarea"
        className={cn(
          "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 focus-visible:ring-3 aria-invalid:ring-3 placeholder:text-muted-foreground field-sizing-content flex min-h-16 w-full rounded-lg border bg-transparent p-[1.6rem] text-base outline-none transition-colors placeholder:text-sm disabled:cursor-not-allowed md:text-sm",
          {
            "resize-none border border-dotted border-purple-900 p-[1.6rem] text-base leading-[2.4rem] text-dark-800 shadow-1 placeholder:text-base":
              variant === "secondary",
            "resize-none rounded-[0.8rem] border-transparent bg-dark-100 px-[1.6rem] py-[1.2rem] text-base font-normal leading-[2.1rem] tracking-[-0.011px] text-light-grey-100 placeholder:text-sm placeholder:text-grey-50":
              variant === "tertiary",
            "border-[0.18rem] border-red-100": !!errors,
          },

          className?.input,
        )}
        {...props}
      />
      <ValidationErrorField errors={errors} />
    </Fieldset>
  );
}

export { Textarea };
