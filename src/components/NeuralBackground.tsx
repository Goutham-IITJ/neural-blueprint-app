import { motion } from "framer-motion";

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 neural-grid opacity-60" />
      
      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 60% / 0)" />
            <stop offset="50%" stopColor="hsl(217 91% 60% / 0.6)" />
            <stop offset="100%" stopColor="hsl(265 89% 62% / 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(186 100% 50% / 0)" />
            <stop offset="50%" stopColor="hsl(186 100% 50% / 0.4)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal flowing lines */}
        <motion.line
          x1="0" y1="20%" x2="100%" y2="20%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
        <motion.line
          x1="0" y1="50%" x2="100%" y2="50%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1, repeatDelay: 3 }}
        />
        <motion.line
          x1="0" y1="80%" x2="100%" y2="80%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 4 }}
        />
        
        {/* Vertical flowing lines */}
        <motion.line
          x1="25%" y1="0" x2="25%" y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 0.5, repeatDelay: 2 }}
        />
        <motion.line
          x1="75%" y1="0" x2="75%" y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1.5, repeatDelay: 3 }}
        />
      </svg>

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{ top: "10%", left: "10%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        style={{ top: "60%", right: "15%" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        style={{ bottom: "20%", left: "30%" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
};

export default NeuralBackground;
