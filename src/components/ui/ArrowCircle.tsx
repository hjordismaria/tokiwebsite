type ArrowCircleProps = { className?: string };

/** Circled right arrow, stroked in the current text colour. */
export default function ArrowCircle({ className = "" }: ArrowCircleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <circle cx="24" cy="24" r="21" />
      <path d="M14 24h20M26 16l8 8-8 8" />
    </svg>
  );
}
