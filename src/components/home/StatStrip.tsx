import { Counter } from "../ui/Counter";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { stats } from "../../data/site";

export const StatStrip = () => (
  <section className="shell py-20">
    <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {stats.map((stat) => (
        <RevealItem key={stat.label} className="bg-ink p-6 sm:p-8">
          <p className="display flex items-baseline text-4xl font-light text-paper sm:text-5xl">
            {stat.prefix}
            <Counter value={stat.value} />
            <span className="text-accent">{stat.suffix}</span>
          </p>
          <p className="mt-3 text-sm font-medium text-paper">{stat.label}</p>
          <p className="mt-1 text-[13px] leading-snug text-paper-muted">
            {stat.note}
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  </section>
);
