import type { Metadata } from "next";
import Image from "next/image";
import Blob from "@/components/ui/Blob";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getDictionary(await getLocale(params)).about;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function AboutPage({ params }: PageProps) {
  const lang = await getLocale(params);
  const t = getDictionary(lang).about;

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
              alt={t.heroAlt}
              width={1102}
              height={742}
              priority
              className="w-full rounded-panel object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-body text-display font-light text-ink">
              <span className="block uppercase">{t.eyebrow}</span>
              {t.brand}
            </h1>
            <div className="flex flex-col gap-6">
              {t.intro.map((paragraph) => (
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
              alt={t.founderAlt}
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
                {t.belief}
              </p>
            </Blob>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              id="founder-heading"
              className="font-founder text-hero uppercase text-ink"
            >
              {t.founderHeading}
            </h2>
            <p className="font-sans text-body text-ink">{t.lorem}</p>
            <p className="font-sans text-body text-ink">{t.lorem}</p>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container className="flex flex-col items-center gap-12">
          <p className="max-w-4xl font-sans text-body text-ink">{t.lorem}</p>
          <Button href={localePath(lang, "/book")} variant="primary" size="lg">
            {t.bookMeeting}
          </Button>
        </Container>
      </section>
    </>
  );
}
