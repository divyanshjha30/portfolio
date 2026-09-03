import { useEffect, useState } from "react";
import { AnimatePresence, motion, animate } from "framer-motion";

const SESSION_KEY = "dj-intro-seen";

const readSeen = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return true;
  }
};

/** First-visit-per-session intro curtain with a counter. */
export const Preloader = () => {
  const [show, setShow] = useState(() => !readSeen());
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!show) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.body.style.overflow = "hidden";

    const finish = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* storage unavailable — intro simply replays */
      }
      setShow(false);
    };

    if (reduced) {
      finish();
      document.body.style.overflow = "";
      return;
    }

    const controls = animate(0, 100, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => window.setTimeout(finish, 280),
    });

    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-ink p-6 sm:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-paper-muted">
            <span>Divyansh Jha</span>
            <span>Portfolio — 2026</span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="serif text-[15vw] leading-[0.8] text-paper sm:text-[11vw]"
            >
              {count}
              <span className="text-accent">%</span>
            </motion.span>
            <span className="mb-3 hidden max-w-[22ch] text-right text-sm text-paper-muted sm:block">
              Software engineer building enterprise-grade distributed systems.
            </span>
          </div>

          <div className="h-px w-full bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
