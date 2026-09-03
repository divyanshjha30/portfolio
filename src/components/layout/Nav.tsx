import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile, socials } from "../../data/site";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9990] transition-colors duration-500 ${
          scrolled ? "border-b border-line bg-ink/80 backdrop-blur-xl" : ""
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            aria-label="Divyansh Jha — home"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-paper">
              Divyansh Jha
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-paper"
                      : "text-paper-muted hover:text-paper"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-line bg-ink-3"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim transition-colors duration-300 hover:border-accent hover:text-accent sm:inline-flex"
            >
              Résumé
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9989] bg-ink px-5 pb-10 pt-[88px] md:hidden"
          >
            <nav className="flex flex-col">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                  className="border-b border-line"
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-baseline justify-between py-5 text-4xl tracking-tight ${
                        isActive ? "text-accent" : "text-paper"
                      }`
                    }
                  >
                    {item.label}
                    <span className="font-mono text-[11px] text-paper-faint">
                      0{i + 1}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="mt-10 space-y-1"
            >
              <p className="eyebrow mb-4">Elsewhere</p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-sm text-paper-dim"
                >
                  {s.label}
                  <span className="font-mono text-[11px] text-paper-faint">
                    {s.handle}
                  </span>
                </a>
              ))}
              <p className="pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-faint">
                {profile.location}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
