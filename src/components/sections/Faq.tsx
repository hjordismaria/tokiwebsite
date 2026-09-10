import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import StarDoodle from "@/components/ui/StarDoodle";

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
      <Container className="flex flex-col gap-12">
        <div className="flex items-start gap-8">
          <StarDoodle className="w-20 shrink-0 text-ink sm:w-28" />
          <h2 id="faq-heading" className="font-display text-display text-ink">
            FAQ
            <span className="mt-2 block uppercase">Got questions?</span>
            <span className="block uppercase text-primary">We got you.</span>
          </h2>
        </div>
        <Accordion items={items} />
      </Container>
    </section>
  );
}
