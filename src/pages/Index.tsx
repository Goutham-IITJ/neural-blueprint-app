import NeuralBackground from "@/components/NeuralBackground";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import ProjectsSection from "@/components/ProjectsSection";
import EngineSection from "@/components/EngineSection";
import DestinationSection from "@/components/DestinationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <NavBar />
      
      {/* Neural Background */}
      <NeuralBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <FoundationSection />
        <ProjectsSection />
        <EngineSection />
        <DestinationSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
