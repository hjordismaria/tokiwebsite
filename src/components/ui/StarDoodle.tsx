type StarDoodleProps = { className?: string };

/** Hand-drawn five-point star, stroked in the current text colour. */
export default function StarDoodle({ className = "" }: StarDoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <path d="M50 6 L34 92 L94 38 L8 42 L70 94 Z" />
    </svg>
  );
}
