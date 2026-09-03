import type { ReactNode } from "react";
import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";

type Props = {
  index?: string;
  eyebrow: string;
  title: string;
  emphasis?: string;
  children?: ReactNode;
  className?: string;
};

export const SectionHeading = ({
  index,
  eyebrow,
  title,
  emphasis,
  children,
  className = "",
}: Props) => (
  <div className={className}>
    <div className="flex items-center gap-4">
      {index && (
        <span className="font-mono text-[11px] text-paper-faint">{index}</span>
      )}
      <span className="eyebrow">{eyebrow}</span>
      <span className="h-px flex-1 bg-line" />
    </div>

    <h2 className="display mt-7 max-w-[18ch] text-4xl font-light text-paper sm:text-5xl lg:text-6xl">
      <TextReveal text={title} />
      {emphasis && (
        <>
          {" "}
          <span className="serif italic text-accent">
            <TextReveal text={emphasis} delay={0.1} />
          </span>
        </>
      )}
    </h2>

    {children && (
      <Reveal
        delay={0.1}
        className="mt-6 max-w-prose text-pretty text-paper-dim"
      >
        {children}
      </Reveal>
    )}
  </div>
);
