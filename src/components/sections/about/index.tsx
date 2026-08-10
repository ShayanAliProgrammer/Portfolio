"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Database, Server, Smartphone, Globe, Heart } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible user interfaces with React, Next.js, and modern CSS.",
      icon: <Code2 className="size-6" />,
    },
    {
      title: "Backend Development",
      description: "Creating scalable server-side applications with Node.js, Express, and databases.",
      icon: <Server className="size-6" />,
    },
    {
      title: "Database Design",
      description: "Designing efficient database schemas with PostgreSQL, MongoDB, and Turso.",
      icon: <Database className="size-6" />,
    },
    {
      title: "Mobile Responsive",
      description: "Ensuring perfect experience across all devices with responsive design.",
      icon: <Smartphone className="size-6" />,
    },
    {
      title: "SEO Optimization",
      description: "Implementing best practices for search engine visibility and performance.",
      icon: <Globe className="size-6" />,
    },
    {
      title: "Open Source",
      description: "Passionate about contributing to open source projects and communities.",
      icon: <Heart className="size-6" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-muted/50 to-background"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary mb-6">
              About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Passionate Full Stack Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              I'm a Full Stack Developer from Pakistan with over 5 years of experience in building 
              modern web applications. I specialize in the T3 Stack (TypeScript, tRPC, Tailwind CSS) 
              and Next.js, creating scalable, maintainable, and high-performance solutions.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              My journey started with a passion for creating things on the web. Over the years, 
              I've worked with various technologies and frameworks, constantly learning and 
              adapting to the ever-evolving web development landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <h3 className="font-semibold text-foreground mb-2">My Philosophy</h3>
                <p className="text-sm text-muted-foreground">
                  I believe in writing clean, maintainable code that solves real problems. 
                  User experience is at the heart of everything I build.
                </p>
              </div>
              
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <h3 className="font-semibold text-foreground mb-2">My Approach</h3>
                <p className="text-sm text-muted-foreground">
                  I follow modern development practices, including TypeScript for type safety, 
                  testing for reliability, and performance optimization.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold tracking-tight mb-8">What I Do</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
