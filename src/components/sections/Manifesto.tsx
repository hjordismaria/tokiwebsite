import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Manifesto() {
  return (
    <section className="py-section" aria-labelledby="manifesto-heading">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Image
            src="/images/story-1.png"
            alt=""
            aria-hidden
            width={488}
            height={416}
            className="w-full max-w-sm justify-self-center object-contain md:justify-self-start"
          />
          <p
            id="manifesto-heading"
            className="max-w-md font-body text-lead font-light text-ink"
          >
            We combine strategy, sourcing, production and packaging to create
            solutions that work &mdash; for people, businesses and the planet.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative w-full max-w-sm justify-self-center md:justify-self-start">
            <Image
              src="/images/story-2.png"
              alt=""
              aria-hidden
              width={624}
              height={564}
              className="w-full object-contain"
            />
            <p className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center font-script text-script uppercase leading-tight text-white">
              <span>Creative solutions</span>
              <span>real impact.</span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Button href="/about" variant="outline" size="lg">
              Learn more about TÓKI
              <span aria-hidden>&rarr;</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
