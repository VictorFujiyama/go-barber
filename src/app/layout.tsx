import { cookiesThemeGet } from "@/shared/cookies/themeCookies";
import "@/shared/theme/global.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto_Slab } from "next/font/google";
import { ReactNode } from "react";

const RobotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gobarber",
};

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const theme = await cookiesThemeGet();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${RobotoSlab.className} ${theme}`}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="America/Sao_Paulo"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
