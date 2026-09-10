import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type HeroProps = { lang: Locale; t: Dictionary["hero"] };

export default function Hero({ lang, t }: HeroProps) {
  return (
    <section className="pt-section pb-16">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <h1 className="max-w-xl font-display text-hero font-medium uppercase text-ink">
            {t.headline}
          </h1>
          <div className="flex flex-wrap gap-5">
            <Button href={localePath(lang, "/book")} variant="primary" size="lg">
              {t.bookMeeting}
            </Button>
            <Button href={localePath(lang, "/services")} variant="outline" size="lg">
              {t.ourServices}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute -top-6 right-6 h-64 w-64 rounded-full bg-accent sm:h-80 sm:w-80 lg:right-16"
          />
          <Image
            src="/images/hero.png"
            alt={t.imageAlt}
            width={826}
            height={924}
            priority
            className="relative w-full max-w-sm rounded-panel object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
