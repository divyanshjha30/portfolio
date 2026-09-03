import { useEffect, useRef } from "react";

/**
 * Canvas dot grid that pushes dots away from the pointer and tints them
 * with the accent colour as they get close.
 */
export const DotField = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const spacing = 38;
    const influence = 180;

    let width = 0;
    let height = 0;
    let frame = 0;

    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (width === 0 || height === 0) return;

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const px = offsetX + i * spacing;
          const py = offsetY + j * spacing;

          const dx = px - current.x;
          const dy = py - current.y;
          const dist = Math.hypot(dx, dy);

          const falloff = dist < influence ? 1 - dist / influence : 0;
          const weight = falloff * falloff;

          const radius = 0.85 + weight * 2.1;
          const push = weight * 7;
          const nx = dist > 0 ? dx / dist : 0;
          const ny = dist > 0 ? dy / dist : 0;

          ctx.beginPath();
          ctx.arc(px + nx * push, py + ny * push, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            weight > 0.03
              ? `rgba(203,255,70,${0.08 + weight * 0.6})`
              : "rgba(244,244,240,0.075)";
          ctx.fill();
        }
      }
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      draw();
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      target.x = -9999;
      target.y = -9999;
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);

    if (!reduced) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
      frame = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none h-full w-full ${className}`}
    />
  );
};
