import type { Metadata, Viewport } from "next"
import Script from "next/script"

import { SITE_URL } from "@/lib/site"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hetzner Cloud iOS App for iPhone | HetzPilot",
    template: "%s — HetzPilot",
  },
  description:
    "Monitor and manage Hetzner Cloud infrastructure securely from your iPhone with HetzPilot, a focused native iOS server management app.",
  applicationName: "HetzPilot",
  category: "developer tools",
  authors: [{ name: "Björn Benouarets", url: "https://benouarets.dev" }],
  creator: "Björn Benouarets",
  publisher: "Björn Benouarets",
  icons: {
    icon: "/ios-logo.png",
    apple: "/ios-logo.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "HetzPilot",
    title: "HetzPilot — Hetzner Cloud management for iPhone",
    description:
      "Monitor and manage Hetzner Cloud infrastructure from a focused, native iPhone app.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HetzPilot — Hetzner Cloud management for iPhone",
    description:
      "Monitor and manage Hetzner Cloud infrastructure from a focused, native iPhone app.",
  },
  appleWebApp: { capable: true, title: "HetzPilot", statusBarStyle: "default" },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "production" ? (
          <Script
            src="https://analytics.benouarets.cloud/script.js"
            data-website-id="c89c0f68-8e7c-4fe4-982c-167a6e26b7db"
            data-domains="hetzpilot.benouarets.dev"
            data-do-not-track="true"
            data-exclude-search="true"
            data-exclude-hash="true"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  )
}
