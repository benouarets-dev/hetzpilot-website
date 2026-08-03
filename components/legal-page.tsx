import type { ReactNode } from "react"

import { SiteFooter, SiteHeader } from "@/components/site-shell"
import { StructuredData } from "@/components/structured-data"
import { SITE_URL } from "@/lib/site"

export function LegalPage({
  eyebrow,
  title,
  intro,
  path,
  updated = "Last updated August 3, 2026",
  featured,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  path: string
  updated?: string
  featured?: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}${path}#webpage`,
              url: `${SITE_URL}${path}`,
              name: title,
              description: intro,
              inLanguage: "en",
              dateModified: "2026-08-03",
              isPartOf: {
                "@type": "WebSite",
                name: "HetzPilot",
                url: SITE_URL,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "HetzPilot",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: eyebrow,
                  item: `${SITE_URL}${path}`,
                },
              ],
            },
          ],
        }}
      />
      <SiteHeader />
      <main className="legal-page">
        <header className="legal-hero">
          <span className="section-label">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>{updated}</small>
        </header>
        {featured ? <div className="legal-feature">{featured}</div> : null}
        <article className="legal-content">{children}</article>
      </main>
      <SiteFooter />
    </>
  )
}
