import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
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

  return (
    <header className="z-40 w-full px-5 py-3">
      <div className="container relative mx-auto flex flex-row items-center gap-x-4 lg:grid lg:grid-cols-2">
        <div className="flex items-center gap-x-10">
          <div className="flex lg:justify-center">
            <Link href="/">
              <Image
                src={"/shayan-4k-2.jpeg"}
                alt="Shayan"
                width={100}
                height={100}
                containerClassName="border dark:hidden size-12"
              />
              <Image
                src={"/shayan-4k-2-dark.jpg"}
                alt="Shayan"
                width={100}
                height={100}
                containerClassName="border dark:inline-block hidden size-12"
              />
            </Link>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen">
              {navigationItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex w-full items-center justify-between"
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                    </Link>
                  ) : (
                    <div className="flex w-full items-center justify-between">
                      <span className="text-lg">{item.title}</span>
                    </div>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
