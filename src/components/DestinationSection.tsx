import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Target, Users, Globe } from "lucide-react";

const DestinationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { icon: GraduationCap, label: "IIT Jodhpur", sublabel: "EE + Robotics" },
    { icon: Briefcase, label: "The Internship", sublabel: "OpenSesame" },
    { icon: Target, label: "The Mission", sublabel: "AI-Powered Learning" },
  ];

  return (
    <section id="destination" className="relative py-20 sm:py-32 px-6">
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
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Destination</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why OpenSesame is the critical next step
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {timeline.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <motion.div
                className={`flex flex-col items-center ${
                  index === 1 ? "scale-110" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <motion.div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center ${
                    index === 1
                      ? "bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground"
                  }`}
                  animate={
                    index === 1
                      ? {
                          boxShadow: [
                            "0 0 20px hsl(217 91% 60% / 0.3)",
                            "0 0 40px hsl(217 91% 60% / 0.5)",
                            "0 0 20px hsl(217 91% 60% / 0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </motion.div>
                <span className="mt-3 text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                <span className="text-xs text-muted-foreground">{item.sublabel}</span>
              </motion.div>

              {/* Connector */}
              {index < timeline.length - 1 && (
                <motion.div
                  className="hidden sm:block w-20 lg:w-32 h-0.5 mx-4 bg-gradient-to-r from-muted via-primary/30 to-muted"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="neural-card rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            My long-term career goal is to become a leading{" "}
            <span className="text-foreground font-semibold">
              Product-Minded AI Engineer
            </span>
            —someone who doesn't just write code, but understands the human impact 
            of the technology. OpenSesame is the critical next step in this journey 
            for two reasons:
          </p>

          <div className="space-y-6">
            {/* Reason 1 */}
            <motion.div
              className="flex gap-4 p-5 rounded-xl bg-muted/50 border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Extreme Programming & Mentorship
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The commitment to Extreme Programming (XP) and pair programming provides 
                  the rigorous, collaborative mentorship environment I need to refine my 
                  craft from 'hacking' to true engineering.
                </p>
              </div>
            </motion.div>

            {/* Reason 2 */}
            <motion.div
              className="flex gap-4 p-5 rounded-xl bg-muted/50 border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Mission Alignment
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your mission to empower global workforces aligns with my desire to build 
                  technology that amplifies human potential, rather than just automating 
                  tasks. I want to build the engine that helps the world learn smarter.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 sm:mt-32" />
    </section>
  );
};

export default DestinationSection;
