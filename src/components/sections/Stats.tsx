import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 2, suffix: "+", label: "Years at SAP" },
  { value: 3, suffix: "", label: "Engineering Rotations" },
  { value: 118, suffix: "", label: "API Endpoints Built" },
  { value: 5, suffix: "", label: "CI/CD Pipelines" },
  { value: 90, suffix: "%", label: "Mutation Coverage" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOut
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1200 / totalFrames);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export const Stats = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-5 overflow-hidden rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-6 py-10 text-center"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                background: "rgba(6,6,16,0.6)",
              }}
            >
              <div className="text-3xl font-bold gradient-text mb-2 leading-none">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-[10px] font-mono uppercase tracking-widest mt-1"
                style={{ color: "var(--text-2)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
