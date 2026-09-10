import type { ReactNode } from "react";

type BlobProps = {
  shape?: "circle" | "blob" | "blob-alt";
  color?: "primary" | "accent";
  className?: string;
  children?: ReactNode;
};

const shapes = {
  circle: "rounded-full",
  blob: "rounded-blob",
  "blob-alt": "rounded-blob-alt",
};

const colors = {
  primary: "bg-primary",
  accent: "bg-accent",
};

/** Flat organic shape. Replaces the low-resolution blob screenshots from Figma. */
export default function Blob({
  shape = "blob",
  color = "accent",
  className = "",
  children,
}: BlobProps) {
  return (
    <div
      aria-hidden={children ? undefined : true}
      className={`flex aspect-square items-center justify-center ${shapes[shape]} ${colors[color]} ${className}`}
    >
      {children}
    </div>
  );
}
