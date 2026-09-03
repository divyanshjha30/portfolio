import { PageHero } from "../components/ui/PageHero";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/Reveal";
import { Spotlight } from "../components/ui/Spotlight";
import { ActionLink } from "../components/ui/ActionLink";
import { profile } from "../data/site";
import { skillGroups, interests } from "../data/skills";
import { education } from "../data/experience";
import { useSEO } from "../lib/seo";

export const About = () => {
  useSEO(
    "About — Divyansh Jha",
    "Software engineer at SAP Labs India. Java, Spring Boot, microservices, SAP BTP, RAG systems — and a background in film making.",
  );

  const glance = [
    { label: "Based in", value: profile.location },
    { label: "Currently", value: `${profile.role}, ${profile.company}` },
    { label: "Team", value: profile.team },
    {
      label: "Studying",
      value: `${education[0].degree}, ${education[0].institution}`,
    },
    { label: "Focus", value: "Backend · Distributed systems · Platform" },
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineer first,"
        emphasis="storyteller second"
        lead={profile.summary}
      />

      <section className="shell grid gap-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {profile.bio.map((paragraph, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                className="text-pretty leading-relaxed text-paper-dim"
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <ActionLink href="/resume.pdf">Read the résumé</ActionLink>
          </Reveal>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-6 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {glance.map((item) => (
                <div key={item.label} className="bg-ink p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-faint">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-paper">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      <section className="shell py-16">
        <div className="flex items-center gap-4">
          <span className="eyebrow">Toolkit</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <RevealGroup
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {skillGroups.map((group) => (
            <RevealItem key={group.title}>
              <Spotlight className="card h-full rounded-2xl p-6">
                <h3 className="text-lg font-light text-paper">{group.title}</h3>
                <p className="mt-1 text-[13px] text-paper-muted">
                  {group.note}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 text-[12px] text-paper-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="shell py-16">
        <div className="flex items-center gap-4">
          <span className="eyebrow">Away from the keyboard</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <RevealGroup className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {interests.map((item) => (
            <RevealItem key={item.title} className="bg-ink p-8">
              <h3 className="serif text-2xl italic text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-paper-dim">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
};
