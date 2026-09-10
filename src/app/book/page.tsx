import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/sections/BookingForm";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Start a project with TÓKI — book a consultation and tell us about your challenge.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start a project"
        title={<>Let&rsquo;s connect</>}
        intro="Book a consultation and tell us about your challenge. Every project starts with a conversation."
      />

      <section className="pb-section">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <BookingForm />

          <div className="flex flex-col gap-8">
            <Image
              src="/images/showcase-wide.png"
              alt="Work produced with TÓKI"
              width={674}
              height={226}
              className="w-full rounded-panel object-cover"
            />
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-title uppercase text-ink">
                Contact
              </h2>
              <a
                href="mailto:hello@toki.house"
                className="font-sans text-body text-ink hover:text-primary"
              >
                hello@toki.house
              </a>
              <a
                href="tel:+012345678910"
                className="font-sans text-body text-ink hover:text-primary"
              >
                +012345678910
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
