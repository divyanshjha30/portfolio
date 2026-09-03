import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { scrollToTop } from "../../lib/lenis";

export const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait" onExitComplete={() => scrollToTop()}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};
