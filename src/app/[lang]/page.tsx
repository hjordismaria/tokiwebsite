import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Partners from "@/components/sections/Partners";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import { getLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type PageProps = { params: Promise<{ lang: string }> };

export default async function Home({ params }: PageProps) {
  const lang = await getLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} t={dict.hero} />
      <ServicesMarquee t={dict.marquee} />
      <Faq lang={lang} t={dict.faq} />
      <Partners t={dict.partners} />
      <Manifesto lang={lang} t={dict.manifesto} />
    </>
  );
}
