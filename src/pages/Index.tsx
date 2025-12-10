import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NeuralBackground from "@/components/NeuralBackground";
import NavBar from "@/components/NavBar";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import ProjectsSection from "@/components/ProjectsSection";
import EngineSection from "@/components/EngineSection";
import DestinationSection from "@/components/DestinationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default Index;
