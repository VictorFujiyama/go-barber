"use server";
import { ThemeDTO } from "@/dtos/ThemeDTO";
import { cookies } from "next/headers";
import { THEME_COOKIE } from "./configCookies";

export async function cookiesThemeSave(theme: ThemeDTO) {
  const cookieStore = await cookies();
  cookieStore.set(THEME_COOKIE, theme);
}

export async function cookiesThemeGet(): Promise<ThemeDTO> {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_COOKIE)?.value;

  if (theme === "light" || theme === "dark") {
    return theme;
  }

  return "light";
}

export async function cookiesThemeRemove() {
  const cookieStore = await cookies();
  cookieStore.delete(THEME_COOKIE);
}
