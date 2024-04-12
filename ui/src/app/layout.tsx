import type { ReactNode } from "react";

import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";

import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

const open_sans = Open_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "YUNN Quest | evnt.fi",
  applicationName: "YUNN Quest",
  description:
    "A blockchain game.",
  authors: {
    name: "Liam C",
    url: "https://github.com/mcorrig4",
  },
  // themeColor: "dark",
  // viewport: "width=device-width, initial-scale=1",
  icons: "favicon.ico",
  manifest: "site.webmanifest",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#151b28" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  userScalable: false,
  // colorScheme: 'dark'
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
