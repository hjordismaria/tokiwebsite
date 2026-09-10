import Blob from "@/components/ui/Blob";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type ManifestoProps = { lang: Locale; t: Dictionary["manifesto"] };

export default function Manifesto({ lang, t }: ManifestoProps) {
  return (
    <section className="py-section" aria-labelledby="manifesto-heading">
      <Container className="flex flex-col gap-16">
        <h2
          id="manifesto-heading"
          className="text-center font-body text-display font-semibold text-ink"
        >
          {t.heading}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Blob
            shape="blob"
            color="accent"
            className="w-full max-w-xs justify-self-center md:justify-self-start"
          />
          <p className="max-w-md font-body text-lead font-light text-ink">
            {t.statement}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Blob
            shape="circle"
            color="primary"
            className="w-full max-w-xs justify-self-center p-10 md:justify-self-start"
          >
            <p className="text-center font-script text-script uppercase leading-tight text-white">
              {t.scriptLine1}
              <br />
              {t.scriptLine2}
            </p>
          </Blob>
          <div className="flex justify-center md:justify-start">
            <Button href={localePath(lang, "/about")} variant="outline" size="lg">
              {t.learnMore}
              <span aria-hidden>&rarr;</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
