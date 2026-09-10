import type { ComponentProps } from "react";

type InputProps = {
  label: string;
  name: string;
  as?: "input" | "textarea";
} & Omit<ComponentProps<"input"> & ComponentProps<"textarea">, "name" | "className">;

const fieldClasses =
  "w-full rounded-card border border-black bg-surface px-5 py-4 font-sans text-body text-ink transition-colors duration-200 placeholder:text-ink/40 hover:border-primary focus:border-primary";

export default function Input({ label, name, as = "input", ...rest }: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-eyebrow uppercase tracking-wide text-ink">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea name={name} rows={5} className={fieldClasses} {...rest} />
      ) : (
        <input name={name} className={fieldClasses} {...rest} />
      )}
    </label>
  );
}
