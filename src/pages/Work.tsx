import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { ProjectRow } from "../components/work/ProjectRow";
import { Reveal } from "../components/ui/Reveal";
import { CATEGORIES, archive, projects, type Category } from "../data/projects";
import { useSEO } from "../lib/seo";

export const Work = () => {
  useSEO(
    "Work — Divyansh Jha",
    "Enterprise microservices, CI/CD platform engineering, RAG systems and full-stack products built by Divyansh Jha.",
  );

  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Work — 12 projects"
        title="Things I have"
        emphasis="shipped"
        lead="Backend microservices, platform CI/CD, retrieval systems and products built end to end. Work done inside SAP is described in terms of the engineering, without internal links, hostnames or repository names."
      />

      <section className="shell">
        <div className="flex flex-wrap gap-2 border-y border-line py-5">
          {CATEGORIES.map((category) => {
            const isActive = category === active;
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-paper-muted hover:text-paper"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {category}
                  <span className={isActive ? "opacity-60" : "opacity-40"}>
                    {" "}
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div key={active} className="mt-4">
          {filtered.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      <section className="shell py-24">
        <div className="flex items-center gap-4">
          <span className="eyebrow">Archive</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {archive.map((item, i) => (
            <li key={item.title} className="bg-ink">
              <Reveal delay={i * 0.05}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 p-6 transition-colors duration-500 hover:bg-ink-2"
                  >
                    <span>
                      <span className="block text-base text-paper">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-paper-muted">
                        {item.note}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-paper-faint transition-colors duration-300 group-hover:text-accent"
                    />
                  </a>
                ) : (
                  <div className="flex items-start justify-between gap-4 p-6">
                    <span>
                      <span className="block text-base text-paper">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-paper-muted">
                        {item.note}
                      </span>
                    </span>
                    <span className="mt-1 font-mono text-[11px] text-paper-faint">
                      {item.year}
                    </span>
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
