import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { Achievements } from "../components/sections/Achievements";
import { Hobbies } from "../components/sections/Hobbies";
import { Contact } from "../components/sections/Contact";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <ProjectsSection />
      <Achievements />
      <Hobbies />
      <Contact />
    </main>
  );
};
