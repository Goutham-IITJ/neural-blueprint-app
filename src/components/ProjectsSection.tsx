import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, Database, Brain, ShoppingCart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectRaseed from "@/assets/project-raseed.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";

const projects = [
  {
    id: "raseed",
    title: "Project Raseed",
    subtitle: "AI-First Receipt Intelligence Engine",
    image: projectRaseed,
    description:
      "Architected a vision-based ingestion pipeline using Gemini 1.5 Flash, achieving 100% automated extraction of unstructured receipt data into normalized SQLite schema. Integrated Google Wallet API for instant digital pass generation.",
    highlights: [
      "60% reduction in data processing latency",
      "Zero-shot SQL reasoning via LangChain",
      "Real-time Plotly dashboards",
    ],
    tech: ["Gemini-1.5-flash", "Python", "Google Wallet API", "SQL", "LangChain", "Streamlit"],
    icon: Sparkles,
    color: "primary",
    github: "https://github.com",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    subtitle: "Full-Stack MERN Application",
    image: projectEcommerce,
    description:
      "Developed a responsive e-commerce web application with seamless user authentication, real-time product management, and secure transactions. Mobile-first design with Tailwind CSS.",
    highlights: [
      "30% improvement in user engagement",
      "2-second reduction in page load times",
      "Secure payment via Razorpay",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux", "Tailwind CSS"],
    icon: ShoppingCart,
    color: "secondary",
    github: "https://github.com",
  },
  {
    id: "sentiment",
    title: "SentimentSphere",
    subtitle: "Multimodal Emotion Recognition",
    image: projectSentiment,
    description:
      "Designed a real-time facial emotion detector using CNN with 50ms response latency. Integrated BiLSTM text classifier with GloVe embeddings for robust multimodal emotion predictions.",
    highlights: [
      "68% CNN validation accuracy",
      "20% improvement over single-modality",
      "Real-time video analysis",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "NLP", "GloVe", "BiLSTM"],
    icon: Brain,
    color: "accent",
    github: "https://github.com",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = project.icon;
  const colorMap = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      gradient: "from-primary/20 to-primary/5",
    },
    secondary: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary/20",
      gradient: "from-secondary/20 to-secondary/5",
    },
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/20",
      gradient: "from-accent/20 to-accent/5",
    },
  };

  const colors = colorMap[project.color as keyof typeof colorMap];

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="neural-card rounded-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} to-transparent`}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.3 }}
          />
          {/* Icon Badge */}
          <div
            className={`absolute top-4 left-4 p-2.5 rounded-xl ${colors.bg} ${colors.text} backdrop-blur-sm border ${colors.border}`}
          >
            <Icon className="w-5 h-5" />
          </div>
          {/* GitHub Link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2.5 rounded-xl bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>
            <p className={`text-sm font-medium ${colors.text}`}>{project.subtitle}</p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-5">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + i * 0.1 }}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.text}`}>
                  <div className={`w-full h-full rounded-full ${colors.text.replace("text-", "bg-")}`} />
                </div>
                <span className="text-foreground">{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative glow on hover */}
      <motion.div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${
          project.color === "primary"
            ? "from-primary/20 via-secondary/20 to-primary/20"
            : project.color === "secondary"
            ? "from-secondary/20 via-primary/20 to-secondary/20"
            : "from-accent/20 via-primary/20 to-accent/20"
        } opacity-0 blur-xl -z-10`}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Blueprint</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications demonstrating AI integration, full-stack development, and systems thinking.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-border" />
            <Database className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">More projects on GitHub</span>
            <Shield className="w-4 h-4" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 sm:mt-32" />
    </section>
  );
};

export default ProjectsSection;
