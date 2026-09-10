import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import type { Dictionary } from "@/i18n/dictionaries";

type PartnersProps = { t: Dictionary["partners"] };

const partners = [
  { src: "/images/partner-1.png", alt: "Nilfisk", width: 676, height: 230 },
  { src: "/images/partner-2.png", alt: "Kernemilk", width: 447, height: 447 },
  { src: "/images/partner-3.png", alt: "MOVV", width: 1200, height: 628 },
  { src: "/images/partner-4.png", alt: "Champagne by Rosenkrantz", width: 431, height: 153 },
  { src: "/images/partner-5.png", alt: "LEGO", width: 2500, height: 1040 },
];

export default function Partners({ t }: PartnersProps) {
  return (
    <section aria-label={t.label} className="border-y border-black bg-surface py-10">
      <Marquee speed="slow">
        {partners.map((partner) => (
          <span key={partner.src} className="flex items-center px-12">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className="h-16 w-auto object-contain"
            />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
