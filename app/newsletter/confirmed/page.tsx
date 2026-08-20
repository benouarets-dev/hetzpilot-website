import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Sparkles } from "lucide-react"

import { SiteHeader, SiteFooter } from "@/components/site-shell"
import { AppleDark } from "@/components/ui/svgs/appleDark"
import { APP_STORE_URL, IS_APP_AVAILABLE, SITE_BASE_PATH } from "@/lib/site"

export const metadata: Metadata = {
  title: "Newsletter Subscription Confirmed | HetzPilot",
  description: "Your newsletter subscription for HetzPilot has been confirmed.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NewsletterConfirmedPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <section className="legal-hero" style={{ textAlign: "center" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "rgba(22, 133, 86, 0.12)",
              color: "var(--green)",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 24px",
            }}
          >
            <Check style={{ width: "32px", height: "32px", strokeWidth: 3 }} />
          </div>

          <span className="section-label">Newsletter Subscription Confirmed</span>
          <h1 style={{ marginInline: "auto" }}>Newsletter subscription confirmed!</h1>
          <p style={{ marginInline: "auto" }}>
            Thank you for confirming your email address. You are now subscribed to the HetzPilot newsletter and will receive product updates, release announcements, and tips.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              marginTop: "36px",
              flexWrap: "wrap",
            }}
          >
            {IS_APP_AVAILABLE ? (
              <a
                className="primary-button"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                data-conversion="app-store-download"
                data-placement="newsletter-confirmed"
              >
                <AppleDark className="apple-mark" aria-hidden="true" /> Download on App Store
              </a>
            ) : null}

            <Link className="secondary-button" style={{ background: "var(--ink)", color: "#fff" }} href="/">
              Back to HetzPilot <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
