import Marquee from "@/components/ui/Marquee";

const services = [
  "Concepting",
  "Production",
  "Sourcing",
  "Packaging",
  "Strategy",
  "Product",
];

export default function ServicesMarquee() {
  return (
    <section
      aria-label="What we do"
      className="border-y border-black bg-surface-muted py-6"
    >
      <Marquee>
        {services.map((service) => (
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
