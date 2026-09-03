type Props = {
  items: readonly string[];
  duration?: number;
  className?: string;
};

/** Seamless horizontal ticker. The list is duplicated and shifted by 50%. */
export const Marquee = ({ items, duration = 44, className = "" }: Props) => (
  <div className={`marquee-mask overflow-hidden ${className}`}>
    <div
      className="flex w-max animate-marquee items-center gap-10"
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {[0, 1].map((pass) => (
        <div
          key={pass}
          className="flex items-center gap-10"
          aria-hidden={pass === 1}
        >
          {items.map((item) => (
            <span
              key={`${pass}-${item}`}
              className="flex shrink-0 items-center gap-10 font-mono text-sm uppercase tracking-[0.16em] text-paper-muted"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
