import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  index: number;
};

export const ProjectRow = ({ project, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
  >
    <Link
      to={`/work/${project.slug}`}
      data-cursor-label="View"
      className="group relative block border-t border-line"
    >
      {/* Hover fill sweeps up from the baseline */}
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-ink-2 transition-transform duration-500 ease-smooth group-hover:scale-y-100"
      />

      <div className="relative grid grid-cols-12 items-center gap-x-4 gap-y-2 px-1 py-7 sm:py-9">
        <span className="col-span-2 font-mono text-[11px] text-paper-faint sm:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="col-span-10 sm:col-span-5">
          <h3 className="flex items-center gap-2 text-2xl font-light tracking-tight text-paper transition-transform duration-500 ease-smooth group-hover:translate-x-2 sm:text-3xl">
            {project.title}
            {project.confidential && (
              <Lock size={13} className="text-paper-faint" />
            )}
          </h3>
        </div>

        <p className="col-span-10 col-start-3 text-sm text-paper-muted sm:col-span-4 sm:col-start-auto">
          {project.tagline}
        </p>

        <div className="col-span-2 flex items-center justify-end gap-4 sm:col-span-2">
          <span className="hidden font-mono text-[11px] text-paper-faint sm:inline">
            {project.year}
          </span>
          <ArrowUpRight
            size={18}
            className="text-paper-faint transition-all duration-500 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
          />
        </div>
      </div>
    </Link>
  </motion.div>
);
