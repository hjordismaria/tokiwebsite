import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, product, sourcing, packaging and production — TÓKI connects every link in your value chain.",
};

const services = [
  { number: "01", name: "Strategy" },
  { number: "02", name: "Product" },
  { number: "03", name: "Sourcing" },
  { number: "04", name: "Packaging" },
  { number: "05", name: "Production" },
];

const blurb =
  "Lorem ipsum dolor sit amet consectetur. Consectetur sit magna eget ac turpis. Nunc vulputate lectus ac posuere iaculis aliquam.";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="How we work with TÓKI"
        intro="We connect strategy, product, sourcing, packaging and production so that every decision supports the next."
      />

      <section className="pb-section" aria-label="Our services">
        <Container>
          <ul className="flex flex-col">
            {services.map((service) => (
              <li
                key={service.number}
                className="flex flex-col gap-4 border-t border-black/60 py-10 md:flex-row md:items-baseline md:gap-10"
              >
                <span className="font-display text-title text-primary md:w-12 md:shrink-0">
                  {service.number}
                </span>
                <h2 className="font-display text-display uppercase text-ink md:w-72 md:shrink-0">
                  {service.name}
                </h2>
                <p className="font-sans text-body text-ink">{blurb}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-section">
        <Container className="flex flex-col items-start gap-8 rounded-panel bg-surface-warm p-gutter py-16">
          <h2 className="max-w-2xl font-display text-display uppercase text-ink">
            That&rsquo;s okay. Start with the idea. We&rsquo;ll help with the rest.
          </h2>
          <Button href="/book" variant="primary" size="lg">
            Book a meeting
          </Button>
        </Container>
      </section>
    </>
  );
}
