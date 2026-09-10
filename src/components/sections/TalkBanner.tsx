import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * The "Still have a question? / Let's talk" graphic from the Figma frame,
 * used as the mid-page route into the booking page.
 */
export default function TalkBanner() {
  return (
    <section className="py-section" aria-labelledby="talk-heading">
      <Container className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
        <h2 id="talk-heading" className="sr-only">
          Still have a question? Let&rsquo;s talk.
        </h2>
        <Link
          href="/book"
          className="block transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src="/images/showcase-wide.png"
            alt="Still have a question? Let's talk."
            width={674}
            height={226}
            className="w-full max-w-lg object-contain"
          />
        </Link>
        <Image
          src="/images/showcase-tall.png"
          alt=""
          aria-hidden
          width={188}
          height={204}
          className="w-24 object-contain sm:w-28"
        />
      </Container>
    </section>
  );
}
