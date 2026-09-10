import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-3 rounded-pill font-body uppercase tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-strong text-white border border-primary-strong hover:bg-primary hover:border-primary",
  outline:
    "border border-black text-ink hover:bg-black hover:text-white",
  ghost: "border border-transparent text-ink hover:border-black",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-eyebrow",
  lg: "px-10 py-5 text-lead",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className">)
);

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
