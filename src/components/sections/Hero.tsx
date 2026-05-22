import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const ROLES = [
  "Full-Stack Software Engineer",
  "SAP Cloud & Platform Engineer",
  "AI / RAG Systems Developer",
  "CI/CD Pipeline Architect",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayed.length < currentRole.length) {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        } else if (!isDeleting && displayed.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      },
      isDeleting ? 35 : 75,
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-16 overflow-hidden"
    >
      {/* Decorative corner accent */}
      <div
        className="absolute top-24 right-10 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl w-full relative z-10">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="section-label mb-8"
        >
          // Software Engineer &nbsp;·&nbsp; SAP Labs Bangalore &nbsp;·&nbsp;
          BITS Pilani
        </motion.span>

        {/* Giant name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[clamp(3.5rem,11vw,9.5rem)] font-bold leading-none tracking-tighter text-white">
            DIVYANSH
          </h1>
          <h1 className="text-[clamp(3.5rem,11vw,9.5rem)] font-bold leading-none tracking-tighter gradient-text">
            JHA.
          </h1>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 mb-8 font-mono text-[clamp(0.85rem,2.2vw,1.2rem)]"
          style={{ color: "var(--text-1)" }}
        >
          <span style={{ color: "var(--accent-cyan)" }}>$ role&nbsp;</span>
          <span className="text-white">{displayed}</span>
          <span
            className="inline-block w-0.5 h-[1em] ml-0.5 align-middle animate-pulse"
            style={{ background: "var(--accent-cyan)" }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="max-w-2xl text-lg leading-relaxed mb-12"
          style={{ color: "var(--text-1)" }}
        >
          Building enterprise-grade cloud applications, AI-powered RAG systems,
          and end-to-end CI/CD pipelines at SAP Labs. 2+ years delivering
          measurable impact across 3 engineering teams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              boxShadow: "0 0 40px rgba(0,212,255,0.22)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase border transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "var(--text-0)",
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-2)" }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};
