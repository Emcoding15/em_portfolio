

import Header from "./Header";
import AboutSection from "../sections/AboutSection";
import HeroSection  from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";


export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div>
        <HeroSection />

        <AboutSection />

        <ProjectsSection />
        
        <ContactSection />
      </div>
    </main>
  );
}
