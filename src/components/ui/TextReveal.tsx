import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/**
 * Masked word-by-word rise. Each word sits in an overflow-hidden box so it
 * appears to slide up from behind the line above it.
 *
 * Visibility is measured on the outer wrapper rather than the words: the words
 * start translated fully outside their clipping box, so an observer attached to
 * them would never report an intersection.
 */
export const TextReveal = ({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-40px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex overflow-hidden pb-[0.12em] align-bottom"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              animate={inView ? { y: 0 } : { y: "115%" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * stagger,
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
};
