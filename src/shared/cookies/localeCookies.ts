"use server";
import { LocaleDTO } from "@/dtos/LocaleDTO";
import { cookies } from "next/headers";
import { LANGUAGE_COOKIE } from "./configCookies";

export async function cookiesLanguageSave(language: LocaleDTO): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(LANGUAGE_COOKIE, language);
}

export async function cookiesLanguageGet(): Promise<LocaleDTO> {
  const cookieStore = await cookies();
  const language = cookieStore.get(LANGUAGE_COOKIE)?.value as
    | LocaleDTO
    | undefined;

  return language ?? "br";
}

export async function cookiesLanguageRemove() {
  const cookieStore = await cookies();
  cookieStore.delete(LANGUAGE_COOKIE);
}
