import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { DotField } from "../ui/DotField";
import { TextReveal } from "../ui/TextReveal";
import { ActionLink } from "../ui/ActionLink";
import { profile } from "../../data/site";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <DotField />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/20 to-ink"
      />

      <motion.div style={{ y, opacity }} className="shell">
        <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          {profile.available && (
            <span className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
            {profile.role} · {profile.company} · {profile.location}
          </span>
        </div>

        <h1 className="display text-[clamp(2.25rem,7.6vw,6.75rem)] font-light text-paper">
          <span className="block">
            <TextReveal text="Building" />
          </span>
          <span className="block">
            <TextReveal text="backends that" delay={0.08} />
          </span>
          <span className="block">
            <span className="serif italic text-accent">
              <TextReveal text="hold up" delay={0.18} />
            </span>{" "}
            <TextReveal text="at 3 a.m." delay={0.26} />
          </span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-line pt-7 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-prose text-pretty text-[15px] leading-relaxed text-paper-dim sm:text-base">
              {profile.short} I care about the parts nobody demos — idempotency,
              crash safety, coverage that means something, and pipelines that
              fail loudly before production does.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end">
            <ActionLink to="/work">Selected work</ActionLink>
            <ActionLink href="/resume.pdf" variant="outline">
              Résumé
            </ActionLink>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="shell absolute inset-x-0 bottom-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-faint"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
};
