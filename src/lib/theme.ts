export const THEME_COOKIE = "portfolio-theme";
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export type Theme = "light" | "dark";

export function normalizeTheme(value: string | undefined): Theme {
  return value === "light" ? "light" : "dark";
}
