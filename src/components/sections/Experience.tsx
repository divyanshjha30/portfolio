import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "SAP Labs",
    location: "Bangalore, India",
    role: "Software Engineer (Scholar@SAP)",
    team: "S/4HANA Test Engineering — i-ScOper",
    period: "Jan 2026 – Present",
    color: "#00d4ff",
    bullets: [
      "Sole end-to-end owner of Scheduling Solutions — extended tool support from 1 to 2 integrations (START + QMATE) with a tool-agnostic extensibility layer enabling future tools with zero structural change.",
      "Optimised scheduling algorithm; shipped a daily automated report surfacing ~1,000 latent defects before any customer impact.",
      "Designed and implemented 5 CI/CD pipelines from scratch using GitHub Actions, Piper stages, SonarQube, CodeQL (backend), and CheckMarx (frontend).",
      "Deployed all applications to SAP BTP (Cloud Foundry) with service bindings, environment configuration, and zero-downtime production releases.",
    ],
  },
  {
    company: "SAP Labs",
    location: "Bangalore, India",
    role: "Software Engineer (Scholar@SAP)",
    team: "Cloud ALM — NG-DCI",
    period: "Jun 2025 – Dec 2025",
    color: "#7c3aed",
    bullets: [
      "Achieved 90% mutation coverage across 5 platform applications using Stryker (JS) and PiTest (Java), substantially increasing defect-detection confidence.",
      "Delivered a full-stack Excel bulk-upload feature (Node.js + SAP UI5 + SAP HANA DB) reducing manual data entry effort for LoB teams.",
      "Resolved all SonarQube-flagged code quality and security violations, bringing all 5 projects to green quality gate status.",
      "Co-developed FISH, a deployed enterprise AI chatbot with a RAG pipeline (Python + Ollama + Neo4j) enabling LLM-grounded responses over large-scale internal wikis.",
    ],
  },
  {
    company: "SAP Labs",
    location: "Bangalore, India",
    role: "Software Engineer (Scholar@SAP)",
    team: "S/4HANA Test Engineering — i-ScOper",
    period: "Aug 2024 – May 2025",
    color: "#ec4899",
    bullets: [
      "Designed and delivered the i-ScOper 3.0 Wizard — full-stack SAP UI5/Fiori application deployed to SAP BTP, streamlining onboarding and unifying all use cases into a single interface.",
      "Built the Sustainability Dashboard consuming SAP oData services, surfacing real-time test coverage and quality metrics to S/4HANA program owners.",
      "Integrated SAP UI5 frontend with Spring Boot microservices for scalable, production-ready feature delivery.",
      "Established the i-ScOper 3.0 brand identity — product logo design and UI visual guidelines adopted across the platform suite.",
    ],
  },
  {
    company: "Enord.co",
    location: "Remote",
    role: "Web Development Intern",
    team: "Frontend",
    period: "Aug 2023 – Nov 2023",
    color: "#00ffa3",
    bullets: [
      "Built and shipped responsive frontend features for an AI-driven drone platform using React.js, delivering production-ready UI components.",
      "Improved performance through component-level refactoring and rendering optimisations, measurably reducing load times.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Professional Experience</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-16">
          Work History
        </h2>

        <div className="relative max-w-4xl">
          {/* Timeline vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #00d4ff 0%, #7c3aed 40%, #ec4899 70%, #00ffa3 100%)",
              opacity: 0.25,
            }}
          />

          <div className="space-y-10 pl-16">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-7 rounded-full"
                  style={{
                    left: "-3rem",
                    width: "10px",
                    height: "10px",
                    background: exp.color,
                    boxShadow: `0 0 10px ${exp.color}`,
                    transform: "translateX(-50%)",
                    marginLeft: "1px",
                  }}
                />

                <div className="glass-card p-7 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <span
                        className="inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border mb-2"
                        style={{
                          color: exp.color,
                          borderColor: `${exp.color}35`,
                        }}
                      >
                        {exp.team}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--text-1)" }}
                      >
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span
                      className="font-mono text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap"
                      style={{
                        color: "var(--text-2)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-1)" }}
                      >
                        <span
                          className="mt-[5px] shrink-0 text-[8px]"
                          style={{ color: exp.color }}
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
