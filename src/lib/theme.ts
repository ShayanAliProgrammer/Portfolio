export const THEME_COOKIE = "portfolio-theme";
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export type Theme = "light" | "dark" | "system";

export function normalizeTheme(value: string | undefined): Theme {
  if (value === "light" || value === "dark" || value === "system") {
    return value;
  }

  return "system";
}
