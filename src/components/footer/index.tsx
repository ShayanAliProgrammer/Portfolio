"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "../ui/image";
import { Home, LayoutGrid, User, Mail, Code2 } from "lucide-react";
import { ThemeToggler } from "../theme-toggler";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationItems = [
    { href: "/", label: "Home", icon: <Home className="size-4" /> },
    { href: "/#about", label: "About", icon: <User className="size-4" /> },
    { href: "/#skills", label: "Skills", icon: <LayoutGrid className="size-4" /> },
    { href: "/projects", label: "Projects", icon: <LayoutGrid className="size-4" /> },
    { href: "/#contact", label: "Contact", icon: <Mail className="size-4" /> },
  ];

  const socialLinks = [
    {
      href: "https://github.com/ShayanAliProgrammer",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/shayan-ali-jalbani",
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/ShayanAliDev",
      label: "Twitter",
    },
    {
      href: "https://medium.com/@coding-master-shayan",
      label: "Medium",
    },
  ];

  return (
    <footer className="border-t bg-background/50 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative size-12 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src="/logo.png"
                  alt="Shayan Ali"
                  width={48}
                  height={48}
                  className="dark:hidden"
                />
                <Image
                  src="/logo-dark.png"
                  alt="Shayan Ali"
                  width={48}
                  height={48}
                  className="hidden dark:inline"
                />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Shayan Ali</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground">
              Building modern web applications with Next.js, TypeScript, and the T3 Stack.
            </p>

            <div className="flex gap-2">
              <ThemeToggler />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  size="sm"
                  className="justify-start gap-3 w-full"
                >
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Projects</h4>
            <nav className="space-y-4">
              <Button asChild variant="ghost" size="sm" className="justify-start w-full">
                <Link href="/projects">View All Projects</Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="justify-start w-full">
                <a href="https://github.com/ShayanAliProgrammer" target="_blank">
                  GitHub Profile
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="justify-start w-full">
                <a href="https://medium.com/@coding-master-shayan" target="_blank">
                  Blog Posts
                </a>
              </Button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <Button asChild variant="ghost" size="sm" className="justify-start w-full">
                <a href="mailto:shayanalijalbani@gmail.com">
                  shayanalijalbani@gmail.com
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="justify-start w-full">
                <a href="tel:+923042585040">
                  +92 304 2585040
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2 w-full">
                <a href="tel:+923042585040">
                  <Code2 className="size-4" />
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Shayan Ali Jalbani. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  size="sm"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
