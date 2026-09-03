import { Hero } from "../components/home/Hero";
import { StatStrip } from "../components/home/StatStrip";
import { SelectedWork } from "../components/home/SelectedWork";
import { CareerStrip } from "../components/home/CareerStrip";
import { Principles } from "../components/home/Principles";
import { Marquee } from "../components/ui/Marquee";
import { marqueeWords } from "../data/site";
import { useSEO } from "../lib/seo";

export const Home = () => {
  useSEO(
    "Divyansh Jha — Software Engineer",
    "Software engineer at SAP Labs India building enterprise-grade distributed systems in Java, Spring Boot and microservices on SAP BTP Cloud Foundry.",
  );

  return (
    <>
      <Hero />
      <div className="border-y border-line py-6">
        <Marquee items={marqueeWords} />
      </div>
      <StatStrip />
      <SelectedWork />
      <CareerStrip />
      <Principles />
    </>
  );
};
