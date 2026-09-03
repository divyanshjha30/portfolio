import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/SectionHeading";
import { ActionLink } from "../ui/ActionLink";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { roles } from "../../data/experience";

export const CareerStrip = () => (
  <section className="shell py-24">
    <SectionHeading
      index="02"
      eyebrow="Trajectory"
      title="Three rotations,"
      emphasis="one throughline"
    >
      Frontend architecture, then data-platform services, now owning a backend
      microservice and the pipelines that ship it.
    </SectionHeading>

    <RevealGroup className="mt-16 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
      {roles.map((role) => (
        <RevealItem key={role.id}>
          <Link
            to="/experience"
            className="group grid gap-4 bg-ink p-6 transition-colors duration-500 hover:bg-ink-2 sm:grid-cols-12 sm:items-baseline sm:p-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint sm:col-span-3">
              {role.start} — {role.end}
            </p>

            <div className="sm:col-span-5">
              <p className="text-lg font-light text-paper transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                {role.title}
              </p>
              <p className="mt-1 text-sm text-paper-muted">{role.team}</p>
            </div>

            <p className="text-sm text-paper-dim sm:col-span-4">
              {role.company}
              {role.current && (
                <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                  Now
                </span>
              )}
            </p>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>

    <div className="mt-12">
      <ActionLink to="/experience" variant="outline">
        Full history
      </ActionLink>
    </div>
  </section>
);
