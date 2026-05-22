import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Languages",
    color: "cyan" as const,
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    color: "violet" as const,
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "React.js",
      "SAP UI5",
      "SAP Fiori",
      "oData",
    ],
  },
  {
    category: "AI & Intelligent Systems",
    color: "pink" as const,
    items: [
      "RAG Pipelines",
      "LLM Integration",
      "Ollama",
      "Neo4j Vector DB",
      "Prompt Engineering",
      "Embeddings",
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "green" as const,
    items: [
      "SAP BTP",
      "Cloud Foundry",
      "GitHub Actions",
      "CI/CD",
      "Piper",
      "SonarQube",
      "CodeQL",
      "CheckMarx",
    ],
  },
  {
    category: "Testing & Quality",
    color: "cyan" as const,
    items: [
      "Stryker Mutation Testing",
      "PiTest",
      "JUnit",
      "Unit Testing",
      "Integration Testing",
    ],
  },
];

const TAG_STYLES: Record<string, string> = {
  cyan: "border-[rgba(0,212,255,0.2)] text-[#00d4ff] bg-[rgba(0,212,255,0.05)]",
  violet:
    "border-[rgba(124,58,237,0.2)] text-violet-300 bg-[rgba(124,58,237,0.05)]",
  pink: "border-[rgba(236,72,153,0.2)] text-pink-300 bg-[rgba(236,72,153,0.05)]",
  green:
    "border-[rgba(0,255,163,0.2)] text-emerald-300 bg-[rgba(0,255,163,0.05)]",
};

const EDUCATION = [
  {
    school: "BITS Pilani",
    degree: "M.Tech in Software Engineering (WILP)",
    period: "2024 – 2028",
    cgpa: "7.987 CGPA",
  },
  {
    school: "IITM, GGSIPU, Delhi",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 – 2024",
    cgpa: "9.16 CGPA",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// About Me</span>

        <div className="grid lg:grid-cols-2 gap-20 mt-8">
          {/* Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Building software that
              <br />
              <span className="gradient-text">actually matters.</span>
            </h2>

            <div
              className="space-y-5 text-lg leading-relaxed mb-12"
              style={{ color: "var(--text-1)" }}
            >
              <p>
                Full-Stack Software Engineer with 2+ years at SAP Labs, working
                across 3 engineering teams on enterprise cloud applications,
                AI-powered platforms, and test engineering tools for S/4HANA
                delivery.
              </p>
              <p>
                I specialize in building end-to-end — from Spring Boot
                microservices and SAP UI5 frontends to RAG pipelines with Neo4j
                and CI/CD pipelines with GitHub Actions + Piper from scratch.
              </p>
              <p>
                Currently pursuing M.Tech in Software Engineering at BITS Pilani
                (WILP) while working full-time at SAP Labs Bangalore.
              </p>
            </div>

            {/* Education */}
            <div>
              <span className="section-label mb-5">// Education</span>
              <div className="space-y-4 mt-5">
                {EDUCATION.map((edu, i) => (
                  <div
                    key={i}
                    className="glass-card p-5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {edu.school}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-1)" }}
                      >
                        {edu.degree}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className="text-xs font-mono"
                        style={{ color: "var(--text-2)" }}
                      >
                        {edu.period}
                      </p>
                      <p
                        className="text-xs font-semibold mt-0.5"
                        style={{ color: "var(--accent-cyan)" }}
                      >
                        {edu.cgpa}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <span className="section-label">// Technical Skills</span>
            <div className="space-y-7">
              {SKILLS.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest mb-3 block"
                    style={{ color: "var(--text-2)" }}
                  >
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${TAG_STYLES[group.color]}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
