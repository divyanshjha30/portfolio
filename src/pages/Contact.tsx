import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/Reveal";
import { profile, socials } from "../data/site";
import { useSEO } from "../lib/seo";

export const Contact = () => {
  useSEO(
    "Contact — Divyansh Jha",
    "Get in touch with Divyansh Jha — software engineer building enterprise backend systems in Bangalore, India.",
  );

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const looking = [
    "Backend and distributed-systems roles where correctness matters",
    "Platform or developer-experience work — CI/CD, tooling, release safety",
    "Teams that treat testing and observability as design inputs",
    "Interesting problems, generally",
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello,"
        emphasis="I reply"
        lead="The fastest way to reach me is email. I read everything and answer within a day or two — recruiters, engineers and people with a strange architecture question all welcome."
      />

      <section className="shell pb-16">
        <Reveal>
          <div className="card overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={copyEmail}
              data-cursor-label={copied ? "Copied" : "Copy"}
              className="group flex w-full flex-col items-start gap-4 p-8 text-left transition-colors duration-500 hover:bg-ink-3 sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <span className="display break-all text-2xl font-light text-paper sm:text-4xl">
                {profile.email}
              </span>
              <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-muted transition-colors duration-300 group-hover:text-accent">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
          </div>
        </Reveal>

        <RevealGroup className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => (
            <RevealItem key={social.label} className="bg-ink">
              <a
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors duration-500 hover:bg-ink-2"
              >
                <span className="eyebrow">{social.label}</span>
                <span className="text-sm text-paper transition-colors duration-300 group-hover:text-accent">
                  {social.handle}
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="shell grid gap-14 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-4">
            <span className="eyebrow">What I'm looking for</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <ul className="mt-8 space-y-4">
            {looking.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 0.05}
                className="flex gap-4 border-b border-line pb-4 text-[15px] text-paper-dim"
              >
                <span className="font-mono text-[11px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Details</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <dl className="mt-8 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            <div className="bg-ink p-5">
              <dt className="eyebrow">Location</dt>
              <dd className="mt-2 text-sm text-paper">{profile.location}</dd>
            </div>
            <div className="bg-ink p-5">
              <dt className="eyebrow">Time zone</dt>
              <dd className="mt-2 text-sm text-paper">IST · UTC+5:30</dd>
            </div>
            <div className="bg-ink p-5">
              <dt className="eyebrow">Typical reply</dt>
              <dd className="mt-2 text-sm text-paper">Within 48 hours</dd>
            </div>
            <div className="bg-ink p-5">
              <dt className="eyebrow">Status</dt>
              <dd className="mt-2 flex items-center gap-2 text-sm text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Open to opportunities
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};
