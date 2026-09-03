import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/Reveal";
import { ActionLink } from "../components/ui/ActionLink";
import { roles, education, awards } from "../data/experience";
import { useSEO } from "../lib/seo";

export const Experience = () => {
  useSEO(
    "Experience — Divyansh Jha",
    "Software engineer at SAP Labs India across three rotations: i-ScOper S/4HANA Test Engineering, Cloud ALM NG-DCI, and platform CI/CD.",
  );

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 85%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <>
      <PageHero
        eyebrow="Experience — 2023 to now"
        title="Two years of"
        emphasis="shipping in production"
        lead="I joined SAP Labs on the Scholar@SAP programme and have rotated through frontend architecture, data-platform services, and now backend ownership. Each rotation added a layer: how things look, how data moves, and how any of it reaches production safely."
      />

      <section className="shell">
        <div ref={timelineRef} className="relative">
          {/* Scroll-linked progress rail */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-line md:block">
            <motion.div
              style={{ scaleY }}
              className="h-full w-full origin-top bg-accent"
            />
          </div>

          <div className="space-y-20 md:pl-12">
            {roles.map((role, i) => (
              <Reveal key={role.id} className="relative">
                <span className="absolute -left-12 top-2.5 hidden h-2 w-2 -translate-x-[3.5px] rounded-full bg-accent md:block" />

                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      {role.start} — {role.end}
                    </p>
                    <p className="mt-3 text-sm text-paper-muted">
                      {role.location}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-paper-faint">
                      {String(roles.length - i).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="text-2xl font-light text-paper sm:text-3xl">
                      {role.title}
                    </h2>
                    <p className="mt-2 text-paper-dim">
                      {role.company}
                      {role.companyNote && (
                        <span className="text-paper-muted">
                          {" "}
                          · {role.companyNote}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.1em] text-paper-muted">
                      {role.team}
                    </p>

                    <p className="mt-6 max-w-prose text-pretty leading-relaxed text-paper-dim">
                      {role.summary}
                    </p>

                    <ul className="mt-8 space-y-4 border-l border-line pl-6">
                      {role.highlights.map((point, j) => (
                        <li
                          key={j}
                          className="text-pretty text-[15px] leading-relaxed text-paper-dim"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {role.stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <span className="eyebrow">Education</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <RevealGroup className="mt-8 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {education.map((item) => (
                <RevealItem key={item.degree}>
                  <div className="bg-ink p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-light text-paper">
                        {item.degree} · {item.field}
                      </h3>
                      <span className="shrink-0 font-mono text-[11px] text-accent">
                        {item.score}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-paper-dim">
                      {item.institution}
                      {item.note && (
                        <span className="text-paper-muted"> · {item.note}</span>
                      )}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                      {item.period}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <span className="eyebrow">Recognition</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <RevealGroup className="mt-8 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {awards.map((item) => (
                <RevealItem key={item.title}>
                  <div className="bg-ink p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base text-paper">{item.title}</h3>
                      <span className="shrink-0 font-mono text-[11px] text-paper-faint">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-paper-muted">
                      {item.issuer}
                    </p>
                    {item.note && (
                      <p className="mt-2 text-[13px] leading-snug text-paper-dim">
                        {item.note}
                      </p>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <ActionLink href="/resume.pdf">Download résumé</ActionLink>
          <ActionLink to="/work" variant="outline">
            See the work
          </ActionLink>
        </div>
      </section>
    </>
  );
};
