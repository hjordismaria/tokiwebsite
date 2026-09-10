import Image from "next/image";
import Marquee from "@/components/ui/Marquee";

const partners = [
  { src: "/images/partner-1.png", alt: "Partner one", width: 676, height: 230 },
  { src: "/images/partner-2.png", alt: "Partner two", width: 447, height: 447 },
  { src: "/images/partner-3.png", alt: "Partner three", width: 1200, height: 628 },
  { src: "/images/partner-4.png", alt: "Partner four", width: 431, height: 153 },
  { src: "/images/partner-5.png", alt: "Partner five", width: 2500, height: 1040 },
];

export default function Partners() {
  return (
    <section
      aria-label="Partners we work with"
      className="border-y border-black bg-surface py-10"
    >
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
