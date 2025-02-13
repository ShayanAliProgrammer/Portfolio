import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "~/env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateURL(pathname: `/${string}`) {
  if (typeof window !== "undefined" && window.location) {
    return `${window.location.host}${pathname}`;
  }

  return `${env.APP_URL}${pathname}`;
}
