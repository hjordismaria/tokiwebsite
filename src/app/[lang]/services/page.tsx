import type { Metadata } from "next";
import ServicesExplorer, {
  type Service,
} from "@/components/sections/ServicesExplorer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TalkBlob from "@/components/ui/TalkBlob";
import { getLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type PageProps = { params: Promise<{ lang: string }> };

const images = [
  { image: "/images/service-strategy.png", width: 304, height: 458 },
  { image: "/images/service-product.png", width: 456, height: 454 },
  { image: "/images/service-packaging.png", width: 636, height: 358 },
  { image: "/images/service-sourcing.png", width: 356, height: 536 },
  { image: "/images/service-production.png", width: 408, height: 408 },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getDictionary(await getLocale(params)).services;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ServicesPage({ params }: PageProps) {
  const lang = await getLocale(params);
  const t = getDictionary(lang).services;

  const services: Service[] = t.items.map((item, index) => ({
    ...item,
    ...images[index],
    blurb: t.blurb,
  }));

  return (
    <>
      <section className="pt-section pb-16">
        <Container>
          <h1 className="text-center font-serif text-hero font-bold text-ink">
            {t.heading}
          </h1>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <ServicesExplorer
            services={services}
            defaultIndex={2}
            labels={{
              categories: t.categories,
              show: t.show,
              panelAlt: t.panelAlt,
              logosAlt: t.logosAlt,
            }}
          />
        </Container>
      </section>

      <section className="pb-section">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <TalkBlob
            variant="bold"
            caption={t.notSure}
            title={t.letsTalk}
            href={localePath(lang, "/book")}
            className="justify-self-center lg:justify-self-start"
          />
          <div className="flex flex-col items-start gap-8">
            <p className="max-w-lg font-display text-title font-bold text-ink">
              {t.thatsOkay}
            </p>
            <Button href={localePath(lang, "/book")} variant="dark" size="lg">
              {t.bookMeeting}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
