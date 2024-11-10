import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
      <main className='flex min-h-screen flex-col bg-[#121212]'>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
          <Encryption 
        </div> 
          <Footer/> 
      </main>
    );
  };