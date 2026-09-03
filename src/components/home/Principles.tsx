import { SectionHeading } from "../ui/SectionHeading";
import { Spotlight } from "../ui/Spotlight";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { principles } from "../../data/skills";

export const Principles = () => (
  <section className="shell py-24">
    <SectionHeading
      index="03"
      eyebrow="How I work"
      title="Opinions I've"
      emphasis="earned the hard way"
    />

    <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2">
      {principles.map((item, i) => (
        <RevealItem key={item.title}>
          <Spotlight className="card h-full rounded-2xl p-8">
            <span className="font-mono text-[11px] text-paper-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-light text-paper">{item.title}</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-paper-dim">
              {item.body}
            </p>
          </Spotlight>
        </RevealItem>
      ))}
    </RevealGroup>
  </section>
);
