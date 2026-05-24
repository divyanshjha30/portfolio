import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

type Category = "All" | "SAP Enterprise" | "AI & ML" | "Personal";

interface Project {
  name: string;
  description: string;
  tech: string[];
  categories: Category[];
  github?: string;
  live?: string;
  badge?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "FISH — Focused Intelligent System for Help",
    description:
      "Production enterprise AI chatbot deployed on SAP cloud infrastructure. Full RAG pipeline (Python + Ollama + Neo4j vector store) enabling LLM-grounded responses over large-scale SAP internal wikis. Cross-LoB collaboration between CALM NG-DCI and APM-IPS teams. Has its own CI/CD, docs site, and enterprise deployment.",
    tech: ["Python", "RAG", "Neo4j", "Ollama", "LLM", "Jenkins", "SAP Cloud"],
    categories: ["SAP Enterprise", "AI & ML"],
    live: "https://fish.datalake-svcprovider.c.eu-de-2.cloud.sap",
    badge: "Production-deployed",
    featured: true,
  },
  {
    name: "Scope Comparator",
    description:
      "SAP internal scope investigation tool — Spring Boot 3.4 + SAP HANA Cloud backend with React TypeScript frontend. Real-time SSE streaming of 4 parallel AI proposer + 1 analyzer endpoint results simultaneously. OAuth token management for SAP services.",
    tech: [
      "Spring Boot",
      "Java 21",
      "SAP HANA",
      "React",
      "TypeScript",
      "SSE",
      "OAuth",
    ],
    categories: ["SAP Enterprise", "AI & ML"],
    badge: "Internal Enterprise Tool",
    featured: true,
  },
  {
    name: "i-ScOper 3.0 Wizard",
    description:
      "Full-stack SAP UI5/Fiori wizard for S/4HANA test engineering — streamlines new-user onboarding, test plan management, and scope configuration. Connected to SAP ABAP on-premise via oData. Deployed to SAP BTP Cloud Foundry.",
    tech: ["SAP UI5", "SAP Fiori", "oData", "ABAP", "SAP BTP", "Cloud Foundry"],
    categories: ["SAP Enterprise"],
    badge: "Deployed to SAP BTP",
  },
  {
    name: "Sustainability Dashboard",
    description:
      "Real-time test coverage and quality metrics dashboard for S/4HANA program owners. Consumes SAP oData backend services, surfacing delivery quality data to engineers and stakeholders across S/4HANA tracks.",
    tech: ["SAP UI5", "oData", "Spring Boot", "SAP BTP"],
    categories: ["SAP Enterprise"],
    badge: "Live for S/4HANA",
  },
  {
    name: "NOVA — Local RAG Chatbot",
    description:
      "NGDCI Optimized Virtual Assistant — local RAG pipeline for private SAP documentation Q&A. Full pipeline: SSO wiki crawler → HTML-to-Markdown → chunking → bge-large embeddings → Neo4j vector store → Llama3 answer generation. Streamlit UI with multi-chat and context transparency.",
    tech: [
      "Python",
      "Ollama",
      "Llama3",
      "bge-large",
      "Neo4j",
      "Streamlit",
      "RAG",
    ],
    categories: ["AI & ML"],
    github: "https://github.com/divyanshjha30/calma2autilities-fish-ngdci",
    badge: "Local RAG System",
    featured: true,
  },
  {
    name: "OpenPM — RL Sprint Environment",
    description:
      "Deterministic RL environment simulating software sprint management. Submitted to Meta/Hugging Face OpenEnv Hackathon. Dependency-aware task graphs, zero-sum resource economics, and seeded stochastic blockers that force genuine operational competence — not pattern matching.",
    tech: [
      "Python",
      "Reinforcement Learning",
      "Docker",
      "Hugging Face",
      "FastAPI",
    ],
    categories: ["AI & ML", "Personal"],
    live: "https://huggingface.co/spaces/piyushgoel2808/openpm-finale",
    github: "https://github.com/openepm/openpm",
    badge: "HF Hackathon",
    featured: true,
  },
  {
    name: "Project Management Suite",
    description:
      "118-endpoint REST API across 12 functional modules. Node.js + Express + PostgreSQL + Supabase with JWT auth, role-based access (Admin / Manager / Dev), email OTP verification, file storage, and Swagger docs. Deployed to Vercel + Netlify.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "React",
      "Swagger",
    ],
    categories: ["Personal"],
    live: "https://project-management-system-fsad.netlify.app",
    github: "https://github.com/divyanshjha30/project-management-suite",
    badge: "118 API Endpoints",
    featured: true,
  },
  {
    name: "Multiplayer Card Game",
    description:
      "Real-time multiplayer online card game with room system, live game state sync, and authentication. React + TypeScript + Supabase realtime subscriptions and Row-Level Security policies.",
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "Realtime",
      "RLS",
      "Framer Motion",
    ],
    categories: ["Personal"],
    github: "https://github.com/divyanshjha30/project",
    live: "https://royal-casino-dj.netlify.app",
  },
  {
    name: "AITalk — CLI AI Assistant",
    description:
      "Terminal AI assistant using Groq API. Scaffolds React projects from natural language descriptions, explains last N shell commands, summarizes PDFs and documents, provides git repository insights, and supports interactive LLM chat.",
    tech: ["Python", "Groq API", "LLM", "CLI", "Cross-platform"],
    categories: ["AI & ML", "Personal"],
    github: "https://github.com/divyanshjha30/aitalk",
  },
];

const CATEGORIES: Category[] = ["All", "SAP Enterprise", "AI & ML", "Personal"];

const ACCENT: Record<Category, string> = {
  All: "#00d4ff",
  "SAP Enterprise": "#7c3aed",
  "AI & ML": "#ec4899",
  Personal: "#00ffa3",
};

export const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = PROJECTS.filter(
    (p) => active === "All" || p.categories.includes(active),
  );

  return (
    <section id="projects" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Portfolio</span>

        {/* Title + Filters row */}
        <div className="flex flex-wrap items-end justify-between gap-6 mt-3 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Projects
          </h2>

          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider border transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: ACCENT[cat],
                        color: "#060610",
                        borderColor: "transparent",
                      }
                    : {
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "var(--text-1)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-7 flex flex-col"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                      style={{
                        color: ACCENT[cat],
                        borderColor: `${ACCENT[cat]}30`,
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                  {project.badge && (
                    <span
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        color: "var(--text-2)",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {project.name}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "var(--text-1)" }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded font-mono border"
                      style={{
                        color: "var(--text-2)",
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.06)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors"
                      style={{ color: "var(--text-1)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-1)")
                      }
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors"
                      style={{ color: "var(--accent-cyan)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--accent-cyan)")
                      }
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
