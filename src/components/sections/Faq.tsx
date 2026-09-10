import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import StarDoodle from "@/components/ui/StarDoodle";
import TalkBlob from "@/components/ui/TalkBlob";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type FaqProps = { lang: Locale; t: Dictionary["faq"] };

export default function Faq({ lang, t }: FaqProps) {
  return (
    <section className="py-section" aria-labelledby="faq-heading">
      <Container className="flex flex-col gap-12">
        <div className="flex items-start justify-between gap-8">
          <h2 id="faq-heading" className="font-display text-display text-ink">
            {t.title}
            <span className="mt-2 block uppercase">{t.subtitle}</span>
            <span className="block uppercase text-primary">{t.emphasis}</span>
          </h2>
          <StarDoodle className="w-20 shrink-0 text-ink sm:w-28" />
        </div>

        <Accordion items={t.items} />

        <div className="flex justify-end">
          <TalkBlob
            title={t.talkTitle}
            caption={t.talkCaption}
            href={localePath(lang, "/book")}
          />
        </div>
      </Container>
    </section>
  );
}
