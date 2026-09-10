import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Partners from "@/components/sections/Partners";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "TÓKI believes that products, packaging, suppliers and logistics are never isolated subjects.",
};

const paragraphs = [
  "At TÓKI, we believe that products, packaging, suppliers and logistics are never isolated subjects. A decision made at one end of the chain will always have an impact on the rest.",
  "That is why we do not offer a standardised methodology. Every project starts with a conversation about your challenge or opportunity. From there, we identify where TÓKI can create real value and what the right next step should be.",
  "Our role is not to look at design, sourcing or production in isolation. It is to understand how each decision affects the entire value chain, and to bring together the right expertise and partners to move a project forward, from idea to implementation.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Tóki"
        title="We believe that great ideas can create real impact."
      />

      <section className="pb-section">
        <Container className="grid gap-12 lg:grid-cols-3 lg:items-start">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-sans text-body text-ink">
                {paragraph}
              </p>
            ))}
          </div>
          <Image
            src="/images/story-1.png"
            alt=""
            aria-hidden
            width={244}
            height={208}
            className="w-full max-w-xs justify-self-center object-contain lg:justify-self-end"
          />
        </Container>
      </section>

      <section className="pb-section" aria-labelledby="founder-heading">
        <Container className="flex flex-col items-start gap-8">
          <h2
            id="founder-heading"
            className="font-display text-display uppercase text-ink"
          >
            Meet the founder
          </h2>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <Image
              src="/images/story-2.png"
              alt=""
              aria-hidden
              width={312}
              height={282}
              className="w-40 shrink-0 object-contain"
            />
            <p className="max-w-xl font-sans text-body text-ink">
              Lorem ipsum dolor sit amet consectetur. Consectetur sit magna eget
              ac turpis. Nunc vulputate lectus ac posuere iaculis aliquam.
            </p>
          </div>
        </Container>
      </section>

      <Partners />
    </>
  );
}
