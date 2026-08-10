"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Code2, Rocket, Star, Zap, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Image from "~/components/ui/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function HeroSection() {
  const stats = [
    { label: "Years of Experience", value: "5+", icon: <Zap className="size-5" /> },
    { label: "Projects Completed", value: "50+", icon: <Rocket className="size-5" /> },
    { label: "GitHub Stars", value: "100+", icon: <Star className="size-5" /> },
    { label: "Technologies", value: "20+", icon: <Code2 className="size-5" /> },
  ];

  const socialLinks = [
    { href: "https://github.com/ShayanAliProgrammer", icon: <Github className="size-5" />, label: "GitHub" },
    { href: "https://linkedin.com/in/shayan-ali-jalbani", icon: <Linkedin className="size-5" />, label: "LinkedIn" },
    { href: "https://twitter.com/ShayanAliDev", icon: <Twitter className="size-5" />, label: "Twitter" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      {/* Floating Elements */}
      <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Hero Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                </span>
                Available for Freelance
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="gradient-text bg-gradient-to-r from-primary to-primary/60">
                  Full Stack Developer
                </span>
                <br />
                <span className="text-foreground">
                  Specializing in Next.js & T3 Stack
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground max-w-xl">
                I build scalable, high-performance web applications with modern technologies. 
                Passionate about creating exceptional user experiences with clean, maintainable code.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                <a href="tel:+923042585040">
                  <Code2 className="size-5" />
                  Hire Me Now
                </a>
              </Button>
              
              <Button asChild variant="outline" className="gap-2">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="gap-2">
                <a href="https://github.com/ShayanAliProgrammer" target="_blank">
                  <Github className="size-5" />
                  GitHub
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="pt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card/50 p-4"
                  >
                    <div className="flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative size-80 sm:size-96 lg:size-[500px]">
              {/* Background Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-4 rounded-full border-2 border-primary/20" />
              
              {/* Profile Image */}
              <div className="relative z-10 flex size-full items-center justify-center">
                <Image
                  src="/shayan-4k-2.jpeg"
                  alt="Shayan Ali Jalbani"
                  width={500}
                  height={500}
                  className="rounded-full object-cover dark:hidden"
                />
                <Image
                  src="/shayan-4k-2-dark.jpg"
                  alt="Shayan Ali Jalbani"
                  width={500}
                  height={500}
                  className="hidden rounded-full object-cover dark:inline"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                  T3 Stack Expert
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-0 z-20">
                <div className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg">
                  Next.js Specialist
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 z-10 size-16 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute -bottom-8 -right-8 z-10 size-16 rounded-full bg-primary/20 blur-xl" />
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-start gap-4 pt-12"
        >
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              asChild
              variant="ghost"
              size="icon"
              className="size-10 hover:bg-primary/10 hover:text-primary"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
