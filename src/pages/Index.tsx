import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import ResumeTab from "@/components/ResumeTab";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <ResumeTab />
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <TimelineSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
