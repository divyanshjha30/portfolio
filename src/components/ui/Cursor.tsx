import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

type Mode = "default" | "hover" | "text";

/** Dot-and-ring cursor. Only mounts on fine-pointer devices. */
export const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 34, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 380, damping: 34, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = fine.matches && !reduced.matches;
    setEnabled(on);
    if (!on) return;

    document.documentElement.classList.add("custom-cursor-active");
    return () =>
      document.documentElement.classList.remove("custom-cursor-active");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>(
        "a, button, [role='button'], input, textarea, [data-cursor]",
      );

      if (!interactive) {
        setMode("default");
        setLabel(null);
        return;
      }
      setLabel(interactive.dataset.cursorLabel ?? null);
      setMode(interactive.dataset.cursor === "text" ? "text" : "hover");
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringSize = mode === "hover" ? 56 : mode === "text" ? 72 : 30;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    >
      <motion.div
        className="absolute rounded-full border border-accent"
        style={{ x: ringX, y: ringY, top: 0, left: 0 }}
        animate={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          opacity: visible ? (mode === "default" ? 0.45 : 0.9) : 0,
          backgroundColor:
            mode === "default" ? "rgba(203,255,70,0)" : "rgba(203,255,70,0.1)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center font-mono text-[9px] uppercase tracking-[0.1em] text-accent"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="absolute h-1 w-1 rounded-full bg-accent"
        style={{ x, y, top: 0, left: 0, marginLeft: -2, marginTop: -2 }}
        animate={{ opacity: visible && mode === "default" ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
