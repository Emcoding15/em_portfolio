"use client";
import AboutSection from "../sections/AboutSection";
import HeroSection  from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import ChatbotWidget from "../components/ChatbotWidget";
import Header from "../components/Header";


export default function Home() {  
  return (
    <>
      <main>
        <div>
          <Header />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <ChatbotWidget />
        </div>
      </main>
    </>
  );
}