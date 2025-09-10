"use client";
// import Header from "./Header";
import SectionTabs from "../components/SectionTabs";
import AboutSection from "../sections/AboutSection";
import HeroSection  from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {  
  return (
    <main className="relative">
      <SectionTabs />
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}