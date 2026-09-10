import type { ReactNode } from "react";

type MarqueeProps = {
  /** One pass of the content. It is rendered twice so the loop is seamless. */
  children: ReactNode;
  speed?: "normal" | "slow";
  className?: string;
};

export default function Marquee({
  children,
  speed = "normal",
  className = "",
}: MarqueeProps) {
  const animation = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div data-marquee className={`flex w-max ${animation}`}>
        <div aria-hidden={false} className="flex shrink-0 items-center">
          {children}
        </div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
