import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Lock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/Reveal";
import { TextReveal } from "../components/ui/TextReveal";
import { ActionLink } from "../components/ui/ActionLink";
import { projects } from "../data/projects";
import { useSEO } from "../lib/seo";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;

  useSEO(
    project ? `${project.title} — Divyansh Jha` : "Work — Divyansh Jha",
    project?.tagline ?? "Selected engineering work by Divyansh Jha.",
  );

  if (!project) return <Navigate to="/work" replace />;

  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Role", value: project.role },
    { label: "Context", value: project.context },
    { label: "Year", value: project.year },
    { label: "Discipline", value: project.category },
  ];

  return (
    <>
      <header className="shell pb-14 pt-40 sm:pt-48">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-muted transition-colors duration-300 hover:text-accent"
        >
          <ArrowLeft size={13} />
          All work
        </Link>

        <h1 className="display mt-10 max-w-[14ch] text-[clamp(2.5rem,8vw,6.5rem)] font-light text-paper">
          <TextReveal text={project.title} />
        </h1>

        <Reveal delay={0.12}>
          <p className="serif mt-6 max-w-[26ch] text-2xl italic leading-tight text-accent sm:text-3xl">
            {project.tagline}
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {meta.map((item) => (
            <RevealItem key={item.label} className="bg-ink p-5 sm:p-6">
              <p className="eyebrow">{item.label}</p>
              <p className="mt-2.5 text-sm text-paper">{item.value}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </header>

      <section className="shell">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <RevealItem key={metric.label} className="bg-ink-2 p-6 sm:p-8">
              <p className="display text-3xl font-light text-accent sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-paper-muted">
                {metric.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="shell grid gap-16 py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Overview</p>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-paper">
              {project.summary}
            </p>
          </Reveal>

          <Reveal delay={0.06} className="mt-14">
            <p className="eyebrow">The problem</p>
            <p className="mt-6 text-pretty leading-relaxed text-paper-dim">
              {project.problem}
            </p>
          </Reveal>

          <div className="mt-14">
            <p className="eyebrow">What I built</p>
            <RevealGroup className="mt-8 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {project.approach.map((item, i) => (
                <RevealItem key={i}>
                  <div className="flex gap-5 bg-ink p-6">
                    <span className="mt-1 font-mono text-[11px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-pretty text-[15px] leading-relaxed text-paper-dim">
                      {item}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-12">
              <p className="eyebrow">Availability</p>
              {project.confidential ? (
                <div className="card mt-5 p-6">
                  <Lock size={16} className="text-paper-faint" />
                  <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                    Built inside SAP. The source, hostnames and repositories are
                    internal, so nothing is linked here. Happy to talk through
                    the architecture and the trade-offs in a conversation.
                  </p>
                </div>
              ) : (
                <div className="mt-5 flex flex-col items-start gap-3">
                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 hover:text-accent"
                    >
                      <ExternalLink size={14} />
                      {link.label}
                      <span className="h-px w-6 bg-line transition-all duration-300 group-hover:w-10 group-hover:bg-accent" />
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </aside>
      </section>

      <section className="shell pb-8">
        <Link
          to={`/work/${next.slug}`}
          className="group block border-t border-line pt-10"
        >
          <p className="eyebrow">Next project</p>
          <div className="mt-4 flex items-center justify-between gap-6">
            <h2 className="display text-3xl font-light text-paper transition-transform duration-500 ease-smooth group-hover:translate-x-2 sm:text-5xl">
              {next.title}
            </h2>
            <ArrowRight
              size={26}
              className="shrink-0 text-paper-faint transition-all duration-500 ease-smooth group-hover:translate-x-2 group-hover:text-accent"
            />
          </div>
        </Link>

        <div className="mt-10">
          <ActionLink to="/contact" variant="outline">
            Ask me about this project
          </ActionLink>
        </div>
      </section>
    </>
  );
};
