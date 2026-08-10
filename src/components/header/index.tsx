"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X, Code2, Home, LayoutGrid, User, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggler } from "../theme-toggler";
import Image from "../ui/image";

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="size-4" />,
    },
    {
      title: "About",
      href: "/#about",
      icon: <User className="size-4" />,
    },
    {
      title: "Skills",
      href: "/#skills",
      icon: <LayoutGrid className="size-4" />,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <LayoutGrid className="size-4" />,
    },
    {
      title: "Contact",
      href: "/#contact",
      icon: <Mail className="size-4" />,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      const section = href.substring(2);
      return searchParams.get("section") === section || 
             (pathname === "/" && window.location.hash === href);
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, searchParams]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-full border-2 border-primary">
            <Image
              src="/logo.png"
              alt="Shayan Ali"
              width={40}
              height={40}
              className="dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="Shayan Ali"
              width={40}
              height={40}
              className="hidden dark:inline"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-foreground">Shayan Ali</span>
            <span className="text-xs text-muted-foreground">Full Stack Developer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              variant={isActive(item.href) ? "secondary" : "ghost"}
              size="sm"
              asChild
              className="gap-2 transition-all hover:scale-105"
            >
              <Link href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>

        {/* CTA and Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggler />
          <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
            <a href="tel:+923042585040">
              <Code2 className="size-4" />
              <span className="hidden sm:inline">Hire Me</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-lg lg:hidden">
            <div className="container mx-auto max-w-7xl px-4 py-6">
              <nav className="flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "secondary" : "ghost"}
                    size="lg"
                    asChild
                    className="justify-start gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      {item.title}
                    </Link>
                  </Button>
                ))}
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <ThemeToggler />
                  <Button asChild className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                    <a href="tel:+923042585040">
                      <Code2 className="size-4" />
                      Hire Me
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
