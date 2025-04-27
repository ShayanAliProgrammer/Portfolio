import Link from "next/link";
import {
  RiBlueskyFill,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiThreadsFill,
} from "react-icons/ri";
import { Button } from "../ui/button";
import Image from "../ui/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-dashed bg-background py-20 text-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex size-20 overflow-hidden rounded-full border-2">
          <Image
            src="/logo.png"
            containerClassName="dark:hidden"
            alt="Shayan"
            width={80}
            height={80}
          />
          <Image
            src="/logo-dark.jpg"
            alt="Shayan"
            containerClassName="hidden dark:inline-block"
            width={80}
            height={80}
          />
        </div>

        <nav className="flex items-center gap-5">
          <Button asChild variant="ghost" size="sm">
            <Link href="/#home">Home</Link>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <Link href="/#skills">Skills</Link>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">Projects</Link>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <Link href="https://medium.com/@coding-master-shayan">Blog</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-6">
          <Button asChild variant="outline" size="icon">
            <a href="https://github.com/ShayanAliProgrammer" target="_blank">
              <RiGithubFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="https://facebook.com/share/1B4VKZFBkh/">
              <RiFacebookFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="#">
              <RiThreadsFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="#">
              <RiInstagramFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="#">
              <RiBlueskyFill size={20} />
            </a>
          </Button>
        </div>

        {/* <ThemeToggler /> */}

        <div className="max-w-xs text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shayan Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
