import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile, socials, nav } from "../../data/site";
import { ActionLink } from "../ui/ActionLink";
import { TextReveal } from "../ui/TextReveal";

const useLocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: profile.timezone,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
};

export const Footer = () => {
  const time = useLocalTime();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="shell py-24">
        <p className="eyebrow mb-8">Open to interesting problems</p>

        <h2 className="display max-w-[16ch] text-[13vw] font-light leading-[0.9] text-paper sm:text-7xl lg:text-8xl">
          <TextReveal text="Let's build" />{" "}
          <span className="serif italic text-accent">
            <TextReveal text="something solid" delay={0.12} />
          </span>
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ActionLink href={`mailto:${profile.email}`} variant="solid">
            {profile.email}
          </ActionLink>
          <ActionLink to="/contact" variant="outline">
            All the ways to reach me
          </ActionLink>
        </div>

        <div className="rule my-16" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-paper-dim transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Elsewhere</p>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper-dim transition-colors duration-300 hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Currently</p>
            <p className="max-w-[24ch] text-sm text-paper-dim">
              {profile.role} at {profile.company}, on {profile.team}.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Local time</p>
            <p className="font-mono text-sm text-paper-dim">
              {time} IST — {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {profile.name}
          </span>
          <span>Built with React, Vite &amp; too much coffee</span>
        </div>
      </div>
    </footer>
  );
};
