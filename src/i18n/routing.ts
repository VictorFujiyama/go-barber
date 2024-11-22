import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const locales = ["br", "en", "es"];

export const routing = defineRouting({
  locales,
  defaultLocale: "br",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
