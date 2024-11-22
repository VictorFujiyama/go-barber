import { LocaleDTO } from "@/dtos/LocaleDTO";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as LocaleDTO)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../shared/translations/${locale}.json`)).default,
  };
});