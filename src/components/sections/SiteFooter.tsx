import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const socials = [
  { href: "https://instagram.com", label: "Instagram", icon: "/icons/instagram.svg" },
  { href: "https://facebook.com", label: "Facebook", icon: "/icons/facebook.svg" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "/icons/social-3.svg" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-surface-muted">
      <Container className="grid gap-12 py-section md:grid-cols-3 md:items-start">
        <div className="flex flex-col gap-6">
          <h2 className="font-sans text-title text-ink">Contact us</h2>
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

        <div className="flex justify-center">
          <Link href="/" aria-label="TÓKI home">
            <Image
              src="/images/logo.png"
              alt="TÓKI"
              width={140}
              height={140}
              className="h-32 w-32 object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <h2 className="font-sans text-title text-ink">Follow Tóki</h2>
          <ul className="flex items-center gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block transition-opacity duration-200 hover:opacity-60"
                >
                  <Image src={social.icon} alt={social.label} width={32} height={32} className="h-8 w-8" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
