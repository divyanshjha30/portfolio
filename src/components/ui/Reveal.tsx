import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fade-and-rise wrapper driven by viewport entry. */
export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const child: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

/** Parent that staggers any <RevealItem> children as they enter view. */
export const RevealGroup = ({
  children,
  className,
  stagger = 0.08,
}: StaggerProps) => (
  <motion.div
    className={className}
    variants={container}
    custom={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={child}>
    {children}
  </motion.div>
);
