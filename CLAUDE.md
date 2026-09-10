@AGENTS.md

# Project rules
- Design source is Figma: https://www.figma.com/design/Dx2mds6dyDccTegh5pMal1/Team-9
  - Main page frame: "Frontpage" `468:558` — https://www.figma.com/design/Dx2mds6dyDccTegh5pMal1/Team-9?node-id=468-558
- Styling is Tailwind v4. All design tokens live in the @theme block in src/app/globals.css.
- Only use theme tokens. No hex values, no arbitrary values like p-[13px] or text-[#333].
- If a Figma value doesn't match an existing token, stop and ask me. Never invent a token silently.
- Layout with flexbox/grid. No absolute positioning unless elements actually overlap in the design.
- Mobile-first. Figma frames are desktop unless named otherwise.
  - The Figma file has NO mobile frames and NO auto-layout, so responsive behavior and layout
    intent are inferred, not designed. Flag inferred breakpoints for review.
- ui components are generic and prop-driven. Section components compose ui components. Pages only compose sections.
- Load fonts with next/font. If a font isn't on Google Fonts, ask me for the files.
- Download images and icons into /public. Never reference Figma-hosted asset URLs.
- Semantic HTML, accessible names on interactive elements, visible focus states.
- One component per task. Don't touch unrelated files.
