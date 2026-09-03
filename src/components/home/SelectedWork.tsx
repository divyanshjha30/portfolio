import { SectionHeading } from "../ui/SectionHeading";
import { ActionLink } from "../ui/ActionLink";
import { ProjectRow } from "../work/ProjectRow";
import { featuredProjects } from "../../data/projects";

export const SelectedWork = () => (
  <section className="shell py-24">
    <SectionHeading
      index="01"
      eyebrow="Selected work"
      title="Systems I own"
      emphasis="end to end"
    >
      A mix of enterprise platform work at SAP and products I built alone.
      Client work is described without internal links or hostnames.
    </SectionHeading>

    <div className="mt-16">
      {featuredProjects.map((project, i) => (
        <ProjectRow key={project.slug} project={project} index={i} />
      ))}
      <div className="border-t border-line" />
    </div>

    <div className="mt-12">
      <ActionLink to="/work" variant="outline">
        All projects
      </ActionLink>
    </div>
  </section>
);
