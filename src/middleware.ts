import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// const locales = ["br", "en", "es"];

export default async function middleware(request: NextRequest) {
  // const token = request.cookies.get(AUTH_TOKEN_COOKIE)?.value;
  // const locale = request.cookies.get(LANGUAGE_COOKIE)?.value || "br";
  // const user = JSON.parse(request.cookies.get(USER_COOKIE)?.value || "{}");

  // const privatePaths = [
  //   "/orders",
  //   "/referencePhotos",
  //   "/users",
  //   "/newAccess",
  //   "/profile",
  // ];

  // const isPrivatePath = privatePaths.some((path) =>
  //   locales.some((locale) =>
  //     request.nextUrl.pathname.startsWith(`/${locale}${path}`)
  //   )
  // );

  // if (
  //   !token &&
  //   isPrivatePath &&
  //   !request.nextUrl.pathname.startsWith(`/${locale}/newAccess`)
  // ) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // } else if (token && !isPrivatePath) {
  //   if (user?.firstAccess) {
  //     return NextResponse.redirect(new URL(locale + "/newAccess", request.url));
  //   }
  //   return NextResponse.redirect(new URL(locale + "/orders/list", request.url));
  // }

  const i18nMiddleware = createMiddleware(routing);

  return i18nMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(en|br|es)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|service-worker.js|sitemap.xml|robots.txt).*)",
  ],
};
