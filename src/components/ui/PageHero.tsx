import type { ReactNode } from "react";
import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  lead?: string;
  children?: ReactNode;
};

export const PageHero = ({
  eyebrow,
  title,
  emphasis,
  lead,
  children,
}: Props) => (
  <header className="shell pb-16 pt-40 sm:pt-48">
    <div className="flex items-center gap-4">
      <span className="eyebrow">{eyebrow}</span>
      <span className="h-px flex-1 bg-line" />
    </div>

    <h1 className="display mt-8 max-w-[16ch] text-[clamp(2.5rem,8vw,7rem)] font-light text-paper">
      <TextReveal text={title} />
      {emphasis && (
        <>
          {" "}
          <span className="serif italic text-accent">
            <TextReveal text={emphasis} delay={0.1} />
          </span>
        </>
      )}
    </h1>

    {lead && (
      <Reveal
        delay={0.14}
        className="mt-8 max-w-prose text-pretty text-base leading-relaxed text-paper-dim sm:text-lg"
      >
        {lead}
      </Reveal>
    )}

    {children}
  </header>
);
