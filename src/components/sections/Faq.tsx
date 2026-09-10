import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";

const answer =
  "TÓKI helps businesses develop, source and optimise physical products, packaging and the entire value chain around them, from the initial idea through to production implementation.";

const items: AccordionItem[] = [
  { question: "What exactly does TÓKI do?", answer },
  { question: "Is TÓKI a packaging agency?", answer },
  {
    question: "Do I need to know exactly what I need before working with TÓKI?",
    answer,
  },
  { question: "At what stage can I bring TÓKI in?", answer },
  { question: "Does TÓKI only work with large companies?", answer },
];

export default function Faq() {
  return (
    <section className="py-section" aria-labelledby="faq-heading">
      <Container className="grid gap-12 lg:grid-cols-3">
        <h2 id="faq-heading" className="font-display text-display text-ink">
          FAQ
          <span className="mt-4 block uppercase">
            Got questions?
            <br />
            We got you.
          </span>
        </h2>
        <div className="lg:col-span-2">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
