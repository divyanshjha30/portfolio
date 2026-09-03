import { useEffect } from "react";

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [name, key] = selector.includes("property")
      ? ["property", selector.split('="')[1].replace('"]', "")]
      : ["name", selector.split('="')[1].replace('"]', "")];
    el.setAttribute(name, key);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/** Sets per-route title, description and Open Graph tags. */
export const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://divyanshjha.in${window.location.pathname}`;
  }, [title, description]);
};
