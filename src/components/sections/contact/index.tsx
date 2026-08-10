"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "~/components/ui/button";

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

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="size-6" />,
      title: "Email",
      value: "shayanalijalbani@gmail.com",
      href: "mailto:shayanalijalbani@gmail.com",
    },
    {
      icon: <Phone className="size-6" />,
      title: "Phone",
      value: "+92 304 2585040",
      href: "tel:+923042585040",
    },
    {
      icon: <MapPin className="size-6" />,
      title: "Location",
      value: "Pakistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="size-5" />,
      href: "https://github.com/ShayanAliProgrammer",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="size-5" />,
      href: "https://linkedin.com/in/shayan-ali-jalbani",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="size-5" />,
      href: "https://twitter.com/ShayanAliDev",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="contact"
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
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to 
              be part of your vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold tracking-tight mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-6"
                  >
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      size="icon"
                      className="size-10 hover:bg-primary/10 hover:text-primary"
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold tracking-tight mb-8">Send Me A Message</h3>
              
              <form
                action="https://formspree.io/f/mleznjgo"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-primary hover:bg-primary/90"
                >
                  <Send className="size-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
