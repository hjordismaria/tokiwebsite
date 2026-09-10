import Link from "next/link";

type TalkBlobProps = {
  title: string;
  href: string;
  /** Small line under the title (serif variant) or above it (bold variant). */
  caption: string;
  variant?: "serif" | "bold";
  className?: string;
};

/** Red speech-blob call to action, built in HTML so it stays sharp and is a real link. */
export default function TalkBlob({
  title,
  href,
  caption,
  variant = "serif",
  className = "",
}: TalkBlobProps) {
  const isBold = variant === "bold";

  return (
    <Link
      href={href}
      className={`inline-flex flex-col gap-2 rounded-blob-alt bg-primary px-14 py-10 text-white transition-transform duration-300 hover:-translate-y-1 sm:px-20 sm:py-12 ${className}`}
    >
      {isBold ? (
        <>
          <span className="font-display text-eyebrow uppercase tracking-widest">
            {caption}
          </span>
          <span className="font-display text-hero font-bold uppercase">
            {title}
          </span>
        </>
      ) : (
        <>
          <span className="font-serif text-display">{title}</span>
          <span className="font-display text-eyebrow uppercase tracking-widest">
            {caption} <span aria-hidden>&rarr;</span>
          </span>
        </>
      )}
    </Link>
  );
}
