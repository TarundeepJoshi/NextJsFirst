import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
