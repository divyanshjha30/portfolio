import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Magnetic } from "./Magnetic";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group/btn relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-ink hover:bg-paper",
  outline:
    "border border-line text-paper hover:border-accent hover:text-accent",
  ghost: "text-paper-dim hover:text-paper",
};

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  download?: boolean;
};

export const ActionLink = ({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  showArrow = true,
  download,
}: Props) => {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  return (
    <Magnetic className="inline-block" strength={10}>
      {to ? (
        <Link to={to} className={classes}>
          {content}
        </Link>
      ) : (
        <a
          href={href}
          className={classes}
          target={download ? undefined : "_blank"}
          rel="noopener noreferrer"
          download={download}
        >
          {content}
        </a>
      )}
    </Magnetic>
  );
};
