import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/sections/BookingForm";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Book a consultation with TÓKI and tell us about your challenge. Every project starts with a conversation.",
};

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: "/icons/social-3.svg" },
  { href: "https://facebook.com", label: "Facebook", icon: "/icons/facebook.svg" },
  { href: "https://instagram.com", label: "Instagram", icon: "/icons/instagram.svg" },
];

export default function BookPage() {
  return (
    <>
      <section className="pt-section pb-16">
        <Container>
          <h1 className="text-center font-sans text-hero text-ink">
            Start a project
          </h1>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <div className="grid gap-14 rounded-panel bg-accent p-gutter py-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-8 lg:order-2">
              <h2 className="font-sans text-display text-ink">Book a consultation</h2>
              <BookingForm />
            </div>

            <div className="flex flex-col gap-14 lg:order-1">
              <div className="flex flex-col gap-6">
                <h2 className="font-sans text-display text-ink">Contact</h2>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="mailto:hello@toki.house"
                      className="flex items-center gap-4 font-sans text-body text-ink transition-colors duration-200 hover:text-primary"
                    >
                      <Image src="/icons/email.svg" alt="" width={28} height={28} className="h-7 w-7" />
                      hello@toki.house
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+012345678910"
                      className="flex items-center gap-4 font-sans text-body text-ink transition-colors duration-200 hover:text-primary"
                    >
                      <Image src="/icons/phone.svg" alt="" width={28} height={28} className="h-7 w-7" />
                      +012345678910
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-sans text-display text-ink">Let&rsquo;s connect</h2>
                <ul className="flex items-center gap-6">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block transition-opacity duration-200 hover:opacity-60"
                      >
                        <Image src={social.icon} alt={social.label} width={36} height={36} className="h-9 w-9" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
