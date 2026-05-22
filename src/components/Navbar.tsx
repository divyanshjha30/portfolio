import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 60);
      const el = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(pct, 100));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-100"
        style={{
          width: `${scrollPct}%`,
          background: "linear-gradient(to right, #00d4ff, #7c3aed, #ec4899)",
        }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060610]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              className="font-mono text-sm font-bold tracking-widest select-none"
            >
              <span style={{ color: "var(--accent-cyan)" }}>{"<"}</span>
              <span className="text-white">DJ</span>
              <span style={{ color: "var(--accent-cyan)" }}>{"/>"}</span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--text-1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-1)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="https://github.com/divyanshjha30"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-1)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-1)")
                }
              >
                <Github size={17} />
              </a>
              <a
                href="https://linkedin.com/in/divyanshjha30"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-1)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-1)")
                }
              >
                <Linkedin size={17} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase transition-all"
                style={{
                  borderColor: "var(--accent-cyan)",
                  color: "var(--accent-cyan)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "var(--accent-cyan)";
                  el.style.color = "var(--bg-0)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--accent-cyan)";
                }}
              >
                <FileDown size={13} /> Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden transition-colors"
              style={{ color: "var(--text-1)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-[#0a0a1a]/96 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm py-2 border-b border-white/5"
                style={{ color: "var(--text-1)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-sm font-semibold mt-1"
              style={{ color: "var(--accent-cyan)" }}
            >
              <FileDown size={15} /> Download Resume
            </a>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};
