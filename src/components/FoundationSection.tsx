import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Cog, Trophy } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Architecture (MERN)",
    description:
      "Proficient in the TypeScript/React stack used at OpenSesame. Currently honing production-grade skills as a Developer Intern at AfterQuery (YC W25), focusing on scalable, maintainable code and fast iteration cycles.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Applied AI Integration",
    description:
      "I don't just use APIs; I integrate them to solve real problems. In 'Project Raseed,' I architected a serverless backend using Google Gemini to slash data processing latency by 60%, turning messy multimodal data into structured insights.",
    color: "secondary",
  },
  {
    icon: Cog,
    title: "Systems Thinking & Robotics",
    description:
      "As Coordinator of the Robotics Society and an EE major, I bring a hardware engineer's discipline to software. I understand constraints, optimization, and how individual components affect the entire system—crucial for complex B2B platforms.",
    color: "accent",
  },
  {
    icon: Trophy,
    title: "Competitive Collaboration",
    description:
      "Proven ability to deliver under pressure in diverse teams, securing Top 5 at Inter IIT Tech Meet and winning the Pitch Rush Product Hackathon. I thrive in collaborative, feedback-driven environments like XP.",
    color: "primary",
  },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = skill.icon;
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20 group-hover:border-primary/40",
    secondary: "bg-secondary/10 text-secondary border-secondary/20 group-hover:border-secondary/40",
    accent: "bg-accent/10 text-accent border-accent/20 group-hover:border-accent/40",
  };

  return (
    <motion.div
      ref={ref}
      className="group neural-card rounded-2xl p-6 sm:p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <div
        className={`inline-flex p-3 rounded-xl mb-5 border ${
          colorClasses[skill.color as keyof typeof colorClasses]
        } transition-colors duration-300`}
      >
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
        {skill.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
        {skill.description}
      </p>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <path
            d="M80 0 L80 20 L60 20 L60 40 L40 40 L40 60 L20 60 L20 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/20"
          />
        </svg>
      </div>
    </motion.div>
  );
};

const FoundationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="foundation" className="relative py-20 sm:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono uppercase tracking-widest text-secondary bg-secondary/10 rounded-full border border-secondary/20">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What strengths, skills, and perspectives will I bring to OpenSesame?
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        {/* Central Hub Decoration */}
        <motion.div
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-2 rounded-full border border-secondary/30" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm" />
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 sm:mt-32" />
    </section>
  );
};

export default FoundationSection;
