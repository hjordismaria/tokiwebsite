import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "dark";
type Size = "md" | "lg";
type Shape = "pill" | "rounded";

const base =
  "inline-flex items-center justify-center gap-3 font-body uppercase tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "border border-primary-strong bg-primary-strong text-ink hover:border-primary hover:bg-primary",
  outline: "border border-black text-ink hover:bg-black hover:text-white",
  ghost: "border border-transparent text-ink hover:border-black",
  dark: "border border-ink bg-ink text-white hover:bg-black",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-eyebrow",
  lg: "px-10 py-5 text-lead",
};

const shapes: Record<Shape, string> = {
  pill: "rounded-pill",
  rounded: "rounded-card",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className">)
);

export default function Button({
  children,
  variant = "primary",
  size = "md",
  shape = "pill",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${className}`;

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
