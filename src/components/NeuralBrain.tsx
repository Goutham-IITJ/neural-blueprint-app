import { motion } from "framer-motion";

const NeuralBrain = () => {
  const nodes = [
    { cx: 100, cy: 80, delay: 0 },
    { cx: 60, cy: 120, delay: 0.2 },
    { cx: 140, cy: 120, delay: 0.4 },
    { cx: 40, cy: 160, delay: 0.6 },
    { cx: 100, cy: 160, delay: 0.8 },
    { cx: 160, cy: 160, delay: 1 },
    { cx: 70, cy: 200, delay: 1.2 },
    { cx: 130, cy: 200, delay: 1.4 },
    { cx: 100, cy: 240, delay: 1.6 },
  ];

  const connections = [
    { x1: 100, y1: 80, x2: 60, y2: 120 },
    { x1: 100, y1: 80, x2: 140, y2: 120 },
    { x1: 60, y1: 120, x2: 40, y2: 160 },
    { x1: 60, y1: 120, x2: 100, y2: 160 },
    { x1: 140, y1: 120, x2: 100, y2: 160 },
    { x1: 140, y1: 120, x2: 160, y2: 160 },
    { x1: 40, y1: 160, x2: 70, y2: 200 },
    { x1: 100, y1: 160, x2: 70, y2: 200 },
    { x1: 100, y1: 160, x2: 130, y2: 200 },
    { x1: 160, y1: 160, x2: 130, y2: 200 },
    { x1: 70, y1: 200, x2: 100, y2: 240 },
    { x1: 130, y1: 200, x2: 100, y2: 240 },
  ];

  return (
    <div className="relative w-48 h-64 md:w-64 md:h-80">
      <svg
        viewBox="0 0 200 280"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(265 89% 62%)" />
          </linearGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60% / 0.6)" />
            <stop offset="100%" stopColor="hsl(186 100% 50% / 0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map((conn, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Data pulse along connections */}
        {connections.slice(0, 6).map((conn, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="3"
            fill="hsl(186 100% 50%)"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [conn.x1, conn.x2],
              cy: [conn.y1, conn.y2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.5 + 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="8"
              fill="url(#nodeGradient)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: node.delay + 0.5, ease: "backOut" }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill="none"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                delay: node.delay + 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default NeuralBrain;
