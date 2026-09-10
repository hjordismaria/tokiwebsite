import Blob from "@/components/ui/Blob";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Manifesto() {
  return (
    <section className="py-section" aria-labelledby="manifesto-heading">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Blob
            shape="blob"
            color="accent"
            className="w-full max-w-xs justify-self-center md:justify-self-start"
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
          <Blob
            shape="circle"
            color="primary"
            className="w-full max-w-xs justify-self-center p-10 md:justify-self-start"
          >
            <p className="text-center font-script text-script uppercase leading-tight text-white">
              Creative solutions
              <br />
              real impact.
            </p>
          </Blob>
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
