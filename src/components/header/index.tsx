"use client";

import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "../ui/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function Header() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "Home page for Shayan's portfolio",
    },

    {
      title: "Skills",
      href: "/skills",
      description: "Skills that Shayan Ali have",
    },
    {
      title: "Projects",
      href: "/projects",
      description: "Top projects created by Shayan Ali",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="z-40 w-full border-b-2 border-dotted bg-background/50 px-5 backdrop-blur-sm">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-2">
        <div className="flex items-center gap-10">
          <div className="flex lg:justify-center">
            <Image
              src={"/shayan-4k-2.jpeg"}
              alt="Shayan"
              width={100}
              height={100}
              containerClassName="rounded-full size-12"
            />
          </div>

          <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
            <NavigationMenu className="flex items-start justify-start">
              <NavigationMenuList className="flex flex-row justify-start gap-4">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <>
                        <NavigationMenuLink>
                          <Button variant="ghost">{item.title}</Button>
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                            <div className="flex h-full flex-col justify-between">
                              <div className="flex flex-col">
                                <p className="text-base">{item.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                              <Button size="sm" className="mt-10">
                                Book a call today
                              </Button>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex w-full justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="tel:03042585040">Urgent Call</a>
          </Button>
          <Button>Resume</Button>
        </div>
        <div className="flex shrink items-end justify-end lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="container absolute inset-x-0 top-[80px] flex w-full max-w-full flex-col gap-8 border-t bg-accent px-5 py-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
