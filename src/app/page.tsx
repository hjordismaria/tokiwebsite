import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Partners from "@/components/sections/Partners";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import TalkBanner from "@/components/sections/TalkBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <TalkBanner />
      <Faq />
      <Partners />
      <Manifesto />
    </>
  );
}
