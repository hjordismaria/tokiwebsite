import type { Metadata } from "next";
import Image from "next/image";
import Blob from "@/components/ui/Blob";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "TÓKI believes that products, packaging, suppliers and logistics are never isolated subjects.",
};

const intro = [
  "At TÓKI, we believe that products, packaging, suppliers and logistics are never isolated subjects. A decision made at one end of the chain will always have an impact on the rest.",
  "That is why we do not offer a standardised methodology. Every project starts with a conversation about your challenge or opportunity. From there, we identify where TÓKI can create real value and what the right next step should be.",
  "Our role is not to look at design, sourcing or production in isolation. It is to understand how each decision affects the entire value chain, and to bring together the right expertise and partners to move a project forward, from idea to implementation.",
];

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Consectetur sit magna eget ac turpis. Nunc vulputate lectus ac posuere iaculis aliquam.";

export default function AboutPage() {
  return (
    <>
      <section className="pt-section pb-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative isolate">
            <Blob
              shape="circle"
              color="accent"
              className="absolute -bottom-10 -left-6 -z-10 w-56 sm:w-72"
            />
            <Image
              src="/images/about-hero.png"
              alt="The TÓKI team working around a table of sketches"
              width={1102}
              height={742}
              priority
              className="w-full rounded-panel object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-body text-display font-light text-ink">
              <span className="block uppercase">About</span>
              Tóki
            </h1>
            <div className="flex flex-col gap-6">
              {intro.map((paragraph) => (
                <p key={paragraph} className="font-sans text-body text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-section" aria-labelledby="founder-heading">
        <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative isolate w-full max-w-sm justify-self-center pt-12 pr-10 lg:justify-self-start">
            <Image
              src="/images/founder.png"
              alt="Portrait of the TÓKI founder"
              width={1365}
              height={2048}
              className="aspect-square w-full rounded-full object-cover object-top"
            />
            <Blob
              shape="circle"
              color="primary"
              className="absolute -right-4 top-0 w-48 p-6 sm:w-56"
            >
              <p className="text-center font-hand text-body uppercase leading-tight text-white">
                We believe that great ideas can create real impact.
              </p>
            </Blob>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              id="founder-heading"
              className="font-founder text-hero uppercase text-ink"
            >
              Meet the founder
            </h2>
            <p className="font-sans text-body text-ink">{lorem}</p>
            <p className="font-sans text-body text-ink">{lorem}</p>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container className="flex flex-col items-center gap-12">
          <p className="max-w-4xl font-sans text-body text-ink">{lorem}</p>
          <Button href="/book" variant="primary" size="lg">
            Book a meeting
          </Button>
        </Container>
      </section>
    </>
  );
}
