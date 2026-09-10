import type { Metadata } from "next";
import ServicesExplorer, {
  type Service,
} from "@/components/sections/ServicesExplorer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TalkBlob from "@/components/ui/TalkBlob";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, product, sourcing, packaging and production — TÓKI connects every link in your value chain.",
};

const blurb =
  "Lorem ipsum dolor sit amet consectetur. Consectetur sit magna eget ac turpis. Nunc vulputate lectus ac posuere iaculis aliquam.";

const services: Service[] = [
  { number: "01", name: "Strategy", image: "/images/service-strategy.png", width: 304, height: 458, blurb },
  { number: "02", name: "Product", image: "/images/service-product.png", width: 456, height: 454, blurb },
  { number: "03", name: "Packaging", image: "/images/service-packaging.png", width: 636, height: 358, blurb },
  { number: "04", name: "Sourcing", image: "/images/service-sourcing.png", width: 356, height: 536, blurb },
  { number: "05", name: "Production", image: "/images/service-production.png", width: 408, height: 408, blurb },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-section pb-16">
        <Container>
          <h1 className="text-center font-serif text-hero font-bold text-ink">
            How we work with Tóki
          </h1>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <ServicesExplorer services={services} defaultIndex={2} />
        </Container>
      </section>

      <section className="pb-section">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <TalkBlob
            variant="bold"
            caption="Not sure what you need?"
            title="Let's talk."
            href="/book"
            className="justify-self-center lg:justify-self-start"
          />
          <div className="flex flex-col items-start gap-8">
            <p className="max-w-lg font-display text-title font-bold text-ink">
              That&rsquo;s okay. Start with the idea. We&rsquo;ll help with the rest.
            </p>
            <Button href="/book" variant="dark" size="lg">
              Book a meeting
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
