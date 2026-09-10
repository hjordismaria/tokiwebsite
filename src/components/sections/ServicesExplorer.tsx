"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import ArrowCircle from "@/components/ui/ArrowCircle";

export type Service = {
  number: string;
  name: string;
  image: string;
  width: number;
  height: number;
  blurb: string;
};

type ServicesExplorerProps = {
  services: Service[];
  /** Index selected on first render. */
  defaultIndex?: number;
};

export default function ServicesExplorer({
  services,
  defaultIndex = 0,
}: ServicesExplorerProps) {
  const [active, setActive] = useState(defaultIndex);
  const listRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  // Keep the selected card visible when the row scrolls horizontally (mobile).
  useEffect(() => {
    const list = listRef.current;
    const card = list?.children[active];
    if (!(list && card instanceof HTMLElement) || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({
      left: card.offsetLeft - (list.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);
  const panelId = `${baseId}-panel`;
  const current = services[active];

  return (
    <div className="flex flex-col gap-10">
      <div
        ref={listRef}
        role="tablist"
        aria-label="Service categories"
        className="flex snap-x gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0"
      >
        {services.map((service, index) => {
          const isActive = index === active;
          return (
            <button
              key={service.number}
              id={`${baseId}-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={panelId}
              onClick={() => setActive(index)}
              className={`flex w-56 shrink-0 snap-start flex-col gap-5 rounded-panel border p-6 text-left transition-all duration-300 md:w-auto md:shrink ${
                isActive
                  ? "border-primary bg-primary text-white md:basis-1/3 md:grow"
                  : "border-black/10 bg-surface text-ink hover:border-black/40 md:basis-1/6"
              }`}
            >
              <span className="font-sans text-title">{service.number}</span>
              <span
                className={`font-body text-lead ${isActive ? "font-semibold" : "font-light"}`}
              >
                {service.name}
              </span>
              <Image
                src={service.image}
                alt=""
                width={service.width}
                height={service.height}
                className="mt-auto aspect-square w-full rounded-card object-cover"
              />
              <ArrowCircle className="h-10 w-10" />
            </button>
          );
        })}
      </div>

      <div className="relative flex items-center justify-center gap-5">
        <span
          aria-hidden
          className="absolute inset-x-1/4 top-1/2 border-t border-black/30"
        />
        {services.map((service, index) => {
          const isActive = index === active;
          return (
            <button
              key={service.number}
              type="button"
              aria-label={`Show ${service.name}`}
              aria-pressed={isActive}
              onClick={() => setActive(index)}
              className={`relative h-4 rounded-pill border transition-all duration-300 ${
                isActive
                  ? "w-9 border-primary-strong bg-primary-strong"
                  : "w-4 border-black/30 bg-surface hover:bg-muted"
              }`}
            />
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="grid gap-10 rounded-panel bg-accent p-gutter py-12 lg:grid-cols-2 lg:items-center"
      >
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-display uppercase text-ink">
            <span className="mr-4 text-primary">{current.number}</span>
            {current.name}
          </h2>
          <p className="max-w-lg font-sans text-body text-ink">{current.blurb}</p>
          <Image
            src="/images/service-logos.png"
            alt="Sustainable options. Creative structures. From concept to production."
            width={896}
            height={164}
            className="w-full max-w-md"
          />
        </div>
        <Image
          key={current.image}
          src={current.image}
          alt={`${current.name} at TÓKI`}
          width={current.width}
          height={current.height}
          className="aspect-video w-full rounded-panel object-cover"
        />
      </div>
    </div>
  );
}
