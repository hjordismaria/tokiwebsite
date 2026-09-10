import Marquee from "@/components/ui/Marquee";
import type { Dictionary } from "@/i18n/dictionaries";

type ServicesMarqueeProps = { t: Dictionary["marquee"] };

export default function ServicesMarquee({ t }: ServicesMarqueeProps) {
  return (
    <section aria-label={t.label} className="border-y border-black bg-surface-muted py-6">
      <Marquee>
        {t.items.map((service) => (
          <span
            key={service}
            className="flex items-center gap-10 whitespace-nowrap px-10 font-sans text-marquee text-ink"
          >
            {service}
            <span aria-hidden className="text-primary">
              &bull;
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
