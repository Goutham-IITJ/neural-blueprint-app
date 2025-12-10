import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap } from "lucide-react";

const EngineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="engine" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20">
            AI Vision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Engine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI as the Ultimate Catalyst for Learning
          </p>
        </motion.div>

        {/* Data Flow Visualization */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {/* Unstructured Data */}
            <motion.div
              className="flex-1 max-w-sm neural-card rounded-2xl p-6 text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {["Audio", "Visual", "Text", "Data"].map((item, i) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Unstructured Input</p>
            </motion.div>

            {/* Arrow & AI Prism */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-muted to-primary/50" />
              
              {/* AI Prism */}
              <div className="relative">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rotate-45 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-glow"
                  animate={{
                    boxShadow: [
                      "0 0 30px hsl(217 91% 60% / 0.3)",
                      "0 0 50px hsl(265 89% 62% / 0.4)",
                      "0 0 30px hsl(186 100% 50% / 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground -rotate-45" />
                </motion.div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground whitespace-nowrap">
                  AI Engine
                </span>
              </div>

              <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-accent/50 to-muted" />
            </motion.div>

            {/* Structured Output */}
            <motion.div
              className="flex-1 max-w-sm neural-card rounded-2xl p-6 text-center border-primary/20"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col gap-2 mb-4">
                {["Personalized Paths", "Micro-Skills", "Real-time Coaching"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 rounded-full text-primary"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <p className="text-sm text-muted-foreground">Structured Output</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What Excites Me */}
          <motion.div
            className="neural-card rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">What Excites Me</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              What excites me about AI is its ability to compress the{" "}
              <span className="text-foreground font-medium">'time-to-competence.'</span>{" "}
              In my multimodal Emotion Recognition project, I saw how synthesizing 
              disparate data sources (audio/visual/text) creates clarity from chaos. 
              In the workforce, AI won't just retrieve information; it will understand 
              the context of the worker's struggle and deliver the exact micro-skill 
              needed in that moment.
            </p>
          </motion.div>

          {/* The Future of Work */}
          <motion.div
            className="neural-card rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">The Future of Work</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The future of learning isn't static courses; it's{" "}
              <span className="text-foreground font-medium">
                dynamic, adaptive coaching.
              </span>{" "}
              AI will transform L&D from a passive requirement into a 
              hyper-personalized, always-on growth engine. It shifts the focus from{" "}
              <span className="italic">'what courses did you complete?'</span> to{" "}
              <span className="text-primary font-medium">
                'what problems can you now solve?'
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 sm:mt-32" />
    </section>
  );
};

export default EngineSection;
