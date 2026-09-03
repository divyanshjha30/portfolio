import { ActionLink } from "../components/ui/ActionLink";
import { TextReveal } from "../components/ui/TextReveal";
import { Reveal } from "../components/ui/Reveal";
import { useSEO } from "../lib/seo";

export const NotFound = () => {
  useSEO("404 — Divyansh Jha", "That page could not be found.");

  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center py-32">
      <span className="eyebrow">Error 404</span>

      <h1 className="display mt-8 text-[clamp(4rem,20vw,16rem)] font-light text-paper">
        <TextReveal text="404" />
      </h1>

      <Reveal delay={0.12} className="mt-8 max-w-prose text-paper-dim">
        This route does not exist. It either moved, never shipped, or you have
        found a genuine bug — in which case I would like to hear about it.
      </Reveal>

      <Reveal delay={0.18} className="mt-10 flex flex-wrap gap-3">
        <ActionLink to="/">Back to the index</ActionLink>
        <ActionLink to="/work" variant="outline">
          Browse the work
        </ActionLink>
      </Reveal>
    </section>
  );
};
