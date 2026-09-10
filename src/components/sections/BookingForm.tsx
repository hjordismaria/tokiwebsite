"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div role="status" className="rounded-card bg-surface p-10">
        <h3 className="font-display text-title uppercase text-ink">
          Thanks &mdash; we&rsquo;ll be in touch.
        </h3>
        <p className="mt-4 font-sans text-body text-ink">
          This prototype does not send anything yet. Connect a form handler to
          start receiving enquiries.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-sans text-eyebrow uppercase tracking-wide text-primary hover:underline"
        >
          Send another
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
      <Input label="Name" name="name" autoComplete="name" required />
      <Input label="Email" name="email" type="email" autoComplete="email" required />
      <Input label="Number" name="number" type="tel" autoComplete="tel" />
      <Input label="Message" name="message" as="textarea" required />
      <Button type="submit" variant="primary" size="lg" shape="rounded" className="self-end">
        Find appointment
      </Button>
    </form>
  );
}
