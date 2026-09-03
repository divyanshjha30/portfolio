import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (value: Lenis | null) => {
  instance = value;
};

export const getLenis = () => instance;

export const scrollToTop = (immediate = true) => {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { immediate });
    return;
  }
  window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
};
