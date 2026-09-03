import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { Cursor } from "./components/ui/Cursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Preloader } from "./components/ui/Preloader";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <SmoothScroll>
          <div className="grain relative min-h-screen">
            <Preloader />
            <Cursor />
            <ScrollProgress />
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="work/:slug" element={<ProjectDetail />} />
                <Route path="experience" element={<Experience />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
