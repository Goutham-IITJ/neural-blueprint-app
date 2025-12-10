import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const links = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/goutham-a-s",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/goutham-as",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:b23ee1024@iitj.ac.in",
    },
  ];

  return (
    <footer className="relative py-20 sm:py-32 px-6">
      {/* Converging lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="hsl(217 91% 60% / 0)" />
              <stop offset="100%" stopColor="hsl(217 91% 60% / 0.2)" />
            </linearGradient>
            <linearGradient id="footerGrad2" x1="100%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="hsl(265 89% 62% / 0)" />
              <stop offset="100%" stopColor="hsl(265 89% 62% / 0.2)" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0" y1="0" x2="50%" y2="100%"
            stroke="url(#footerGrad1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2 }}
          />
          <motion.line
            x1="100%" y1="0" x2="50%" y2="100%"
            stroke="url(#footerGrad2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to <span className="text-gradient">Deploy</span> this Blueprint
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's build the future of learning together.
          </motion.p>

          {/* Resume Download Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="neural" size="lg" asChild>
              <a href="/Resume-Goutham.pdf" download className="group">
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                Download Full Resume (PDF)
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Email */}
          <motion.p
            className="mt-8 text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            b23ee1024@iitj.ac.in
          </motion.p>

          {/* Copyright */}
          <motion.div
            className="mt-16 pt-8 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Goutham A S. Designed with precision for OpenSesame.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
