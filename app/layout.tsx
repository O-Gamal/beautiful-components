import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "./globals.css";
import Providers from "./providers";
import ChangeTheme from "./changeTheme";

export const metadata: Metadata = {
  title: "Minimal Next.js Starter",
  description: "A better create-next-app template",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <Providers>
          <ChangeTheme />
          {children}
        </Providers>
      </body>
    </html>
  );
}
