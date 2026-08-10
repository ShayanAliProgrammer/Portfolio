"use client";

import { motion, type Variants } from "framer-motion";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiPhpFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { DiMongodb, DiMysql } from "react-icons/di";
import { FlowbiteLogo } from "~/components/logos/flowbite";
import { T3Logo } from "~/components/logos/t3";
import { TrpcLogo } from "~/components/logos/trpc";
import { TursoLogo } from "~/components/logos/turso";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const skills = [
  {
    title: "HTML5",
    icon: <RiHtml5Fill className="size-8" />,
    color: "#E34F26",
    level: 95,
  },
  {
    title: "CSS3",
    icon: <RiCss3Fill className="size-8" />,
    color: "#1572B6",
    level: 90,
  },
  {
    title: "JavaScript",
    icon: <RiJavascriptFill className="size-8" />,
    color: "#F7DF1E",
    level: 90,
  },
  {
    title: "TypeScript",
    icon: <RiJavascriptFill className="size-8" />,
    color: "#3178C6",
    level: 85,
  },
  {
    title: "React",
    icon: <RiReactjsFill className="size-8" />,
    color: "#61DAFB",
    level: 90,
  },
  {
    title: "Next.js",
    icon: <RiNextjsFill className="size-8" />,
    color: "#000000",
    level: 95,
  },
  {
    title: "Tailwind CSS",
    icon: <RiTailwindCssFill className="size-8" />,
    color: "#06B6D4",
    level: 90,
  },
  {
    title: "Bootstrap",
    icon: <RiBootstrapFill className="size-8" />,
    color: "#7952B3",
    level: 80,
  },
  {
    title: "Node.js",
    icon: <RiNodejsFill className="size-8" />,
    color: "#339933",
    level: 85,
  },
  {
    title: "Express",
    icon: <RiNodejsFill className="size-8" />,
    color: "#000000",
    level: 80,
  },
  {
    title: "MySQL",
    icon: <DiMysql className="size-8" />,
    color: "#4479A1",
    level: 80,
  },
  {
    title: "MongoDB",
    icon: <DiMongodb className="size-8" />,
    color: "#47A248",
    level: 85,
  },
  {
    title: "Turso",
    icon: <TursoLogo className="size-8" />,
    color: "#4FF8D2",
    level: 80,
  },
  {
    title: "PHP",
    icon: <RiPhpFill className="size-8" />,
    color: "#777BB4",
    level: 75,
  },
  {
    title: "tRPC",
    icon: <TrpcLogo className="size-8" />,
    color: "#398CCB",
    level: 90,
  },
  {
    title: "T3 Stack",
    icon: <T3Logo className="size-8" />,
    color: "#000000",
    level: 95,
  },
  {
    title: "Flowbite",
    icon: <FlowbiteLogo className="size-8" />,
    color: "#0786FB",
    level: 80,
  },
];

const categories = [
  { name: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { name: "Backend", skills: ["Node.js", "Express", "PHP"] },
  { name: "Database", skills: ["MySQL", "MongoDB", "Turso"] },
  { name: "Full Stack", skills: ["tRPC", "T3 Stack", "Flowbite"] },
];

export default function SkillsSection() {

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary mb-6">
              My Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I continuously learn and adapt to new technologies to deliver the best solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 text-center transition-all"
                >
                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent"
                    style={{ backgroundColor: `${skill.color}10` }}
                  />
                  <div className="flex justify-center mb-4">
                    <div
                      className="size-16 rounded-xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                  <div className="text-sm text-muted-foreground">{skill.level}%</div>
                  <div className="mt-3 h-1 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold tracking-tight mb-8 text-center">
              Skill Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-xl border border-border bg-card/50 p-6"
                >
                  <h4 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skillName, skillIndex) => {
                      const skill = skills.find(s => s.title === skillName);
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-1.5 text-sm"
                        >
                          <span className="text-muted-foreground">{skill?.icon}</span>
                          <span className="text-foreground">{skillName}</span>
                        </div>
                      );
                    })}
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
