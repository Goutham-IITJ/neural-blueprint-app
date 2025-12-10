import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Neural nodes animation */}
      <div className="relative w-32 h-32 mb-8">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent"
            style={{
              left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
              top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {/* Center node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 20px hsl(217 91% 60% / 0.4)",
              "0 0 40px hsl(217 91% 60% / 0.6)",
              "0 0 20px hsl(217 91% 60% / 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((i * Math.PI * 2) / 6)}
              y2={50 + 40 * Math.sin((i * Math.PI * 2) / 6)}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" />
              <stop offset="100%" stopColor="hsl(186 100% 50%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-gradient mb-2">
          Initializing Blueprint
        </h2>
        <p className="text-sm text-muted-foreground font-mono">
          Loading neural pathways...
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Progress text */}
      <motion.span
        className="mt-3 text-xs font-mono text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
