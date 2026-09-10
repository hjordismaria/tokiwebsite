"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { Dictionary } from "@/i18n/dictionaries";

type BookingFormProps = { labels: Dictionary["book"]["form"] };

export default function BookingForm({ labels }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div role="status" className="rounded-card bg-surface p-10">
        <h3 className="font-display text-title uppercase text-ink">
          {labels.thanksTitle}
        </h3>
        <p className="mt-4 font-sans text-body text-ink">
          {labels.thanksBody}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-sans text-eyebrow uppercase tracking-wide text-primary hover:underline"
        >
          {labels.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <Input label={labels.name} name="name" autoComplete="name" required />
      <Input label={labels.email} name="email" type="email" autoComplete="email" required />
      <Input label={labels.number} name="number" type="tel" autoComplete="tel" />
      <Input label={labels.message} name="message" as="textarea" required />
      <Button type="submit" variant="primary" size="lg" shape="rounded" className="self-end">
        {labels.submit}
      </Button>
    </form>
  );
}
