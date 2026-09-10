import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="pt-section pb-16">
      <Container className="flex flex-col gap-8">
        <p className="font-display text-eyebrow uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-hero font-medium uppercase text-ink">
          {title}
        </h1>
        {intro ? (
          <p className="max-w-2xl font-body text-lead font-light text-ink">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
