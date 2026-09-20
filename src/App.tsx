import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
